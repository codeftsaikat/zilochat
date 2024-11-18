type Props = {};

const CreateGroup = (_props: Props) => {
  return (
    <div>
      <section className=" innerpage">
        <div className="container">
          <form className="creategroup">
            <div className="row">
              <div className="col-md-8">
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Post Content</h2>
                </div>
                <div className="box">
                  <div className="subbox d-block ">
                    <h2>Create New Group</h2>
                    <small>Please enter group details</small>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Group Name</label>
                          <input
                            type="text"
                            name=""
                            defaultValue=""
                            className="form-control"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Contact Type</label>
                          <select className="form-control" required={true}>
                            <option value="">-- Select Category --</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Include Tags</label>
                          <select
                            className="js-select2-multi form-control"
                            // multiple="multiple"
                          >
                            <option value="">-- Select One --</option>
                            <option value="">Option 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Exclude Tags</label>
                          <select
                            className="js-select2-multi form-control"
                            // multiple="multiple"
                          >
                            <option value="">-- Select One --</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateGroup;
