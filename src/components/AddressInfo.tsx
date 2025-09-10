import CopyButton from "./CopyButton";

interface AddressInfoProps {
  className?: string;
}

export default function AddressInfo({ className = "" }: AddressInfoProps) {
  const roadAddress =
    "광주 광산구 임방울대로332번길 9-14 GW빌딩 2층 온리보컬아카데미";
  const jibunAddress = "광주 광산구 수완동 1435";

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-gray-900">도로명 주소</h4>
          <CopyButton text={roadAddress} />
        </div>
        <p className="text-gray-600">{roadAddress}</p>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-gray-900">지번</h4>
          <CopyButton text={jibunAddress} />
        </div>
        <p className="text-gray-600">{jibunAddress}</p>
      </div>
    </div>
  );
}
