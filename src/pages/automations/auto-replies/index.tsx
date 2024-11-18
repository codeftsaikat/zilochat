type Props = {};

const AutomationAutoReplies = (_props: Props) => {
  return (
    <div>
      <>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Auto Replies</h2>
                </div>
                <div className="box">
                  <div className="subbox mobile mobanamess d-block">
                    <p>
                      Send a greeting message when someone messages you for the
                      very first time or after 14 days of no activity and their
                      message text does not match any of the configured
                      auto-reply conditions.
                    </p>
                    <div className="text-center">
                      <span
                        className="action-btn outline-btn w-auto m-auto"
                        data-toggle="modal"
                        data-target="#autoreplies"
                      >
                        Add New
                      </span>
                    </div>
                  </div>
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
                          <th>When customer sends you message with text...</th>
                          <th>Auto-reply them with...</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Hello</td>
                          <td>
                            <strong>Text message:</strong> Hi user
                          </td>
                          <td>
                            <span className="approvebtn1 approved">
                              APPROVED
                            </span>
                          </td>
                          <td>
                            <div className="d-flex tableAction">
                              <a
                                href="javascript:void();"
                                className="editbtn"
                                data-toggle="modal"
                                data-target="#autoreplies-edit-message"
                              >
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
        <div className="subscription-box close-box">
          <span className="close">
            <i className="fa fa-times" aria-hidden="true" />
          </span>
          <div className="icon">
            <span className="title timer">Free</span>
            {/* <span class="title timer">20
          <small>Days Remaining</small>
      </span> */}
            {/* <div class="progress">
          <span class="title timer" data-from="0" data-to="85" data-speed="1800">85</span>
          <div class="overlay"></div>
          <div class="left"></div>
          <div class="right"></div>
      </div> */}
          </div>
          <h4>Subscription Plan</h4>
          <p>Your Free Subscription Plan will be expire soon please upgrade</p>
          <a href="">Upgrade</a>
        </div>
        {/* autoreplies */}
        <div
          className="modal fade"
          id="autoreplies"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="autorepliesLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form id="autoreplypopup">
                <button
                  type="button"
                  className="modalclose"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <h2 className="mb-3">When a customer sends you...</h2>
                  <div className="form-group">
                    <label>Message text</label>
                    <input type="text" className="form-control" required={true} />
                    <small>
                      Enter one or more comma separated words or phrases (case
                      insensitive)
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Message type</label>
                    <select className="form-control" id="autoreply" required={true}>
                      <option value="">-- Select One --</option>
                      <option value="text-message">Text Message</option>
                      <option value="message-template">Message Template</option>
                    </select>
                    <small>Select the type of message you want to send</small>
                  </div>
                  <div className="form-group" id="textmessage">
                    <label>Message Text</label>
                    <textarea
                      className="form-control"
                      id=""
                      autoComplete="off"
                      placeholder="Enter auto_reply message text here"
                      required={true}
                      defaultValue={""}
                    />
                    <small>
                      Enter body content. HTML not allowed. You can format the
                      text using following shorthands:
                    </small>
                    <small>Bold: *text* will become text</small>
                    <small>Italics: _text_ will become text</small>
                    <small>Strikethrough: ~text~ will become text</small>
                    <small>
                      Monospace or code: ```text``` will become text
                    </small>
                  </div>
                  <div className="form-group" id="messagetemplate">
                    <label>Message Template</label>
                    <select className="form-control" id="" required={true}>
                      <option value="">-- Select One --</option>
                      <option value="template1">Template 1 </option>
                      <option value="template2">Template 2</option>
                    </select>
                    <small>Select a message template</small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="action-btn primary-btn w-auto"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* autoreplies */}
        <div
          className="modal fade"
          id="autoreplies-edit-message"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="autoreplies-edit-messageLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form id="autoreplypopup">
                <button
                  type="button"
                  className="modalclose"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <h2 className="mb-3">When a customer sends you...</h2>
                  <div className="form-group">
                    <label>Message text</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Heello"
                      required={true}
                    />
                    <small>
                      Enter one or more comma separated words or phrases (case
                      insensitive)
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Message type</label>
                    <select className="form-control" id="autoreply" required={true}>
                      <option value="">-- Select One --</option>
                      <option value="text-message">
                        Text Message
                      </option>
                      <option value="message-template">Message Template</option>
                    </select>
                    <small>Select the type of message you want to send</small>
                  </div>
                  <div className="form-group" id="textmessage">
                    <label>Message Text</label>
                    <textarea
                      className="form-control"
                      id=""
                      autoComplete="off"
                      value="Hi user"
                      placeholder="Enter auto_reply message text here"
                      required={true}
                      defaultValue={""}
                    />
                    <small>
                      Enter body content. HTML not allowed. You can format the
                      text using following shorthands:
                    </small>
                    <small>Bold: *text* will become text</small>
                    <small>Italics: _text_ will become text</small>
                    <small>Strikethrough: ~text~ will become text</small>
                    <small>
                      Monospace or code: ```text``` will become text
                    </small>
                  </div>
                  <div className="form-group" id="messagetemplate">
                    <label>Message Template</label>
                    <select className="form-control" id="" required={true}>
                      <option value="">-- Select One --</option>
                      <option value="template1" selected>
                        Template 1{" "}
                      </option>
                      <option value="template2">Template 2</option>
                    </select>
                    <small>Select a message template</small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="action-btn primary-btn w-auto"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AutomationAutoReplies;
