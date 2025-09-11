import { TAG_MAPPING } from "@/constants/reviewStats";

interface ReviewCardProps {
  author: string;
  content: string;
  rating: number;
  visitDate: string;
  visitCount: number;
  verificationMethod: string;
  tags: string[];
}

const ReviewCard = ({
  author,
  content,
  rating,
  visitDate,
  visitCount,
  verificationMethod,
  tags,
}: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
      {/* 작성자 정보 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{author}</h4>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {visitDate} / {visitCount}번째 방문 / {verificationMethod}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 리뷰 내용 */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => {
          // TAG_MAPPING에서 매핑된 라벨을 찾거나, 없으면 원본 태그 사용
          const mappedTag = TAG_MAPPING[tag as keyof typeof TAG_MAPPING] || tag;
          return (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-900 text-sm rounded-1xl"
            >
              {mappedTag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
