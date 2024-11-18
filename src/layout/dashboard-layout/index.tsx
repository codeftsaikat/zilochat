import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

type Props = {};

const DashboardLayout = (_props: Props) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="">
        <Outlet/>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
