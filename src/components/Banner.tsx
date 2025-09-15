const Banner = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <section className="relative h-80 w-full overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* 오버레이 (텍스트 가독성을 위한 어두운 반투명 레이어) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
