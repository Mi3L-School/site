"use client";

import { useState } from "react";

type McqProps = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export default function Mcq({ question, options, correctAnswer }: McqProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setShowAnswer(true);
  };

  return (
    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded">
      <p className="text-lg font-semibold text-gray-900 mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selected === option;
          const isCorrect = option === correctAnswer;
          const showResult = showAnswer && isSelected;

          return (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={showAnswer}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                showResult
                  ? isCorrect
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                  : isSelected
                  ? "bg-purple-100 border-purple-500"
                  : "bg-white border-gray-300 hover:border-purple-300"
              } ${showAnswer ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && (
                  <span className="text-xl">
                    {isCorrect ? "✓" : "✗"}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-sm text-gray-700">
            <strong>Correct Answer:</strong> {correctAnswer}
          </p>
        </div>
      )}
    </div>
  );
}