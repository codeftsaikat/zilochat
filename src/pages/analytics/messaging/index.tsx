type Props = {};

const AnalyticsMessaging = (_props: Props) => {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="subbox mobile mobanamess d-flex align-items-center">
                  <div className="form-group w-100">
                    <label>Message Analytics</label>
                    <input
                      type="text"
                      id="demo"
                      className="form-control"
                      name="datefilter"
                      defaultValue=""
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
                <h2>Conversations</h2>
                <span
                  className="infoicon position-relative right-10"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Approximate conversations data for this month so far. Data shown below is fetched in real time from your WhatsApp Manager account using the Cloud API."
                >
                  <i className="fa fa-question-circle-o" aria-hidden="true" />
                </span>
                <span className="ml-auto dropdown cursor-pointer">
                  ...
                  <div className="subnav view-all">
                    <ul>
                      <li>
                        <a href="">View All</a>
                      </li>
                    </ul>
                  </div>
                </span>
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
                    <canvas id="conversationsChart" />
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
                    <canvas id="notificationChart" />
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
                <span className="ml-auto dropdown cursor-pointer">
                  ...
                  <div className="subnav view-all">
                    <ul>
                      <li>
                        <a href="">View All</a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="box">
                <div className="subbox chartbox">
                  <div className="chartcontainer">
                    <canvas id="messageChart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>All conversations</h2>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  No Data Available
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>All messages </h2>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  No Data Available
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Paid conversations &amp; approximate charges </h2>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  No Data Available
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Free conversations </h2>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  No Data Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsMessaging;
