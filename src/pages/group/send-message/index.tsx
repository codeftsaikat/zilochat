
type Props = {}

const GroupSendMessage = (_props: Props) => {
  return (
    <div><section className=" innerpage">
    <div className="container">
      <form className="creategroup">
        <div className="row">
          <div className="col-md-12">
            <div className="box-heading">
              <span>
                <i className="fa fa-commenting" aria-hidden="true" />
              </span>
              <h2>Post Content</h2>
            </div>
            <div className="box">
              <div className="subbox d-block ">
                <h2>Create New Content</h2>
                <small>Please enter Contact details</small>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Contact Type</label>
                      <select
                        className="js-select2-multi form-control"
                        // multiple="multiple"
                        required={true}
                      >
                        <option value="">-- Select One --</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="notificationtab group-send-noti">
                        <ul
                          className="nav nav-tabs mb-3"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link text-left active"
                              id="template-tab"
                              data-toggle="tab"
                              data-target="#template"
                              type="button"
                              role="tab"
                              aria-controls="template"
                              aria-selected="true"
                            >
                              <div className="navheading">Template</div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link text-left"
                              id="text-tab"
                              data-toggle="tab"
                              data-target="#text"
                              type="button"
                              role="tab"
                              aria-controls="text"
                              aria-selected="false"
                            >
                              <div className="navheading">Text</div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link text-left"
                              id="media-tab"
                              data-toggle="tab"
                              data-target="#media"
                              type="button"
                              role="tab"
                              aria-controls="media"
                              aria-selected="false"
                            >
                              <div className="navheading">Media</div>
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="template"
                            role="tabpanel"
                            aria-labelledby="template-tab"
                          >
                            <div className="form-group">
                              <label>Template</label>
                              <select className="form-control" required={true}>
                                <option value="">-- Select One --</option>
                                <option value="testvideomedia">
                                  TEST Video - MEDIA
                                </option>
                                <option value="testvideomedia11">
                                  TEST Video - MEDIA
                                </option>
                              </select>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="text"
                            role="tabpanel"
                            aria-labelledby="text-tab"
                          >
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                placeholder="Your Whatsapp Text Message"
                                required={true}
                                defaultValue={""}
                              />
                            </div>
                            <small>
                              Enter body content. HTML not allowed. You can format
                              the text using following shorthands:
                            </small>
                            <small>Bold: *text* will become text</small>
                            <small>Italics: _text_ will become text</small>
                            <small>Strikethrough: ~text~ will become text</small>
                            <small>
                              Monospace or code: ```text``` will become text
                            </small>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="media"
                            role="tabpanel"
                            aria-labelledby="media-tab"
                          >
                            <div className="form-group">
                              <label>Media</label>
                              <input type="file" className="form-control" />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Media Caption"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div id="myRadioGroup">
                        <div className="radio">
                          <input
                            id="radio-1"
                            name="includetags"
                            type="radio"
                            defaultValue=""
                            // defaultChecked=""
                          />
                          <label htmlFor="radio-1" className="radio-label">
                            Send Immediate
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="radio-2"
                            name="includetags"
                            type="radio"
                            defaultValue="yes"
                          />
                          <label htmlFor="radio-2" className="radio-label">
                            Schedule
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      id="includetagsyes"
                      className="desc"
                      style={{ display: "none" }}
                    >
                      <div className="form-group">
                        <label>Scheduled DateTime</label>
                        <input
                          type="text"
                          name=""
                          defaultValue=""
                          className="form-control datepicker"
                          placeholder="Click to Select Tags"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group m-0">
                      <input
                        type="submit"
                        name=""
                        className="action-btn primary-btn w-auto"
                        defaultValue="Submit"
                      />
                      <input
                        type="submit"
                        name=""
                        className="action-btn outline-btn w-auto"
                        defaultValue="Cancel"
                      />
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
  )
}

export default GroupSendMessage