import logo from "@/assets/images/logo.png";
import sidebarLinks from "../config";
import SidebarItem from "./sidebar-item";
import Subscription from "@/components/common/subscription";
type Props = {};

const SideBar = (_props: Props) => {
  return (
    <div>
      <aside className="nav-side">
        <button type="button" className="nav-toggle" id="navSideToggle">
          <span className="sr-only">Menu</span> <span className="menuarrow" />
        </button>
        <div className="dasah-logobox">
          <img src={logo} className="deskview" alt="" />
        </div>
        <ul className="nav-side-links">
        {
          sidebarLinks.map((item,idx)=> <SidebarItem key={idx} {...item}/>)
        }
        </ul>
        <Subscription/>
      </aside>
    </div>
  );
};

export default SideBar;
