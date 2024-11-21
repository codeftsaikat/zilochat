import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import { Link } from "react-router-dom";
import QuickLinks from "./quick-links";
type Props = {};

const DashboardPage = (_props: Props) => {
  const [isViewAll, setIsViewAll] = useState(false);
  const handleViewAll = () => {
    setIsViewAll(!isViewAll);
  };

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon1bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Phone Number</h2>
                    <p>+91 - 9876543210</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon2bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2> Display Name</h2>
                    <p>Sesame Workshop India</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span
                    className="infoicon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Maximum number of conversations you can have in a 24-hour rolling period."
                  >
                    <i className="fa fa-question-circle-o" aria-hidden="true" />
                  </span>
                  {/* <span class="infoicon">
                          <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                      </span> */}
                  <span className="link-text icon3bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Messaging Limit</h2>
                    <p>1k/24hr</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span
                    className="infoicon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quality rating is determined by a combination of quality signals from conversations between your business and users. To keep the quality ratings high, avoid getting blocks and reports by your users."
                  >
                    <i className="fa fa-question-circle-o" aria-hidden="true" />
                  </span>
                  {/* <span class="infoicon">
                          <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                      </span> */}
                  <span className="link-text icon4bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-star" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Quality Rating</h2>
                    <p>High</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon5bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-stack-exchange" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Phone Number Status</h2>
                    <p>CONNECTED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Conversations</h2>
                <span
                  className="infoicon position-relative right-10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Approximate conversations data for this month so far. Data shown below is fetched in real time from your WhatsApp Manager account using the Cloud API."
                >
                  <i className="fa fa-question-circle-o" aria-hidden="true" />
                </span>
                <div className="show ml-auto dropdown cursor-pointer">
                  <Link
                    to="/"
                    onClick={handleViewAll}
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ...
                  </Link>
                  {isViewAll && (
                    <div className="subnav view-all">
                      <ul>
                        <li>
                          <a href="">View All</a>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div
                    className="dropdown-menu dropfilter"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <ul>
                      <li>
                        <a href="">View All</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="subbox chartbox">
                  <div className="box-heading chartheading">
                    <div className="d-flex align-items-center">
                      <h2>Approx Cost&nbsp;</h2>
                      <span className="infoicon position-relative right-10">
                        <i
                          className="fa fa-question-circle-o"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div>
                      <span className="subheading">Business-initiated</span>
                      <span className="subheading font-medium">₹2.03</span>
                    </div>
                    <div>
                      <span className="subheading">User-initiated</span>
                      <span className="subheading font-medium">₹5.03</span>
                    </div>
                  </div>
                  <div className="chartcontainer">
                    {/* <canvas id="conversationsChart" /> */}
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["group A", "group B", "group C"],
                        },
                      ]}
                      series={[
                        { data: [4, 3, 5] },
                        { data: [1, 6, 3] },
                        { data: [2, 5, 6] },
                      ]}
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Messaging</h2>
                <span
                  className="infoicon position-relative right-10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Approximate messaging data for this month so far. Data shown below is fetched in real time from your WhatsApp account using the Cloud API."
                >
                  <i className="fa fa-question-circle-o" aria-hidden="true" />
                </span>
                <span className="ml-auto dropdown cursor-pointer">...</span>
              </div>
              <div className="box">
                <div className="subbox chartbox">
                  <div className="chartcontainer">
                    {/* <canvas id="messageChart" /> */}
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["group A", "group B"],
                        },
                      ]}
                      series={[{ data: [4, 3] }, { data: [1, 6] }]}
                      width={230}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>WANotifier Plan: Free</h2>
              </div>
              <div className="box">
                <div className="subbox chartbox">
                  <div className="chartcontainer">
                    {/* <canvas id="notificationChart" /> */}
                    <BarChart
                      width={400}
                      height={250}
                      series={[
                        {
                          data: pData,
                          label: "pv",
                          id: "pvId",
                          stack: "total",
                        },
                        {
                          data: uData,
                          label: "uv",
                          id: "uvId",
                          stack: "total",
                        },
                      ]}
                      xAxis={[{ data: xLabels, scaleType: "band" }]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Templates</h2>
                <span className="ml-auto dropdown cursor-pointer">
                  ...
                  <div className="subnav view-all">
                    <ul>
                      <li>
                        <a href="">Add New</a>
                      </li>
                      <li>
                        <a href="">View All</a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  <div className="templatename">
                    <h3 className="theme-color font-weight-500">Name</h3>
                    <h3 className="theme-color font-weight-500">Status</h3>
                  </div>
                  <div className="templatename">
                    <a href="edit-message.html">cbb_nudge_9 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="edit-message.html">cbb_nudge_8 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="edit-message.html">cbb_nudge_8 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="edit-message.html">cbb_nudge_7 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_6 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_9 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_8 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_8 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_7 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_6 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_5 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Contacts</h2>
                <span className="ml-auto dropdown cursor-pointer">
                  ...
                  <div className="subnav view-all">
                    <ul>
                      <li>
                        <a href="">Add New</a>
                      </li>
                      <li>
                        <a href="">View All</a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  <div className="templatename">
                    <h3 className="theme-color font-weight-500">Name</h3>
                    <h3 className="theme-color font-weight-500">Number</h3>
                    <h3 className="theme-color font-weight-500">Status</h3>
                  </div>
                  <div className="templatename">
                    <a href="edit-contact.html">Geeta Devi</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="edit-contact.html">Suman Satrawala</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="edit-contact.html">Anita Shekhawat</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="edit-contact.html">Koushlaya Sewda</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="">Supyar Devi</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="">Suman Satrawala</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="">Anita Shekhawat</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="">Koushlaya Sewda</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="">Supyar Devi</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                  <div className="templatename">
                    <a href="">Supyar Devi</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 subscribed">Subscribed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Notifications</h2>
                <span className="ml-auto dropdown cursor-pointer">
                  ...
                  <div className="subnav view-all">
                    <ul>
                      <li>
                        <a href="">Add New</a>
                      </li>
                      <li>
                        <a href="">View All</a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  <div className="templatename">
                    <h3 className="theme-color font-weight-500">Name</h3>
                    <h3 className="theme-color font-weight-500">Number</h3>
                    <h3 className="theme-color font-weight-500">Status</h3>
                  </div>
                  <div className="templatename">
                    <a href="view-notification.html">cbb_nudge_9 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="view-notification.html">cbb_nudge_8 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="view-notification.html">cbb_nudge_7 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_7 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_6 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_5 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_8 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_7 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_7 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_6 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 approved">Approved</span>
                  </div>
                  <div className="templatename">
                    <a href="">cbb_nudge_5 (hi)</a>
                    <span>+91 456 478 9635</span>
                    <span className="approvebtn1 disapproved">Disapproved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <QuickLinks />
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
