
type Props = {};

const ListGroups = (_props: Props) => {
  return (
    <div>
     <section className="innerpage">
  <div className="container">
    <form className="creategroup">
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
                            <th>Group Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Bhagwan Parshuram Seva Samiti</td>
                            <td>
                              <span className="approvebtn1 approved">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex tableAction">
                                <a href="group-edit.html" className="editbtn">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  />
                                </a>
                                <a
                                  href="group-member.html"
                                  className="analyticsbtn"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Members"
                                  />
                                </a>
                                <a href="group-inbox.html" className="copybtn">
                                  <i
                                    className="fa fa-inbox"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Inbox"
                                  />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Bhagwan Parshuram Seva Samiti</td>
                            <td>
                              <span className="approvebtn1 approved">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex tableAction">
                                <a href="group-edit.html" className="editbtn">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  />
                                </a>
                                <a
                                  href="group-member.html"
                                  className="analyticsbtn"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Members"
                                  />
                                </a>
                                <a href="group-inbox.html" className="copybtn">
                                  <i
                                    className="fa fa-inbox"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Inbox"
                                  />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Bhagwan Parshuram Seva Samiti</td>
                            <td>
                              <span className="approvebtn1 approved">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex tableAction">
                                <a href="group-edit.html" className="editbtn">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  />
                                </a>
                                <a
                                  href="group-member.html"
                                  className="analyticsbtn"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Members"
                                  />
                                </a>
                                <a href="group-inbox.html" className="copybtn">
                                  <i
                                    className="fa fa-inbox"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Inbox"
                                  />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Bhagwan Parshuram Seva Samiti</td>
                            <td>
                              <span className="approvebtn1 approved">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex tableAction">
                                <a href="group-edit.html" className="editbtn">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  />
                                </a>
                                <a
                                  href="group-member.html"
                                  className="analyticsbtn"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Members"
                                  />
                                </a>
                                <a href="group-inbox.html" className="copybtn">
                                  <i
                                    className="fa fa-inbox"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Inbox"
                                  />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Bhagwan Parshuram Seva Samiti</td>
                            <td>
                              <span className="approvebtn1 disapproved">
                                Inactive
                              </span>
                            </td>
                            <td>
                              <div className="d-flex tableAction">
                                <a href="group-edit.html" className="editbtn">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  />
                                </a>
                                <a
                                  href="group-member.html"
                                  className="analyticsbtn"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Members"
                                  />
                                </a>
                                <a href="group-inbox.html" className="copybtn">
                                  <i
                                    className="fa fa-inbox"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Inbox"
                                  />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Bhagwan Parshuram Seva Samiti</td>
                            <td>
                              <span className="approvebtn1 approved">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex tableAction">
                                <a href="group-edit.html" className="editbtn">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  />
                                </a>
                                <a
                                  href="group-member.html"
                                  className="analyticsbtn"
                                >
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Members"
                                  />
                                </a>
                                <a href="group-inbox.html" className="copybtn">
                                  <i
                                    className="fa fa-inbox"
                                    aria-hidden="true"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Inbox"
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
    <div className="row">
      <div className="col-md-12 copyright">
        <p className="text-right">
          © 2024 Admin Dashboard | All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ListGroups;
