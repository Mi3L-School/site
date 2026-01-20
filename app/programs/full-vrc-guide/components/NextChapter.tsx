import Link from "next/link";

type NextChapterProps = {
  courseName: string;
  chapterName: string;
  chapterNum: number;
  description?: string;
};

export default function NextChapter({
  courseName,
  chapterName,
  chapterNum,
  description,
}: NextChapterProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <Link
        href={`/programs/${courseName}/chapter${chapterNum}`}
        className="block bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-6 transition-colors shadow-lg hover:shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-90 mb-1">Next Chapter</p>
            <h3 className="text-2xl font-bold">{chapterName}</h3>
            {description && (
              <p className="text-sm mt-2 opacity-90">{description}</p>
            )}
          </div>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}