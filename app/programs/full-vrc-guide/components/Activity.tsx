"use client";

import { useState } from "react";

type ActivityProps = {
  question: string;
  answer: string;
};

export default function Activity({ question, answer }: ActivityProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded">
      <div className="flex items-start gap-3 mb-4">
        <svg
          className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <p className="text-lg font-semibold text-gray-900">{question}</p>
      </div>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium text-sm"
      >
        {showAnswer ? "Hide" : "Show"} Solution
      </button>
      {showAnswer && (
        <div className="mt-4 p-4 bg-gray-900 rounded-lg">
          <p className="text-sm text-gray-400 mb-2 font-semibold">Solution:</p>
          <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
            {answer}
          </pre>
        </div>
      )}
    </div>
  );
}