"use server";

export async function getServerMessage() {
  return {
    message: "Server Action is working!",
    timestamp: new Date().toISOString(),
    type: "server-action",
  };
}

export async function processTestData(data: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate processing

  return {
    processed: true,
    originalData: data,
    result: `Processed data: ${data.toUpperCase()}`,
    timestamp: new Date().toISOString(),
  };
}
