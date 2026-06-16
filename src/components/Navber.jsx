"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname()
    const links = <>
     <li>
              <Link href="/" className={pathName === "/" ? "bg-[#244D3F] text-white font-bold": ""}><IoMdHome />Home</Link>
            </li>
            <li>
              <Link href="/timeline"className={pathName === "/timeline" ? "bg-[#244D3F] font-bold text-white": ""}><RiTimeLine />Timeline</Link>
            </li>
            <li>
              <Link href="/stats"className={pathName === "/stats" ? "bg-[#244D3F] text-white": ""}><ImStatsDots />Stats</Link>
            </li>
    </>
  return (
    <div className="navbar bg-base-100 border border-white shadow px-4 lg:px-8">
    
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           <FiMenu size={24} />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
          {links}
          </ul>
        </div>

        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Keen<span className="text-green-500">Keeper</span>
        </Link>
      </div>

    
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
         {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;