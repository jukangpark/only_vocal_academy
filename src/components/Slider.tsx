import { useEffect, useState } from "react";
import Image from "next/image";

const Slider = ({ duplicatedAwards }: { duplicatedAwards: string[] }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = (elapsed / 20000) % 1; // 20초 주기로 무한 반복
      setAnimationProgress(progress);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="mb-12 overflow-hidden">
      <div
        className="flex space-x-6"
        style={{
          transform: `translateX(-${animationProgress * 100}%)`,
        }}
      >
        {duplicatedAwards.map((award, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src={award}
              alt={`수상 내역 ${index + 1}`}
              width={256}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
