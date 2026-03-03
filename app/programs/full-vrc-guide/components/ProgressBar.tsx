import Link from "next/link";

type ProgressBarProps = {
  courseName: string;
  chapterName: string;
  chapterNum: number;
  chapters: string[];
  description?: string;
};

export default function ProgressBar({
  courseName,
  chapterName,
  chapterNum,
  chapters,
  description,
}: ProgressBarProps) {
  const progress = (chapterNum / chapters.length) * 100;

  return (
    <div className="bg-gray-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div>
            <Link
              href={`/programs/${courseName}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Course
            </Link>
            <h2 className="text-xl font-bold mt-1">{chapterName}</h2>
            {description && (
              <p className="text-sm text-gray-300 mt-1">{description}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">
              Chapter {chapterNum} of {chapters.length}
            </p>
            <p className="text-lg font-semibold">{Math.round(progress)}%</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}