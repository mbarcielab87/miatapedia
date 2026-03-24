import { NextRequest, NextResponse } from 'next/server';
import { searchContent, getSearchSuggestions, getPopularSearches, getSearchStats } from '@/lib/search';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type') || 'search';
  const limit = parseInt(searchParams.get('limit') || '20');

  try {
    switch (type) {
      case 'search':
        const results = searchContent(query, limit);
        return NextResponse.json({
          query,
          results,
          total: results.length,
          hasMore: results.length === limit
        });

      case 'suggestions':
        const suggestions = getSearchSuggestions(query);
        return NextResponse.json({ suggestions });

      case 'popular':
        const popular = getPopularSearches();
        return NextResponse.json({ popular });

      case 'stats':
        const stats = getSearchStats();
        return NextResponse.json({ stats });

      default:
        return NextResponse.json({ error: 'Invalid search type' }, { status: 400 });
    }
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, limit = 20 } = body;

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const results = searchContent(query, limit);

    return NextResponse.json({
      query,
      results,
      total: results.length,
      hasMore: results.length === limit
    });
  } catch (error) {
    console.error('Search API POST error:', error);
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}