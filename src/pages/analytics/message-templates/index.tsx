type Props = {};

const AnalyticsMessageTemplates = (_props: Props) => {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="subbox mobile d-block">
                  <div className="form-gorup w-100 mb-3">
                    <h2 className="mb-2">Select a notification</h2>
                    <select className="form-control">
                      <option value={1}>Option 1</option>
                      <option value={2}>Option 2</option>
                    </select>
                  </div>
                  <div className="form-group w-100">
                    <h2 className="mb-2">Message Analytics</h2>
                    <input
                      type="text"
                      id="demo"
                      className="form-control"
                      name="datefilter"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Quick Overview</h2>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  No Data Available
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-heading">
                <span>
                  <i className="fa fa-commenting" aria-hidden="true" />
                </span>
                <h2>Button Clicks</h2>
              </div>
              <div className="box">
                <div className="subbox flex-column heightauto-220">
                  No Data Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsMessageTemplates;
