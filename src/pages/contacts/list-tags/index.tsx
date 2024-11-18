type Props = {};

const ListTags = (props: Props) => {
  return (
    <div>
      <section className=" innerpage">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Contact Lists</h2>
                </div>
                <div className="box">
                  <div className="subbox d-block ">
                    <div id="data_container1" className="">
                      <div className="addlistcon">
                        <input
                          type="text"
                          id="new_name1"
                          className="form-control"
                          placeholder="Add New List"
                        />
                        <input
                          type="button"
                          defaultValue="Add"
                          className="action-btn primary-btn"
                        //   onclick="add_row(1)"
                        />
                      </div>
                      <span className="listerror error">
                        This Field is required
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <form>
                <div className="box-heading">
                  <span>
                    <i className="fa fa-commenting" aria-hidden="true" />
                  </span>
                  <h2>Contact Tags</h2>
                </div>
                <div className="box innerright d-block">
                  <div className="subbox d-block">
                    <div id="data_container2" className="">
                      <div className="addlistcon">
                        <input
                          type="text"
                          id="new_name2"
                          className="form-control"
                          placeholder="Add New Tag"
                        />
                        <input
                          type="button"
                          defaultValue="Add"
                          className="action-btn primary-btn"
                        //   onclick="add_row(2)"
                        />
                      </div>
                      <span className="listerror error">
                        This Field is required
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListTags;
