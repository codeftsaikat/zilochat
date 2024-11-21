type Props = {};

const AddNewNotification = (_props: Props) => {
  return (
    <div>
      <>
        <section className=" innerpage">
          <div className="container">
            <form id="add-notification">
              <div className="row">
                <div className="col-md-8">
                  <div className="box">
                    <div className="subbox d-block ">
                      <h2>Add Notification</h2>
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          name=""
                          defaultValue=""
                          className="form-control"
                          required={true}
                        />
                      </div>
                      <label>Notification Type</label>
                      <div className="notificationtab">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link text-left active"
                              id="home-tab"
                              data-toggle="tab"
                              data-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <div className="navheading">Marketing</div>
                              <p>
                                Send one-time, bulk broadcast messages to a
                                multiple contacts at once.
                              </p>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link text-left"
                              id="profile-tab"
                              data-toggle="tab"
                              data-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              <div className="navheading">Transactional</div>
                              <p>
                                Send notification to specific users when
                                triggered from a 3rd party app.
                              </p>
                            </button>
                          </li>
                        </ul>
                        <small>
                          Select the type of notification you want to send.
                        </small>
                        <hr />
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div className="form-gorup">
                              <label>Contact Lists</label>
                              <select
                                className="js-select2-multi form-control"
                                // multiple="multiple"
                                id="property-types-ids"
                              >
                                <option />
                                <option value={1}>Contact List 1</option>
                                <option value={2}>Contact List 2</option>
                              </select>
                              <p>
                                Select the contact lists to which you want to
                                send this notification.
                              </p>
                              <div className="col-md-12">
                                <div id="addnotificathiddencon">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <label>Include / exclude tags?</label>
                                        <div id="myRadioGroup">
                                          <div className="radio">
                                            <input
                                              id="radio-1"
                                              name="includetags"
                                              type="radio"
                                              defaultValue=""
                                              // defaultChecked=""
                                            />
                                            <label
                                              htmlFor="radio-1"
                                              className="radio-label"
                                            >
                                              No
                                            </label>
                                          </div>
                                          <div className="radio">
                                            <input
                                              id="radio-2"
                                              name="includetags"
                                              type="radio"
                                              defaultValue="yes"
                                            />
                                            <label
                                              htmlFor="radio-2"
                                              className="radio-label"
                                            >
                                              Yes
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <p>Filter selected lists with tags</p>
                                    </div>
                                    <div className="col-md-8">
                                      <div
                                        id="includetagsyes"
                                        className="desc"
                                        style={{ display: "none" }}
                                      >
                                        <div className="form-group">
                                          <label>Include Tags</label>
                                          <input
                                            type="text"
                                            name=""
                                            defaultValue=""
                                            className="form-control"
                                            placeholder="Click to Select Tags"
                                          />
                                          <p>
                                            Include contacts from these tags
                                          </p>
                                        </div>
                                        <div className="form-group">
                                          <label>Exclude Tags</label>
                                          <input
                                            type="text"
                                            name=""
                                            defaultValue=""
                                            className="form-control"
                                            placeholder="Click to Select Tags"
                                          />
                                          <p>
                                            Exclude contacts from these tags
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="includesbottom">
                                    <div className="">
                                      <span>WhatsApp Messaging Limit</span>
                                      <span>1k/24hr</span>
                                    </div>
                                    <div className="">
                                      <span>Selected Contacts</span>
                                      <span>3</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <div className="form-group">
                                      <label>Send this when</label>
                                      <select className="form-control">
                                        <option>Send it now</option>
                                        <option>Schedule for later</option>
                                      </select>
                                      <p>
                                        Select when you want to send this
                                        notification.
                                      </p>
                                    </div>
                                    <div className="form-group">
                                      <label>Message Template</label>
                                      <select className="form-control">
                                        <option>Select Message Template</option>
                                        <option>Template 1</option>
                                      </select>
                                      <p>
                                        Select message template that you want to
                                        send.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div className="form-group">
                              <label>Trigger</label>
                              <select
                                name=""
                                className="form-control"
                                // placeholder="Select a Trigger"
                              >
                                <option>Select a Trigger</option>
                                <option>API request to a Webhook URL</option>
                              </select>
                            </div>
                            <p>
                              Select a trigger when you want to send
                              notification. You can trigger this notification
                              using a webhook URL or from your website using our
                              <a href=""> WordPress</a> plugin.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-heading">
                    <span>
                      <i className="fa fa-commenting" aria-hidden="true" />
                    </span>
                    <h2> Advanced Settings</h2>
                  </div>
                  <div className="box">
                    <div className="subbox d-block ">
                      <div className="">
                        <ul>
                          <li className="mb-2">
                            <input
                              className="input-switch"
                              type="checkbox"
                              id="demo"
                            />{" "}
                            <label className="label-switch" htmlFor="demo" />{" "}
                            Auto un-subscribe contact if message sending gets
                            failed.
                          </li>
                          <li>
                            <input
                              className="input-switch"
                              type="checkbox"
                              id="demo1"
                            />{" "}
                            <label className="label-switch" htmlFor="demo1" />{" "}
                            Automatically add tags to contacts as per the
                            message's Delivery Status.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box-heading">
                    <span>
                      <i className="fa fa-commenting" aria-hidden="true" />
                    </span>
                    <h2>Actions</h2>
                  </div>
                  <div className="box innerright d-block">
                    <div className="subbox d-block">
                      <div className="">
                        <div className="form-group m-0">
                          <input
                            type="submit"
                            name=""
                            className="action-btn primary-btn w-auto"
                            defaultValue="Save & Submit"
                          />
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
      </>
    </div>
  );
};

export default AddNewNotification;
