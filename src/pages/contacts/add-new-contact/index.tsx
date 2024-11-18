type Props = {};

const AddNewContact = (_props: Props) => {
  return (
    <div>
      <section className=" innerpage">
        <div className="container">
          <form id="add-contact">
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
                          <h2>Add Contact</h2>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name=""
                            className="form-control"
                            placeholder="Last Name"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Whatsapp Number</label>
                          <input
                            type="text"
                            name=""
                            className="form-control"
                            placeholder="Enter WhatsApp Number with Country Code"
                            required={true}
                          />
                          <small>
                            WhatsApp number with country code and + sign without
                            spaces or dahses. E.g. +919876543210
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Status</label>
                          <select className="form-control" required={true}>
                            <option value="">-- Select One --</option>
                            <option value="subscribed">Subscribed</option>
                            <option value="unsubscribed">Unsubscribed</option>
                          </select>
                          <small>
                            Notifications are only sent to Subscribed contacts.
                            Unsubscribed contacts are skipped.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact list</label>
                          <div className="form-control border bg-white">
                            <span className="d-block">
                              <input type="checkbox" id="test1" />
                              <label htmlFor="test1">
                                SWI Employees (3 contacts)
                              </label>
                            </span>
                            <span>
                              <input type="checkbox" id="test2" />
                              <label htmlFor="test2">
                                Kamalnishtha Sansthan employee (6 contacts)
                              </label>
                            </span>
                          </div>
                          <small>
                            Select a contact list for this contact.{" "}
                            <span className="showbottom cursor-pointer">
                              Add new list
                            </span>
                            <div className="hideme">
                              <div className="formm-group">
                                <label>Enter list name</label>
                                <input
                                  type="text"
                                  name=""
                                  defaultValue=""
                                  className="form-control"
                                  required={true}
                                />
                                <small>
                                  Enter the Contact List name that you want to
                                  create.
                                </small>
                              </div>
                            </div>
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Tags</label>
                          <select
                            className="js-select2-multi form-control"
                            // multiple="multiple"
                          >
                            <option value="">-- Select One --</option>
                            <option value="MSelect">CBB</option>
                            <option value="Accordions">Text</option>
                          </select>
                          <small>
                            Add contact tags. Max limit as per your{" "}
                            <a href="">current plan</a>: 3 tags
                            <span className="showbottom cursor-pointer">
                              Add new tag
                            </span>
                            <div className="hideme">
                              <div className="formm-group">
                                <label>Enter Tag name</label>
                                <input
                                  type="text"
                                  name=""
                                  defaultValue=""
                                  className="form-control"
                                  required={true}
                                />
                                <small>
                                  Enter comma seperated Contact tag name that
                                  you want to create.
                                </small>
                              </div>
                            </div>
                          </small>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Custom Attributes</label>
                          <div className="custom-attributes">
                            <div className="header m-2">Name</div>
                            <div className="header m-2">Value</div>
                            <div className="removeItemElement">&nbsp;</div>
                          </div>
                          <div className="" id="elements" />
                          <div id="add-todo-item" className="text-right">
                            + Add New
                          </div>
                          <small>Add custom attributes to your contact.</small>
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
                    <div className="">
                      <input
                        type="submit"
                        className="action-btn primary-btn"
                        defaultValue="Save"
                      />
                    </div>
                  </div>
                  <div className="box-heading flex-wrap mt-3 mb-2">
                    <span>
                      <i className="fa fa-commenting" aria-hidden="true" />
                    </span>
                    <h2>Did you know?</h2>
                    <div className="subbox d-block">
                      <p>
                        Instead of adding contacts manually, you can also import
                        them using CSV file import or add them from 3rd party
                        apps using webhook!
                      </p>
                      <p>
                        Visit the{" "}
                        <a href="import-export.html">Import / Export</a> page to
                        learn more.
                      </p>
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

export default AddNewContact;
