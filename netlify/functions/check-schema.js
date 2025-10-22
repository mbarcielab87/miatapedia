export async function handler(event, context) {
  const url = `https://miatapedia.info/?cb=${Date.now()}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();

    const hasBreadcrumbList = html.includes('"@type": "BreadcrumbList"');
    const hasItemListElement = html.includes('"itemListElement"');

    if (hasBreadcrumbList && hasItemListElement) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          status: "OK",
          message: "BreadcrumbList with itemListElement found",
          checkedAt: new Date().toISOString(),
          url: url
        })
      };
    } else {
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          status: "ERROR",
          message: `Missing: ${!hasBreadcrumbList ? 'BreadcrumbList ' : ''}${!hasItemListElement ? 'itemListElement' : ''}`.trim(),
          checkedAt: new Date().toISOString(),
          url: url
        })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        status: "ERROR",
        message: error.message,
        checkedAt: new Date().toISOString()
      })
    };
  }
}