import { Link } from "react-router-dom";
import { SidebarLinkChild } from "../types";

type Props = SidebarLinkChild;

const SidebarSubItem = (props: Props) => {
    const {href,label} = props;
  return (
    <li>
      <Link to={href} className="nav-link">
        <span className="fa fa-angle-double-right" />
        <span className="link-text">{label}</span>
      </Link>
    </li>
  );
};

export default SidebarSubItem;
