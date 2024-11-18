type Props = {};

const AddNew = (_props: Props) => {
  return (
    <div>
      <section className="innerpage">
        <div className="container">
          <form id="add-message">
            <div className="row">
              <div className="col-md-8">
                <div className="box">
                  <div className="subbox d-block ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="box-heading mb-2">
                          <span>
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            />
                          </span>
                          <h2>Add Message Template</h2>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Template Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="template_name"
                            required={true}
                          />
                          <small>
                            Spaces and special characters are not allowed.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Category</label>
                          <select className="form-control" required={true}>
                            <option value="">--Select One--</option>
                            <option value="marketing">Marketing</option>
                            <option value="marketing">Marketing</option>
                          </select>
                          <small>Select template category</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Language</label>
                          <select className="form-control" required={true}>
                            <option value="">--Select One--</option>
                            <option value="english">English</option>
                            <option value="english">English</option>
                          </select>
                          <small>Select template language</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Template type</label>
                          <select className="form-control" required={true}>
                            <option value="">--Select One--</option>
                            <option value="custom">Custom</option>
                            <option value="english">English</option>
                          </select>
                          <small>Select marketing template type</small>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="box-heading flex-wrap mb-2">
                          <span>
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            />
                          </span>
                          <h2>
                            Header <span className="">(Optional)</span>
                          </h2>
                          <div className="break" />
                          <p className="">
                            Add a title that you want to show in message header.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Header Type</label>
                          <select
                            className="form-control"
                            id="headertypebutton"
                            required={true}
                          >
                            <option value="">None</option>
                            <option value="headertypetext">Text</option>
                            <option value="headertypemedia">Media</option>
                          </select>
                          <small>Select the header type.</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="headertypetext" className="">
                          <div className="form-group mb-0">
                            <label>Header Text</label>
                            <input
                              type="text"
                              className="form-control inputaddvariable"
                              defaultValue=""
                              id="header-text"
                              required={true}
                            />
                            <button
                              type="button"
                              className="add-variable"
                              id="addvariablebtn"
                            >
                              <i className="bx bx-plus" />
                              <span className="addvariabletext">
                                Add Variable
                              </span>
                            </button>
                          </div>
                          <small>Select the header type.</small>
                        </div>
                        <div id="headertypemedia" className="">
                          <h2>Upload example image</h2>
                          <div className="form-group mb-0">
                            <select
                              className="form-control"
                              id="headertypemediafile"
                            >
                              <option value="">-- Select One --</option>
                              <option value="headerimage">Image</option>
                              <option value="headervideo">Video</option>
                              <option value="headerdocument">Document</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="header-sample-variable-fields"
                          id="variableField"
                        >
                          <p>
                            <label>sample text for header variable</label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                              defaultValue=""
                              placeholder=""
                            />
                            <small>
                              sample text for header variable Enter sample text
                              for the header variable. WhatsApp reviews the
                              sample data to check if it complies their
                              guidelines before approving the template.
                            </small>
                          </p>
                        </div>
                        <div
                          id="headerimage"
                          className="headercontent headerimage"
                        >
                          <h2>Upload example image</h2>
                          <div className="form-group mb-0">
                            <input
                              type="file"
                              className="form-control"
                              id="addheaderimage"
                            />
                            <small>
                              Upload an example image for WhatsApp to review the
                              type of image you'll be sending using this
                              template. They will check if the image meets their
                              guidelines before approving the template for use.
                              Supported file formats:{" "}
                              <span className="font-weight-500 text-dark">
                                JPEG and PNG
                              </span>
                              . Max allowed file size:{" "}
                              <span className="font-weight-500 text-dark">
                                5MB
                              </span>
                              .
                            </small>
                          </div>
                        </div>
                        <div
                          id="headervideo"
                          className="headercontent headervideo"
                        >
                          <h2>Upload example Video</h2>
                          <div className="form-group mb-0">
                            <input
                              type="file"
                              className="form-control"
                              id="addheadervideo"
                            />
                            <small>
                              Upload an example video for WhatsApp to review the
                              type of video you'll be sending using this
                              template. They will check if the video meets their
                              guidelines before approving the template for use.
                              Supported file format:{" "}
                              <span className="font-weight-500 text-dark">
                                MP4
                              </span>
                              . Max allowed file size:{" "}
                              <span className="font-weight-500 text-dark">
                                16MB
                              </span>
                              .
                            </small>
                          </div>
                        </div>
                        <div
                          id="headerdocument"
                          className="headercontent headerdocument"
                        >
                          <h2>Upload example Document</h2>
                          <div className="form-group mb-0">
                            <input
                              type="file"
                              className="form-control"
                              id="addheaderdocument"
                            />
                            <small>
                              Upload an example document for WhatsApp to review
                              the type of document you'll be sending using this
                              template. They will check if the document meets
                              their guidelines before approving the template for
                              use. Supported file format:{" "}
                              <span className="font-weight-500 text-dark">
                                PDF
                              </span>
                              . Max allowed file size:{" "}
                              <span className="font-weight-500 text-dark">
                                100MB
                              </span>
                              .
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="box-heading flex-wrap mb-2">
                          <span>
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            />
                          </span>
                          <h2>
                            Body <span className="">(Optional)</span>
                          </h2>
                          <div className="break" />
                          <p className="">
                            Enter the text for your message in the language
                            you've selected.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Body content</label>
                          <textarea
                            className="form-control"
                            id="body-text"
                            autoComplete="off"
                            required={true}
                            defaultValue={""}
                          />
                          <button
                            type="button"
                            className="add-variable"
                            id="addvariablebtn1"
                          >
                            <i className="bx bx-plus" />
                            <span className="addvariabletext">
                              Add Variable
                            </span>
                          </button>
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
                      </div>
                      <div className="col-md-6">
                        <div
                          className="header-sample-variable-fields"
                          id="variableField1"
                        >
                          <p>
                            <label>sample text for header variable</label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                              defaultValue=""
                              placeholder=""
                            />
                            <small>
                              sample text for header variable Enter sample text
                              for the header variable. WhatsApp reviews the
                              sample data to check if it complies their
                              guidelines before approving the template.
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="box-heading flex-wrap mb-2">
                          <span>
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            />
                          </span>
                          <h2>
                            Footer <span className="">(Optional)</span>
                          </h2>
                          <div className="break" />
                          <p className="">
                            Add a short line of text to the bottom of your
                            message template.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Footer text</label>
                          <input
                            type="text"
                            className="form-control"
                            id="footer-text"
                            autoComplete="off"
                            required={true}
                          />
                          <small>Enter footer text.</small>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="box-heading flex-wrap mb-2">
                          <span>
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            />
                          </span>
                          <h2>
                            Button <span className="">(Optional)</span>
                          </h2>
                          <div className="break" />
                          <p className="">
                            Create buttons that let customers respond to your
                            message or take action.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="addbutton"
                            required={true}
                          >
                            <option value="">+ Add a button</option>
                            <optgroup label="Quick Reply">
                              <option value="QUICK_REPLY" data-max={10}>
                                Custom
                              </option>
                            </optgroup>
                            <optgroup label="Call To Action">
                              <option value="URL" data-max={2}>
                                Visit Website (Max 2)
                              </option>
                              <option value="PHONE_NUMBER" data-max={1}>
                                Call Phone Number (Max 1)
                              </option>
                              <option value="COPY_CODE" data-max={1}>
                                Copy Offer Code (Max 1)
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        <div id="quickreply" className="ButtonBox close-box">
                          <h2>Quick Reply</h2>
                          <div className="form-group">
                            <span className="close">
                              <i className="fa fa-times" aria-hidden="true" />
                            </span>
                            <label>Button Text</label>
                            <input
                              type="text"
                              className="form-control"
                              id="quick-reply"
                              autoComplete="off"
                              placeholder="Enter Button Text"
                              required={true}
                            />
                          </div>
                        </div>
                        <div id="urlButton" className="ButtonBox close-box">
                          <h2>Call to Action</h2>
                          <div className="form-group">
                            <span className="close">
                              <i className="fa fa-times" aria-hidden="true" />
                            </span>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label>Button Text</label>
                                  <select
                                    className="form-control"
                                    id="selectField"
                                    required={true}
                                  >
                                    <option value="visitwebsite">
                                      Select One
                                    </option>
                                    <option value="visitwebsite">
                                      Visit Website
                                    </option>
                                    <option value="callphonenumber">
                                      Call Phone Number
                                    </option>
                                    <option value="copyoffercode">
                                      Copy Offer Code
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div
                                  className="content visitwebsite"
                                  id="visitweb"
                                >
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <label>Button Text</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="visitwebinput"
                                          autoComplete="off"
                                          defaultValue=""
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="form-group">
                                        <label>Button Text</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id=""
                                          autoComplete="off"
                                          defaultValue="https://example.com?param={{1}}"
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content callphonenumber">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <label>Button Text</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id=""
                                          autoComplete="off"
                                          defaultValue="Call"
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="form-group">
                                        <label>Button Text</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id=""
                                          autoComplete="off"
                                          defaultValue="Enter Phone Number with Country Code"
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content copyoffercode">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <label>Button Text</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id=""
                                          autoComplete="off"
                                          defaultValue="Copy Offer Code"
                                          // disabled=""
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="form-group">
                                        <label>Button Text</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id=""
                                          autoComplete="off"
                                          defaultValue="Enter Offer Code"
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="phonenumberButton">
                          Call New Button Same as Previous One
                        </div>
                        <div id="copycodeButton">
                          Copy New Button Same as Previous One
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box innerright d-block">
                  <div className="box-heading flex-wrap mb-2">
                    <span>
                      <i className="fa fa-commenting" aria-hidden="true" />
                    </span>
                    <h2>Action</h2>
                  </div>
                  <div className="subbox d-block">
                    <div className="rightaction">
                      <span className="d-block">Status</span>
                      <span>Draft</span>
                    </div>
                    <div className="">
                      <input
                        type="submit"
                        className="action-btn primary-btn"
                        defaultValue="Submit for Approval"
                      />
                    </div>
                  </div>
                  <div className="box-heading flex-wrap mt-3 mb-2">
                    <span>
                      <i className="fa fa-commenting" aria-hidden="true" />
                    </span>
                    <h2>Template Preview</h2>
                  </div>
                  <div className="subbox d-block whatsappbg">
                    <div className="message-box friend-message">
                      <div className="previ">
                        <div id="header-text-preview" />
                        <img
                          id="addheaderimagepreview"
                          src="#"
                          alt="your image"
                        />
                        <img
                          id="addheadervideopreview"
                          src="#"
                          alt="your image"
                        />
                        <img
                          id="addheaderdocumentpreview"
                          src="#"
                          alt="your image"
                        />
                        <div id="body-text-preview" />
                        <div className="" id="footer-text-preview" />
                        <span>07:45 AM</span>
                        <div id="quick-reply-preview" className="" />
                        <div id="visitweb-preview" className="" />
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

export default AddNew;
