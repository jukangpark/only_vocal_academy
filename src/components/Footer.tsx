import Link from "next/link";

const navigationItems = [
  { href: "/about", label: "학원소개" },
  { href: "/notice", label: "공지사항" },
  { href: "/courses", label: "수강안내" },
  { href: "/teachers", label: "강사소개" },
  { href: "/facility", label: "시설소개" },
  { href: "/location", label: "오시는길" },
  { href: "/careers", label: "인재채용" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold">온리보컬아카데미</h3>
            </div>
            <p className="text-gray-400 text-sm">
              광주 유일의 근거중심 보컬전문 아카데미
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              <Link href="/">홈</Link>
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>0507-1497-4900</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">오시는길</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>광주 광산구 수완동 1435</p>
              <p>(팔팔소곱창 위 건물)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 온리보컬아카데미. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
