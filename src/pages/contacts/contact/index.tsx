type Props = {};

const Contact = (_props: Props) => {
  return (
    <div>
      <>
        <section className=" innerpage message-mobileview">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Contacts</h2>
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
                      id="contact"
                      className="w-100 stripe row-border order-column"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Status</th>
                          <th>List</th>
                          <th>Tags</th>
                          <th>Created</th>
                          <th>Last Modified</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="">Shailesh Bhardwaj</a>
                            <span>+919911379723</span>
                          </td>
                          <td>
                            <span className="tableaction-btn primary-btn">
                              Subscribed
                            </span>
                          </td>
                          <td>SWI Employees</td>
                          <td> - </td>
                          <td>29 Feb, 2024</td>
                          <td>29 Feb, 2024</td>
                          <td>
                            <div className="d-flex tableAction">
                              <span
                                data-toggle="modal"
                                data-target="#sendmessagetemplate"
                                className="tableBtn analyticsbtn"
                              >
                                <i
                                  className="fa fa-paper-plane-o"
                                  aria-hidden="true"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Send Message Template"
                                />
                              </span>
                              <a href="edit-contact.html" className="editbtn">
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
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="">Sanyam Sharma</a>
                            <span>+919971448538</span>
                          </td>
                          <td>
                            <span className="tableaction-btn primary-btn">
                              Subscribed
                            </span>
                          </td>
                          <td>SWI Employees</td>
                          <td> - </td>
                          <td>29 Feb, 2024</td>
                          <td>29 Feb, 2024</td>
                          <td>
                            <div className="d-flex tableAction">
                              <span
                                data-toggle="modal"
                                data-target="#sendmessagetemplate"
                                className="tableBtn analyticsbtn"
                              >
                                <i
                                  className="fa fa-paper-plane-o"
                                  aria-hidden="true"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Send Message Template"
                                />
                              </span>
                              <a href="edit-contact.html" className="editbtn">
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
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="">Shobha Kapoor</a>
                            <span>+919811734703</span>
                          </td>
                          <td>
                            <span className="tableaction-btn primary-btn">
                              Subscribed
                            </span>
                          </td>
                          <td> - </td>
                          <td> - </td>
                          <td>29 Feb, 2024</td>
                          <td>29 Feb, 2024</td>
                          <td>
                            <div className="d-flex tableAction">
                              <span
                                data-toggle="modal"
                                data-target="#sendmessagetemplate"
                                className="tableBtn analyticsbtn"
                              >
                                <i
                                  className="fa fa-paper-plane-o"
                                  aria-hidden="true"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Send Message Template"
                                />
                              </span>
                              <a href="edit-contact.html" className="editbtn">
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
      </>
    </div>
  );
};

export default Contact;
