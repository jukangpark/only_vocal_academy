interface ProgressBarProps {
  label: string;
  value: number;
  maxValue: number;
}

const ProgressBar = ({ label, value, maxValue }: ProgressBarProps) => {
  const percentage = (value / maxValue) * 100;

  // value에 따라 opacity 계산 (0.05 ~ 0.3)
  const opacity = Math.max(
    0.05,
    Math.min(0.3, 0.05 + (percentage / 100) * 0.25)
  );

  return (
    <div
      className="flex items-center relative"
      style={{
        padding: "0 18px 0 13px",
        color: "rgba(0, 0, 0, 0.8)",
        height: "44px",
        backgroundColor: `rgba(6, 151, 167, 0.03)`,
      }}
    >
      {/* 프로그레스바 배경 */}
      <div
        className="absolute top-0 bottom-0 left-0 rounded-md transition-all duration-700 ease-out"
        style={{
          width: `${percentage}%`,
          padding: "0 13px",
          background: `rgba(6, 151, 167, ${opacity})`,
          boxSizing: "border-box",
        }}
      />

      {/* 텍스트 컨테이너 */}
      <div className="flex items-center w-full relative z-10">
        <span
          className="block overflow-hidden text-ellipsis whitespace-nowrap flex-1"
          style={{
            whiteSpaceCollapse: "collapse",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          {label}
        </span>
        <span
          className="flex-none ml-2 text-xl font-bold"
          style={{
            fontSize: "1rem",
            color: "#0697a7",
            letterSpacing: "-0.2px",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
