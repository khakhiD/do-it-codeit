import Link from 'next/link';
import { LogoLarge, LogoSmall } from '../../public/svgs';

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-start">
      <div className="flex items-center">
        <div className="hidden sm:block">
          <Link href={'/'}>
            <LogoLarge />
          </Link>
        </div>
        <div className="block sm:hidden">
          <Link href={'/'}>
            <LogoSmall />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
