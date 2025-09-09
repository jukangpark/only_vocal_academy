import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/only_vocal_logo.jpg"
        alt="Logo"
        width={180}
        height={180}
      />
    </div>
  );
};

export default Logo;
