
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-grayColor py-2 hidden lg:block">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-8 text-sm">
          <button className="text-baseColor flex items-center">
            English <FaChevronDown className="ml-1" />
          </button>
          <div className="space-x-8">
            <span className="text-sm text-gray-600">Help Center</span>
            <span className="text-sm text-gray-600">Helpline: 09647816556</span>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <button className="text-sm text-gray-600">
            <Link href="/"> Become a Seller</Link>
          </button>
          <button className="text-sm text-gray-600">
            <Link href="/">Order Track</Link>
          </button>
          <button className="text-sm text-baseColor font-semibold">
            <Link href="/registration"> Sign up / Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
