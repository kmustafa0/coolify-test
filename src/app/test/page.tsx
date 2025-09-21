import TestClient from "./components/TestClient";
import { getServerMessage } from "../actions/test";

async function getApiMessage() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/test`,
      {
        cache: "no-store",
      }
    );
    return await response.json();
  } catch (error) {
    return { success: false, error: "API error" };
  }
}

export default async function TestPage() {
  const serverMessage = await getServerMessage();
  const apiMessage = await getApiMessage();

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-black dark:text-white text-center">
          VPS Test Page
        </h1>

        {/* Server Component Test */}
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Server Component Test
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                Server Action Result:
              </h3>
              <pre className="text-sm text-gray-700 dark:text-gray-300">
                {JSON.stringify(serverMessage, null, 2)}
              </pre>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                API Route Result:
              </h3>
              <pre className="text-sm text-gray-700 dark:text-gray-300">
                {JSON.stringify(apiMessage, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* Client Component Test */}
        <TestClient />

        {/* Navigation */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
