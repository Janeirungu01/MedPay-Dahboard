
import { sidebarTopLinks, sidebarBottomLinks} from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

 export const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:no-underline rounded-sm text-base";

function Navbar() {
  return (
    <>
      <div className="hidden w-60 p-3 xl:flex xl:flex-col h-5/6 text-black">
        <div className="flex-1 py-8 flex flex-col gap-1">
          {sidebarTopLinks.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>

        <div className="flex flex-col gap-0.5 pt-2">
          {sidebarBottomLinks.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>

        <div className={classNames(linkClass, " cursor-pointer text-red-500")}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
      <div className="bg-neutral-600"></div>
    </>
  );
}

export function SidebarLink({ item, onClick }) {
  const { pathname } = useLocation();
  return (
    <>
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path ? "text-blue" : "text-black",
          linkClass
        )}
        onClick={onClick}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    </>
  );
}

export default Navbar;
