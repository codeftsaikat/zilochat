
type Props = {};

const SubscriptionPlan = (_props: Props) => {
  return (
    <section className="innerpage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="box-heading">
              <span>
                <i className="fa fa-commenting" aria-hidden="true" />
              </span>
              <h2>My Account</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mysubscriptions">
              <ul className="nav nav-tabs dash-inbox" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="action-btn outline-btn" href="my-account.html">
                    My Account
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="action-btn outline-btn"
                    href="whatsapp-numbers.html"
                  >
                    WhatsApp Numbers
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="action-btn primary-btn shadow-0"
                    href="my-subscriptions.html"
                  >
                    My Subscriptions
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <h2 className="mt-3 mb-3">WANotifier Subscriptions</h2>
                <div className="alert alert-primary text-center mt-2">
                  <p className="d-block mb-0">
                    <b>Note: </b> Total Cost = WANotifier Subscription Charges +
                    WhatsApp Cloud API{" "}
                    <a href="" target="_blank">
                      <u>Per-Conversation Charges</u>
                    </a>{" "}
                    (as per usage)
                  </p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="subbox d-block ">
                <div
                  className=""
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <ul
                    className="nav nav-tabs dash-inbox"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <span
                        className="nav-link active"
                        id="monthly-tab"
                        data-toggle="tab"
                        data-target="#monthly"
                        role="tab"
                        aria-controls="monthly"
                        aria-selected="true"
                      >
                        Monthly
                      </span>
                    </li>
                    <li className="nav-item" role="presentation">
                      <span
                        className="nav-link"
                        id="yearly-tab"
                        data-toggle="tab"
                        data-target="#yearly"
                        role="tab"
                        aria-controls="yearly"
                        aria-selected="true"
                      >
                        Yearly (Save 20%)
                      </span>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="monthly"
                      role="tabpanel"
                      aria-labelledby="monthly-tab"
                    >
                      <div className="pricetable11">
                        <div className="pricing pricing-palden">
                          <div
                            className="pricing-item features-item ja-animate"
                            data-animation="move-from-bottom"
                            data-delay="item-0"
                          >
                            <div className="pricing-deco">
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>999
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Basic</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                1 Pages/Screens
                              </li>
                              <li className="pricing-feature">
                                Upto 2,500 contacts
                              </li>
                              <li className="pricing-feature">
                                Upto 10 tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                Upto 5 on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                Setup upto 5 auto-replies
                              </li>
                              <li className="pricing-feature">
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                Add upto 1 chat agent
                              </li>
                              <li className="pricing-feature">
                                API integration (upto 1,000 requests)
                              </li>
                              <li className="pricing-feature">No chatbots</li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                          <div
                            className="pricing-item features-item ja-animate pricing__item--featured"
                            data-animation="move-from-bottom"
                            data-delay="item-1"
                          >
                            <div
                              className="pricing-deco"
                              style={{
                                background:
                                  "linear-gradient(135deg,#a93bfe,#584efd)",
                              }}
                            >
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>1,999
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Startup</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                {" "}
                                Upto 10,000 contacts
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 25 tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 10 on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Setup upto 10 auto-replies
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Add upto 3 chat agents
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                API integration (upto 10,000 requests)
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 1 chatbot
                              </li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                          <div
                            className="pricing-item features-item ja-animate"
                            data-animation="move-from-bottom"
                            data-delay="item-2"
                          >
                            <div className="pricing-deco">
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>2,999
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Growth</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                {" "}
                                Upto 25,000 contacts
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 50 tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 25 on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Setup upto 25 auto-replies
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Add upto 10 chat agents
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                API integration (upto 10,000 requests)
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 5 chatbot
                              </li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                          <div
                            className="pricing-item features-item ja-animate pricing__item--featured"
                            data-animation="move-from-bottom"
                            data-delay="item-1"
                          >
                            <div
                              className="pricing-deco"
                              style={{
                                background:
                                  "linear-gradient(135deg,#a93bfe,#584efd)",
                              }}
                            >
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>5,999
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Pro</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                Upto 1,00,000 contacts
                              </li>
                              <li className="pricing-feature">
                                Unlimited tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                Unlimited on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                Setup unlimited auto-replies
                              </li>
                              <li className="pricing-feature">
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                Add upto 25 chat agents
                              </li>
                              <li className="pricing-feature">
                                API integration (upto 1,00,000 requests)
                              </li>
                              <li className="pricing-feature">
                                Upto 15 chatbots
                              </li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                        </div>
                        <div>
                          {/* <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                              <defs>
                              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                              </defs>
                              <g class="parallax">
                              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                              </g>
                              </svg> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="yearly"
                      role="tabpanel"
                      aria-labelledby="yearly-tab"
                    >
                      <div className="pricetable11">
                        <div className="pricing pricing-palden">
                          <div
                            className="pricing-item features-item ja-animate"
                            data-animation="move-from-bottom"
                            data-delay="item-0"
                          >
                            <div className="pricing-deco">
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>799
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Basic</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                1 Pages/Screens
                              </li>
                              <li className="pricing-feature">
                                Upto 2,500 contacts
                              </li>
                              <li className="pricing-feature">
                                Upto 10 tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                Upto 5 on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                Setup upto 5 auto-replies
                              </li>
                              <li className="pricing-feature">
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                Add upto 1 chat agent
                              </li>
                              <li className="pricing-feature">
                                API integration (upto 1,000 requests)
                              </li>
                              <li className="pricing-feature">No chatbots</li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                          <div
                            className="pricing-item features-item ja-animate pricing__item--featured"
                            data-animation="move-from-bottom"
                            data-delay="item-1"
                          >
                            <div
                              className="pricing-deco"
                              style={{
                                background:
                                  "linear-gradient(135deg,#a93bfe,#584efd)",
                              }}
                            >
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>1,599
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Startup</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                {" "}
                                Upto 10,000 contacts
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 25 tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 10 on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Setup upto 10 auto-replies
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Add upto 3 chat agents
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                API integration (upto 10,000 requests)
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 1 chatbot
                              </li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                          <div
                            className="pricing-item features-item ja-animate"
                            data-animation="move-from-bottom"
                            data-delay="item-2"
                          >
                            <div className="pricing-deco">
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>2,399
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Growth</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                {" "}
                                Upto 25,000 contacts
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 50 tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 25 on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Setup upto 25 auto-replies
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Add upto 10 chat agents
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                API integration (upto 10,000 requests)
                              </li>
                              <li className="pricing-feature">
                                {" "}
                                Upto 5 chatbot
                              </li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                          <div
                            className="pricing-item features-item ja-animate pricing__item--featured"
                            data-animation="move-from-bottom"
                            data-delay="item-1"
                          >
                            <div
                              className="pricing-deco"
                              style={{
                                background:
                                  "linear-gradient(135deg,#a93bfe,#584efd)",
                              }}
                            >
                              <svg
                                className="pricing-deco-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                y="0px"
                              >
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                              <div className="pricing-price">
                                <span className="pricing-currency">₹</span>4,799
                                <span className="pricing-period">/ month</span>
                              </div>
                              <h3 className="pricing-title">Pro</h3>
                              <small className="text-white">
                                + 18% GST • Billed monthly
                              </small>
                            </div>
                            <ul className="pricing-feature-list">
                              <li className="pricing-feature">
                                Upto 1,00,000 contacts
                              </li>
                              <li className="pricing-feature">
                                Unlimited tags &amp; attributes
                              </li>
                              <li className="pricing-feature">
                                Unlimited on-going transactional notifications
                              </li>
                              <li className="pricing-feature">
                                Setup unlimited auto-replies
                              </li>
                              <li className="pricing-feature">
                                Send reply from Inbox
                              </li>
                              <li className="pricing-feature">
                                Add upto 25 chat agents
                              </li>
                              <li className="pricing-feature">
                                API integration (upto 1,00,000 requests)
                              </li>
                              <li className="pricing-feature">
                                Upto 15 chatbots
                              </li>
                            </ul>
                            <a
                              href="checkout.html"
                              className="action-btn primary-btn price-btn"
                            >
                              Choose plan
                            </a>
                          </div>
                        </div>
                        <div>
                          {/* <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                              <defs>
                              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                              </defs>
                              <g class="parallax">
                              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                              </g>
                              </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="subbox d-block">
                <div className="row">
                  <div className="col-md-4">
                    <h2>Free</h2>
                    <p>Free Forever</p>
                    <small>
                      <a href="" className="action-btn outline-btn w-auto">
                        Your Current Plan
                      </a>
                    </small>
                  </div>
                  <div className="col-md-8">
                    <ul className="tick-list">
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2 rounded-circle">
                          <i className="bx bx-check bx-xs" />
                        </span>
                        Upto 1,000 contacts
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2 rounded-circle">
                          <i className="bx bx-check bx-xs" />
                        </span>
                        Upto 3 tags &amp; attributes
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2 rounded-circle">
                          <i className="bx bx-check bx-xs" />
                        </span>
                        Upto 1 on-going transactional notifications
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2 rounded-circle">
                          <i className="bx bx-check bx-xs" />
                        </span>
                        Setup upto 1 auto-reply
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2 rounded-circle">
                          <i className="bx bx-check bx-xs" />
                        </span>
                        API integration (upto 100 requests)
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-danger me-2 rounded-circle">
                          <i className="bx bx-x bx-xs" />
                        </span>
                        Send reply from Inbox
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-danger me-2 rounded-circle">
                          <i className="bx bx-x bx-xs" />
                        </span>
                        No chat agents
                      </li>
                      <li>
                        <span className="checkbadge badge-center w-px-20 h-px-20 rounded-pill bg-label-danger me-2 rounded-circle">
                          <i className="bx bx-x bx-xs" />
                        </span>
                        No chatbots
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
