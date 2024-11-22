import profile_logo from "@/assets/images/avatar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
type Props = {};

const Header = (_props: Props) => {
  const [isNotification, setIsNotification] = useState(false);
  return (
    <div>
      {/* Header */}
      <header className="nav-top">
        <div className="headertop">
          <div className="section-title">
            <h2>Home</h2>
            <p>Let’s check your status today!</p>
          </div>
          <div className="ml-auto headertopicon">
            <div className="rightBox">
              <ul className="nav-side-links">
                <Link
                  to="/subscription-plan"
                  className="btn bg-warning text-white"
                >
                  Upgrade Plan
                </Link>
                <div className="dropdown show">
                  <a
                    className="dropdown-toggle header-notification"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon2 topicon">
                      <i
                        onClick={() => setIsNotification(!isNotification)}
                        className="fa fa-bell-o position-relative"
                        aria-hidden="true"
                      />
                    </span>
                    {isNotification && (
                      <div className="position-absolute right-10 bg-white">
                        <div
                          className="header-notification-drop"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
                            <div className="notialert d-flex justify-content-between">
                              <span>Alerts</span>
                              <span>
                                <i className="fa fa-lock" />
                              </span>
                            </div>
                            <div className="notification-box">
                              <div
                                id=""
                                className="vertical-timeline-element--work vertical-timeline-element"
                              >
                                <span className="vertical-timeline-element-icon bounce-in" />
                                <div
                                  className="vertical-timeline-element-content bounce-in"
                                  style={{ color: "rgb(51, 51, 51)" }}
                                >
                                  <div
                                    className="vertical-timeline-element-content-arrow"
                                    style={{
                                      borderRight:
                                        "7px solid rgb(33, 150, 243)",
                                    }}
                                  />
                                  <h3 className="vertical-timeline-element-title">
                                    All Hands Meeting
                                  </h3>
                                  <span className="vertical-timeline-element-date">
                                    10 min ago
                                  </span>
                                </div>
                              </div>
                              <div
                                id=""
                                className="vertical-timeline-element--work vertical-timeline-element"
                              >
                                <span className="vertical-timeline-element-icon bounce-in" />
                                <div
                                  className="vertical-timeline-element-content bounce-in"
                                  style={{ color: "rgb(51, 51, 51)" }}
                                >
                                  <div
                                    className="vertical-timeline-element-content-arrow"
                                    style={{
                                      borderRight:
                                        "7px solid rgb(33, 150, 243)",
                                    }}
                                  />
                                  <h3 className="vertical-timeline-element-title">
                                    All Hands Meeting
                                  </h3>
                                  <span className="vertical-timeline-element-date">
                                    10 min ago
                                  </span>
                                </div>
                              </div>
                              <div
                                id=""
                                className="vertical-timeline-element--work vertical-timeline-element"
                              >
                                <span className="vertical-timeline-element-icon bounce-in" />
                                <div
                                  className="vertical-timeline-element-content bounce-in"
                                  style={{ color: "rgb(51, 51, 51)" }}
                                >
                                  <div
                                    className="vertical-timeline-element-content-arrow"
                                    style={{
                                      borderRight:
                                        "7px solid rgb(33, 150, 243)",
                                    }}
                                  />
                                  <h3 className="vertical-timeline-element-title">
                                    All Hands Meeting
                                  </h3>
                                  <span className="vertical-timeline-element-date">
                                    10 min ago
                                  </span>
                                </div>
                              </div>
                              <div
                                id=""
                                className="vertical-timeline-element--work vertical-timeline-element"
                              >
                                <span className="vertical-timeline-element-icon bounce-in" />
                                <div
                                  className="vertical-timeline-element-content bounce-in"
                                  style={{ color: "rgb(51, 51, 51)" }}
                                >
                                  <div
                                    className="vertical-timeline-element-content-arrow"
                                    style={{
                                      borderRight:
                                        "7px solid rgb(33, 150, 243)",
                                    }}
                                  />
                                  <h3 className="vertical-timeline-element-title">
                                    All Hands Meeting
                                  </h3>
                                  <span className="vertical-timeline-element-date">
                                    10 min ago
                                  </span>
                                </div>
                              </div>
                              <div
                                id=""
                                className="vertical-timeline-element--work vertical-timeline-element"
                              >
                                <span className="vertical-timeline-element-icon bounce-in" />
                                <div className="vertical-timeline-element-content bounce-in">
                                  <div className="vertical-timeline-element-content-arrow" />
                                  <h3 className="vertical-timeline-element-title">
                                    Build the production release
                                    <span className="navigationbadge">NEW</span>
                                  </h3>
                                  <span className="vertical-timeline-element-date">
                                    40 min ago
                                  </span>
                                </div>
                              </div>
                              <div
                                id=""
                                className="vertical-timeline-element--work vertical-timeline-element"
                              >
                                <span className="vertical-timeline-element-icon is-hidden" />
                                <div className="vertical-timeline-element-content is-hidden">
                                  <div className="vertical-timeline-element-content-arrow" />
                                  <h3 className="vertical-timeline-element-title">
                                    Something not important
                                  </h3>
                                  <span className="vertical-timeline-element-date">
                                    2 hr ago
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a href="" className="action-btn primary-btn">
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </a>
                </div>
                <div className="dropdown show">
                  <a
                    className="dropdown-toggle header-notification"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="nav-link profile-name">
                      <span className="link-text">
                        <img
                          src={profile_logo}
                          alt=""
                          className="profilepics"
                        />
                      </span>
                      <div className="section-title">
                        <h2>Tynisha Obey</h2>
                        <p>KATRING</p>
                      </div>
                    </span>
                  </a>
                  <div
                    className="dropdown-menu header-notification-drop mobhead-profile"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="profileBoxTop">
                      <img
                        src="assets/images/avatar.png"
                        alt=""
                        className="profilepics icon4"
                      />
                      <div className="profileName">
                        <h1>Sanyam Sharma</h1>
                        <p>sanyam.sharma@gmail.com</p>
                        <p>+91 - 9876543210</p>
                      </div>
                      <a href="javascript:void(0);" className="logout ml-auto">
                        Logout
                      </a>
                    </div>
                    <div className="profileSubBox">
                      <h2>Activity</h2>
                      <ul>
                        <li>
                          <a href="my-account.html">
                            <i className="fa fa-lock" /> My Account
                          </a>
                        </li>
                        <li>
                          <a href="whatsapp-numbers.html">
                            <i className="fa fa-lock" /> WhatsApp Numbers
                          </a>
                        </li>
                        <li>
                          <a href="my-subscriptions.html">
                            <i className="fa fa-lock" /> My Subscriptions
                          </a>
                        </li>
                        <li>
                          <a href="integrations.html">
                            <i className="fa fa-lock" /> Integrations
                          </a>
                        </li>
                        <li>
                          <a href="refer-and-earn.html">
                            <i className="fa fa-lock" /> Refer and Earn
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-lock" /> Report Bug
                          </a>
                        </li>
                      </ul>
                      <ul className="profiletabMyaccount">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-lock" />
                            Add New Number
                          </a>
                        </li>
                        <li>
                          <a href="whatsapp-numbers.html">
                            <i className="fa fa-lock" /> Manage Numbers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Header */}
    </div>
  );
};

export default Header;
