"use client";

import { useState } from "react";

type FillBlankProps = {
  question: string;
  answer: string;
};

export default function FillBlank({ question, answer }: FillBlankProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheck = () => {
    const normalizedUser = userAnswer.trim().toLowerCase();
    const normalizedAnswer = answer.trim().toLowerCase();
    const correct = normalizedUser === normalizedAnswer;
    setIsCorrect(correct);
    setShowAnswer(true);
  };

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded">
      <p className="text-lg font-semibold text-gray-900 mb-4">{question}</p>
      <div className="flex gap-3 items-center">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your answer..."
        />
        <button
          onClick={handleCheck}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Check
        </button>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
        >
          {showAnswer ? "Hide" : "Show"} Answer
        </button>
      </div>
      {showAnswer && (
        <div className="mt-4">
          {isCorrect !== null && (
            <p
              className={`font-semibold mb-2 ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
            </p>
          )}
          <p className="text-gray-700">
            <strong>Answer:</strong> <code className="bg-gray-200 px-2 py-1 rounded">{answer}</code>
          </p>
        </div>
      )}
    </div>
  );
}