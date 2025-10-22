export async function handler(event, context) {
  const functionUrl = `https://miatapedia.info/.netlify/functions/check-schema?cb=${Date.now()}`;

  try {
    const response = await fetch(functionUrl, {
      headers: {
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
      }
    });

    const data = await response.json();

    if (data.status === "OK") {
      console.log(`[${new Date().toISOString()}] ✅ BreadcrumbList check OK - Schema validation successful`);
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          result: "OK",
          message: "BreadcrumbList monitoring successful",
          checkedAt: new Date().toISOString(),
          details: data
        })
      };
    } else {
      console.error(`[${new Date().toISOString()}] ❌ BreadcrumbList check ERROR: ${data.message || "No details"}`);
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          result: "ERROR",
          message: "BreadcrumbList validation failed",
          checkedAt: new Date().toISOString(),
          details: data
        })
      };
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ❌ Scheduled check failed: ${error.message}`);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        result: "ERROR",
        message: error.message,
        checkedAt: new Date().toISOString()
      })
    };
  }
}