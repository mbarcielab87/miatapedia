export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      message: "pong",
      timestamp: new Date().toISOString(),
      netlifyFunctionsActive: true
    })
  };
}