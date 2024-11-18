type Props = {};

const Notification = (_props: Props) => {
  return (
    <div>
      <section className=" innerpage">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Notifications</h2>
                <span className="ml-auto dropdown cursor-pointer d-flex">
                  <a
                    href="add-contact.html"
                    className="tableaction-btn add-new-btn"
                  >
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" /> Add New
                  </a>
                  <div className="dropdown show">
                    <a
                      className="tableaction-btn primary-btn text-white dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter by Lists
                    </a>
                    <div
                      className="dropdown-menu dropfilter"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            id="swi"
                            name=""
                            defaultValue=""
                          />
                          <label htmlFor="swi">SWI Employees</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="kam"
                            name=""
                            defaultValue=""
                          />
                          <label htmlFor="kam">
                            Kamalnishtha Sansthan employee
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown show">
                    <a
                      className="tableaction-btn primary-btn text-white dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter by Tags
                    </a>
                    <div
                      className="dropdown-menu dropfilter"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            id="cbb"
                            name=""
                            defaultValue=""
                          />
                          <label htmlFor="cbb">CBB</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown show">
                    <a
                      className="tableaction-btn primary-btn text-white dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter by Status
                    </a>
                    <div
                      className="dropdown-menu dropfilter"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            id="subscribed"
                            name=""
                            defaultValue=""
                          />
                          <label htmlFor="subscribed"> Subscribed</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="unsubscribed"
                            name=""
                            defaultValue=""
                          />
                          <label htmlFor="unsubscribed">Unsubscribed </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="subbox d-block ">
                  <table
                    id="notifications-table"
                    className="w-100 stripe row-border order-column"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Sent</th>
                        <th>Delivered</th>
                        <th>Read</th>
                        <th>Skipped</th>
                        <th>Failed</th>
                        <th>Created</th>
                        <th>Last Modified</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                        </td>
                        <td>
                          <span className="tableaction-btn primary-btn">
                            Completed
                          </span>
                        </td>
                        <td>6</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5 Oct, 2023</td>
                        <td>5 Oct, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="analytics-notification.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Send Message Template"
                              />
                            </a>
                            <a
                              href="view-notification.html"
                              className="editbtn"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              />
                            </a>
                            <a href="" className="deletebtn">
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              />
                            </a>
                            <a
                              href="copy-notification.html"
                              className="copybtn"
                            >
                              <i
                                className="fa fa-copy"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Duplicate"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                        </td>
                        <td>
                          <span className="tableaction-btn primary-btn">
                            Completed
                          </span>
                        </td>
                        <td>6</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5 Oct, 2023</td>
                        <td>5 Oct, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="analytics-notification.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Send Message Template"
                              />
                            </a>
                            <a
                              href="view-notification.html"
                              className="editbtn"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              />
                            </a>
                            <a href="" className="deletebtn">
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              />
                            </a>
                            <a
                              href="copy-notification.html"
                              className="copybtn"
                            >
                              <i
                                className="fa fa-copy"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Duplicate"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                        </td>
                        <td>
                          <span className="tableaction-btn primary-btn">
                            Completed
                          </span>
                        </td>
                        <td>6</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5 Oct, 2023</td>
                        <td>5 Oct, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="analytics-notification.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Send Message Template"
                              />
                            </a>
                            <a
                              href="view-notification.html"
                              className="editbtn"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              />
                            </a>
                            <a href="" className="deletebtn">
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              />
                            </a>
                            <a
                              href="copy-notification.html"
                              className="copybtn"
                            >
                              <i
                                className="fa fa-copy"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Duplicate"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                        </td>
                        <td>
                          <span className="tableaction-btn primary-btn">
                            Completed
                          </span>
                        </td>
                        <td>6</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5 Oct, 2023</td>
                        <td>5 Oct, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="analytics-notification.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Send Message Template"
                              />
                            </a>
                            <a
                              href="view-notification.html"
                              className="editbtn"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              />
                            </a>
                            <a href="" className="deletebtn">
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              />
                            </a>
                            <a
                              href="copy-notification.html"
                              className="copybtn"
                            >
                              <i
                                className="fa fa-copy"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Duplicate"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                        </td>
                        <td>
                          <span className="tableaction-btn primary-btn">
                            Completed
                          </span>
                        </td>
                        <td>6</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5 Oct, 2023</td>
                        <td>5 Oct, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="analytics-notification.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Send Message Template"
                              />
                            </a>
                            <a
                              href="view-notification.html"
                              className="editbtn"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              />
                            </a>
                            <a href="" className="deletebtn">
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              />
                            </a>
                            <a
                              href="copy-notification.html"
                              className="copybtn"
                            >
                              <i
                                className="fa fa-copy"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Duplicate"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                        </td>
                        <td>
                          <span className="tableaction-btn primary-btn">
                            Completed
                          </span>
                        </td>
                        <td>6</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>6 (100%)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5 Oct, 2023</td>
                        <td>5 Oct, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="analytics-notification.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Send Message Template"
                              />
                            </a>
                            <a
                              href="view-notification.html"
                              className="editbtn"
                            >
                              <i
                                className="fa fa-eye"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              />
                            </a>
                            <a href="" className="deletebtn">
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              />
                            </a>
                            <a
                              href="copy-notification.html"
                              className="copybtn"
                            >
                              <i
                                className="fa fa-copy"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Duplicate"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notification;
