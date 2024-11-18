type Props = {};

const GroupListNotification = (_props: Props) => {
  return (
    <div>
      <section className=" innerpage">
        <div className="container">
          <form className="creategroup">
            <div className="row">
              <div className="col-md-12">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Search Notifications</h2>
                  <span className="ml-auto dropdown cursor-pointer d-flex">
                    {/* <a href="add-contact.html" class="tableaction-btn add-new-btn"> <i class="fa fa-plus" aria-hidden="true"></i> Add New</a> */}
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
                        Filter by Template
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
                        Filter by Group
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
                {/* <div class="box-heading">
                      <span><i class="fa fa-commenting" aria-hidden="true"></i></span>
                      <h2>Search Notifications</h2>
                  </div> */}
                <div className="box">
                  <div className="subbox d-block ">
                    <div className="row">
                      {/* <div class="col-md-4">
                                  <div class="form-group">
                                      <label>Select Status</label>
                                      <select class="form-control">
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <div class="form-group">
                                      <label>Select Template</label>
                                      <select class="form-control">
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <div class="form-group">
                                      <label>Select Group</label>
                                      <select class="form-control">
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                      </select>
                                  </div>
                              </div> */}
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Scheduled on</label>
                          <input
                            type="text"
                            name=""
                            defaultValue=""
                            placeholder="Pick a Date"
                            className="form-control datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Scheduled For</label>
                          <input
                            type="text"
                            name=""
                            defaultValue=""
                            placeholder="Pick a Date"
                            className="form-control datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group m-0">
                          <input
                            type="submit"
                            name=""
                            className="action-btn primary-btn w-auto"
                            defaultValue="Search"
                          />
                          <input
                            type="submit"
                            name=""
                            className="action-btn outline-btn w-auto"
                            defaultValue="Reset"
                          />
                        </div>
                      </div>
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
                  <h2>Contact</h2>
                </div>
                <div className="box">
                  <div className="subbox d-block ">
                    <h2>Group List</h2>
                    {/* <small>Lorem Ipsum</small> */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="box">
                          <div className="subbox d-block table-responsive">
                            <table
                              id=""
                              className="w-100 stripe row-border order-column listgroup"
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Scheduled On</th>
                                  <th>Scheduled for</th>
                                  <th>Group</th>
                                  <th>Message Type</th>
                                  <th>Text Message</th>
                                  <th>Template Name</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>Techzilio</td>
                                  <td>template</td>
                                  <td>&nbsp;</td>
                                  <td>Test media template - MEDIA</td>
                                  <td>
                                    <span className="approvebtn1 approved">
                                      Success
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex tableAction">
                                      <a href="" className="editbtn">
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
                                  <td>2</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>Techzilio</td>
                                  <td>template</td>
                                  <td>&nbsp;</td>
                                  <td>Test media template - MEDIA</td>
                                  <td>
                                    <span className="approvebtn1 approved">
                                      Success
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex tableAction">
                                      <a href="" className="editbtn">
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
                                  <td>3</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>Techzilio</td>
                                  <td>template</td>
                                  <td>&nbsp;</td>
                                  <td>Test media template - MEDIA</td>
                                  <td>
                                    <span className="approvebtn1 disapproved">
                                      Fail
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex tableAction">
                                      <a href="" className="editbtn">
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
                                  <td>4</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>Techzilio</td>
                                  <td>template</td>
                                  <td>&nbsp;</td>
                                  <td>Test media template - MEDIA</td>
                                  <td>
                                    <span className="approvebtn1 approved">
                                      Success
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex tableAction">
                                      <a href="" className="editbtn">
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
                                  <td>5</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>Techzilio</td>
                                  <td>template</td>
                                  <td>&nbsp;</td>
                                  <td>Test media template - MEDIA</td>
                                  <td>
                                    <span className="approvebtn1 approved">
                                      Success
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex tableAction">
                                      <a href="" className="editbtn">
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
                                  <td>6</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>03-17-2024 06:37:14 pm</td>
                                  <td>Techzilio</td>
                                  <td>template</td>
                                  <td>&nbsp;</td>
                                  <td>Test media template - MEDIA</td>
                                  <td>
                                    <span className="approvebtn1 approved">
                                      Success
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex tableAction">
                                      <a href="" className="editbtn">
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GroupListNotification;
