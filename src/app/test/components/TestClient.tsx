"use client";

import { useState } from "react";
import { processTestData } from "../../actions/test";

export default function TestClient() {
  const [data, setData] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.trim()) return;

    setLoading(true);
    try {
      const response = await processTestData(data);
      setResult(response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
        Client Component Test
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter test data..."
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          {loading ? "Processing..." : "Server Action Test"}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="font-semibold text-black dark:text-white mb-2">
            Result:
          </h4>
          <pre className="text-sm text-gray-700 dark:text-gray-300">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
