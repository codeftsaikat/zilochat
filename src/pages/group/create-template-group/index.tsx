type Props = {};

const CreateTemplateGroup = (_props: Props) => {
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
                            <h2>Create Template</h2>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Template Name</label>
                            <input
                              type="text"
                              name=""
                              defaultValue=""
                              className="form-control"
                              placeholder="Enter Template Name"
                              required={true}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Template Content</label>
                            <select
                              className="form-control"
                              id="headertypebutton"
                              required={true}
                            >
                              <option value="">None</option>
                              <option value="headertypetext">Text</option>
                              <option value="headertypemedia">Media</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div id="headertypetext" className="">
                            <div className="form-group mb-0">
                              <label>Header Text</label>
                              <textarea
                                className="form-control"
                                id="header-text"
                                autoComplete="off"
                                placeholder="Enter Text"
                                required={true}
                                defaultValue={""}
                              />
                            </div>
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
                            id="headerimage"
                            className="headercontent headerimage mt-2"
                          >
                            <h2>Upload example image</h2>
                            <div className="form-group mb-0">
                              <input
                                type="file"
                                className="form-control"
                                id="addheaderimage"
                              />
                              <small>
                                Upload an example image for WhatsApp to review
                                the type of image you'll be sending using this
                                template. They will check if the image meets
                                their guidelines before approving the template
                                for use. Supported file formats:{" "}
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
                            className="headercontent headervideo mt-2"
                          >
                            <h2>Upload example Video</h2>
                            <div className="form-group mb-0">
                              <input
                                type="file"
                                className="form-control"
                                id="addheadervideo"
                              />
                              <small>
                                Upload an example video for WhatsApp to review
                                the type of video you'll be sending using this
                                template. They will check if the video meets
                                their guidelines before approving the template
                                for use. Supported file format:{" "}
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
                            className="headercontent headerdocument mt-2"
                          >
                            <h2>Upload example Document</h2>
                            <div className="form-group mb-0">
                              <input
                                type="file"
                                className="form-control"
                                id="addheaderdocument"
                              />
                              <small>
                                Upload an example document for WhatsApp to
                                review the type of document you'll be sending
                                using this template. They will check if the
                                document meets their guidelines before approving
                                the template for use. Supported file format:{" "}
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
                      <div className="d-flex">
                        <input
                          type="submit"
                          className="action-btn primary-btn mr-2"
                          defaultValue="Submit"
                        />
                        <input
                          type="button"
                          className="action-btn outline-btn"
                          defaultValue="Cancel"
                        />
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

export default CreateTemplateGroup;
