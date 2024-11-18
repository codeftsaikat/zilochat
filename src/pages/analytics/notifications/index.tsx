type Props = {};

const AnalyticsNotifications = (_props: Props) => {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Quick Overview</h2>
              </div>
              <div className="box">
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon1bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Total</h2>
                    <p>6 (100%)</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon2bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Sent</h2>
                    <p>6 (100%)</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon3bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Sent &amp; Delivered</h2>
                    <p>6 (100%)</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon4bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-star" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Read</h2>
                    <p>6 (100%)</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon5bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-stack-exchange" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Skipped</h2>
                    <p>0 (0%)</p>
                  </div>
                </div>
                <div className="subbox mobile d-flex align-items-center">
                  <span className="link-text icon5bg d-flex align-items-center justify-content-center">
                    <i className="fa fa-stack-exchange" aria-hidden="true" />
                  </span>
                  <div className="section-title">
                    <h2>Failed</h2>
                    <p>0 (0%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Notification Analytics</h2>
                <span className="ml-auto dropdown cursor-pointer d-flex">
                  <a href="" className="tableaction-btn primary-btn bg-danger">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" /> Clear
                    Reports &amp; Logs
                  </a>
                </span>
              </div>
              <div className="box">
                <div className="subbox">
                  <div className="form-gorup w-100">
                    <h2 className="mb-2">Select a notification</h2>
                    <select className="form-control">
                      <option value={1}>Option 1</option>
                      <option value={2}>Option 2</option>
                    </select>
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
                <h2>Delivery Report</h2>
                <span className="ml-auto dropdown cursor-pointer d-flex">
                  <a href="" className="tableaction-btn primary-btn">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" /> Exports
                  </a>
                </span>
              </div>
              <div className="box">
                <div className="subbox chartbox">
                  <table
                    id="message-template"
                    className="w-100 stripe row-border order-column"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Anita Yadav </td>
                        <td>+919351528360</td>
                        <td>
                          <span className="approvebtn1 disapproved">Fail</span>
                        </td>
                        <td>12 Oct, 2023 10:00</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a href="" className="editbtn">
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Contact"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Anita Yadav </td>
                        <td>+919351528360</td>
                        <td>
                          <span className="approvebtn1 disapproved">Fail</span>
                        </td>
                        <td>12 Oct, 2023 10:00</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a href="" className="editbtn">
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Contact"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Anita Yadav </td>
                        <td>+919351528360</td>
                        <td>
                          <span className="approvebtn1 disapproved">Fail</span>
                        </td>
                        <td>12 Oct, 2023 10:00</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a href="" className="editbtn">
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Contact"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Anita Yadav </td>
                        <td>+919351528360</td>
                        <td>
                          <span className="approvebtn1 approved">Success</span>
                        </td>
                        <td>12 Oct, 2023 10:00</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a href="" className="editbtn">
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Contact"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Anita Yadav </td>
                        <td>+919351528360</td>
                        <td>
                          <span className="approvebtn1 disapproved">Fail</span>
                        </td>
                        <td>12 Oct, 2023 10:00</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a href="" className="editbtn">
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Contact"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Anita Yadav </td>
                        <td>+919351528360</td>
                        <td>
                          <span className="approvebtn1 disapproved">Fail</span>
                        </td>
                        <td>12 Oct, 2023 10:00</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a href="" className="editbtn">
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Contact"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Activity Log</h2>
                <span className="ml-auto dropdown cursor-pointer d-flex">
                  <a href="" className="tableaction-btn primary-btn">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" /> Exports
                  </a>
                </span>
              </div>
              <div className="box">
                <div
                  className="subbox mobileananoti chartbox pl-3 pr-3"
                  style={{ overflow: "auto", padding: 10 }}
                >
                  <div
                    className=""
                    style={{
                      width: 800,
                      fontSize: 10,
                      overflow: "auto",
                      padding: 10,
                    }}
                  >
                    <div style={{ paddingLeft: 100 }}>
                      [2023-10-12 10:00:01] ERROR: Message not sent. The token
                      has expired on Saturday, 07-Oct-23 00:57:07 PDT. The
                      current time is Wednesday, 11-Oct-23 21:30:00 PDT.
                    </div>
                    <div style={{ paddingLeft: 100 }}>
                      [2023-10-12 10:00:01] ERROR: Message not sent. The token
                      has expired on Saturday, 07-Oct-23 00:57:07 PDT. The
                      current time is Wednesday, 11-Oct-23 21:30:00 PDT.
                    </div>
                    <div style={{ paddingLeft: 100 }}>
                      [2023-10-12 10:00:01] ERROR: Message not sent. The token
                      has expired on Saturday, 07-Oct-23 00:57:07 PDT. The
                      current time is Wednesday, 11-Oct-23 21:30:00 PDT.
                    </div>
                    <div style={{ paddingLeft: 100 }}>
                      [2023-10-12 10:00:01] ERROR: Message not sent. The token
                      has expired on Saturday, 07-Oct-23 00:57:07 PDT. The
                      current time is Wednesday, 11-Oct-23 21:30:00 PDT.
                    </div>
                    <div style={{ paddingLeft: 100 }}>
                      [2023-10-12 10:00:01] ERROR: Message not sent. The token
                      has expired on Saturday, 07-Oct-23 00:57:07 PDT. The
                      current time is Wednesday, 11-Oct-23 21:30:00 PDT.
                    </div>
                    <div style={{ paddingLeft: 100 }}>
                      [2023-10-12 10:00:01] ERROR: Message not sent. The token
                      has expired on Saturday, 07-Oct-23 00:57:07 PDT. The
                      current time is Wednesday, 11-Oct-23 21:30:00 PDT.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsNotifications;
