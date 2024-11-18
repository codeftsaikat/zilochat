type Props = {};

const MessageTemplate = (_props: Props) => {
  return (
    <div>
      <section className="innerpage message-mobileview">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Message Template</h2>
                <span className="ml-auto dropdown cursor-pointer d-flex">
                  <a href="" className="tableaction-btn add-new-btn">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" /> Add New
                  </a>
                  <a href="" className="tableaction-btn primary-btn">
                    Fetch Templates
                  </a>
                  <a href="" className="tableaction-btn primary-btn">
                    <i className="fa fa-refresh" aria-hidden="true" /> Refresh
                    Statuses
                  </a>
                  <div className="dropdown show">
                    <a
                      className="tableaction-btn primary-btn text-white dropdown-toggle"
                      href="javascript:void();"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-filter" aria-hidden="true" /> Filter
                      by Status
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
                          <label htmlFor="subscribed">Approved</label>
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
                    id="message-template"
                    className="w-100 stripe row-border order-column"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Template Name</th>
                        <th>Preview</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Last Modified</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="">cbb_nudge_1 (hi)</a>
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 disapproved">
                            DISAPPROVED
                          </span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 approved">APPROVED</span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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
                          <span>Marketing</span>
                        </td>
                        <td>Chhoti Badi Batein</td>
                        <td>
                          <span className="approvebtn1 disapproved">
                            DISAPPROVED
                          </span>
                        </td>
                        <td>11 Sep, 2023</td>
                        <td>11 Sep, 2023</td>
                        <td>
                          <div className="d-flex tableAction">
                            <a
                              href="view-analytics-message.html"
                              className="analyticsbtn"
                            >
                              <i
                                className="fa fa-line-chart"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View Analytics"
                              />
                            </a>
                            <a href="edit-message.html" className="editbtn">
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
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
                            <a href="copy-message.html" className="copybtn">
                              <i
                                className="fa fa-clone"
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

export default MessageTemplate;
