import { Link, useLocation } from "react-router-dom";
import { SidebarLink } from "../types";
import SidebarSubItem from "./sidebar-sub-item";
import { useState } from "react";

type Props = SidebarLink;

const SidebarItem = (props: Props) => {
  const { label, icon, href, childs } = props;
  const location = useLocation();
  const pathname = location.pathname;
  const isDropdown = childs && childs.length > 0;
  const [isOpen,setOpen] = useState(false)
  const handleSideNav = ()=>{
      setOpen(!isOpen);
  }
  return (
    <li  onClick={handleSideNav}  className={`nav-side-item ${isDropdown ? "sidedropdown" : ""}`}>
      <Link
        to={href}
        className={`nav-link ${pathname == href ? "active" : ""}`}
      >
        <span className={icon} />
        <span className="link-text">{label}</span>
        {isDropdown && <span className="arrow"></span>}
      </Link>
      {isDropdown &&isOpen && (
        <ul className="subnav">
          {childs.map((item, idx) => (
            <SidebarSubItem key={idx} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
