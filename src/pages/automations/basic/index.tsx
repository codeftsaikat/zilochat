type Props = {};

const Basic = (_props: Props) => {
  return (
    <div>
      <>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Greeting message</h2>
                  <span className="ml-auto">
                    <input className="input-switch" type="checkbox" id="aa11" />
                    <label className="label-switch" htmlFor="aa11" />
                  </span>
                </div>
                <div className="box">
                  <div className="subbox mobile mobanamess d-block">
                    <p>
                      Send a greeting message when someone messages you for the
                      very first time or after 14 days of no activity and their
                      message text does not match any of the configured
                      auto-reply conditions.
                    </p>
                    <span
                      className="action-btn outline-btn w-auto"
                      data-toggle="modal"
                      data-target="#greetingmessage"
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Delay in response</h2>
                  <span className="ml-auto">
                    <input className="input-switch" type="checkbox" id="aa12" />
                    <label className="label-switch" htmlFor="aa12" />
                  </span>
                </div>
                <div className="box">
                  <div className="subbox mobile mobanamess d-block">
                    <p>
                      Send an automatic message when someone messages you (other
                      than first time), their message text does not match any
                      auto-reply condition and their is a delay from your end to
                      reply to them.
                    </p>
                    <span
                      className="action-btn outline-btn w-auto"
                      data-toggle="modal"
                      data-target="#delayresponse"
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Unsubscribe</h2>
                  <span className="ml-auto">
                    <input className="input-switch" type="checkbox" id="aa13" />
                    <label className="label-switch" htmlFor="aa13" />
                  </span>
                </div>
                <div className="box">
                  <div className="subbox mobile mobanamess d-block">
                    <p>
                      Automatically unsubscribe a contact from receiving future
                      messages from you and send them an automated message when
                      they send you one of the configured unsubscribe keywords.
                    </p>
                    <span
                      className="action-btn outline-btn w-auto"
                      data-toggle="modal"
                      data-target="#unsubscribe"
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Re-subscribe</h2>
                  <span className="ml-auto">
                    <input className="input-switch" type="checkbox" id="aa14" />
                    <label className="label-switch" htmlFor="aa14" />
                  </span>
                </div>
                <div className="box">
                  <div className="subbox mobile mobanamess d-block">
                    <p>
                      Automatically change contact subscription status to
                      Subscribed and send them an automated message when they
                      send you one of the configured keywords. This is useful
                      for people who wish to subscribe back after unsubscribing.
                    </p>
                    <span
                      className="action-btn outline-btn w-auto"
                      data-toggle="modal"
                      data-target="#resubscribe"
                    >
                      Edit
                    </span>
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
        {/* greetingmessage */}
        <div
          className="modal fade"
          id="greetingmessage"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="greetingmessageLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="modalclose"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <h2 className="mb-3">Greeting Message</h2>
                <form>
                  <div className="form-group">
                    <label>Message type</label>
                    <select className="form-control">
                      <option>Text Message</option>
                    </select>
                    <small>Select the type of message you want to send</small>
                  </div>
                  <div className="form-group">
                    <label>Message Text</label>
                    <textarea
                      className="form-control"
                      id="body-text"
                      value="Hi! We areSesame Workshop India! We're happy to help with any queries you have. Please give your consent, so we can send nudges to you related to our outreach programs & we promise not to spam you :"
                      autoComplete="off"
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
                  <div className="form-group">
                    <input
                      type="submit"
                      name=""
                      defaultValue="Save"
                      className="action-btn primary-btn w-auto"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* delayresponse */}
        <div
          className="modal fade"
          id="delayresponse"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="delayresponseLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="modalclose"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <h2 className="mb-3">Delay in response</h2>
                <form>
                  <div className="form-group">
                    <label>Delay in minutes</label>
                    <input
                      type="number"
                      name=""
                      defaultValue=""
                      className="form-control"
                    />
                    <small>Enter delay in minutes</small>
                  </div>
                  <div className="form-group">
                    <label>Message type</label>
                    <select className="form-control">
                      <option>Text Message</option>
                    </select>
                    <small>Select the type of message you want to send</small>
                  </div>
                  <div className="form-group">
                    <label>Message Text</label>
                    <textarea
                      className="form-control"
                      id="body-text"
                      value="Hi! We areSesame Workshop India! We're happy to help with any queries you have. Please give your consent, so we can send nudges to you related to our outreach programs & we promise not to spam you :"
                      autoComplete="off"
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
                  <div className="form-group">
                    <input
                      type="submit"
                      name=""
                      defaultValue="Save"
                      className="action-btn primary-btn w-auto"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Unsubscribe */}
        <div
          className="modal fade"
          id="unsubscribe"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="unsubscribeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="modalclose"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <h2 className="mb-3">Unsubscribe</h2>
                <form>
                  <div className="form-group">
                    <label>Trigger words</label>
                    <input
                      type="text"
                      name=""
                      defaultValue="stop"
                      className="form-control"
                    />
                    <small>
                      Enter one or more comma separated trigger words.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Message type</label>
                    <select className="form-control">
                      <option>Text Message</option>
                    </select>
                    <small>Select the type of message you want to send</small>
                  </div>
                  <div className="form-group">
                    <label>Message Text</label>
                    <textarea
                      className="form-control"
                      id="body-text"
                      value="Hi! We areSesame Workshop India! We're happy to help with any queries you have. Please give your consent, so we can send nudges to you related to our outreach programs & we promise not to spam you :"
                      autoComplete="off"
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
                  <div className="form-group">
                    <input
                      type="submit"
                      name=""
                      defaultValue="Save"
                      className="action-btn primary-btn w-auto"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Re-subscribe */}
        <div
          className="modal fade"
          id="resubscribe"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="resubscribeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="modalclose"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <h2 className="mb-3">Re-subscribe</h2>
                <form>
                  <div className="form-group">
                    <label>Trigger words</label>
                    <input
                      type="text"
                      name=""
                      defaultValue="Join"
                      className="form-control"
                    />
                    <small>
                      Enter one or more comma separated trigger words.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Message type</label>
                    <select className="form-control">
                      <option>Text Message</option>
                    </select>
                    <small>Select the type of message you want to send</small>
                  </div>
                  <div className="form-group">
                    <label>Message Text</label>
                    <textarea
                      className="form-control"
                      id="body-text"
                      value="Hi! We areSesame Workshop India! We're happy to help with any queries you have. Please give your consent, so we can send nudges to you related to our outreach programs & we promise not to spam you :"
                      autoComplete="off"
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
                  <div className="form-group">
                    <input
                      type="submit"
                      name=""
                      defaultValue="Save"
                      className="action-btn primary-btn w-auto"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Basic;
