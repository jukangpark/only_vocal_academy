import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/only_vocal_logo.jpg"
        alt="Logo"
        width={180}
        height={180}
        className="w-27 h-27 md:w-44 md:h-44 lg:w-44 lg:h-44"
      />
    </div>
  );
};

export default Logo;
