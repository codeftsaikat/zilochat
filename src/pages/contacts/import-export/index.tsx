
type Props = {}

const ImportExport = (_props: Props) => {
  return (
    <div>
        <section className=" innerpage">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="box-heading">
          <span>
            <i className="fa fa-commenting" aria-hidden="true" />
          </span>
          <h2>Import Contacts Using CSV File</h2>
          <span
            className="infoicon position-relative right-10"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Approximate conversations data for this month so far. Data shown below is fetched in real time from your WhatsApp Manager account using the Cloud API."
          >
            <i className="fa fa-question-circle-o" aria-hidden="true" />
          </span>
          <div className="ml-auto cursor-pointer">
            <a className="tableaction-btn primary-btn" href="#">
              <i className="fa fa-info-circle" aria-hidden="true" /> How to
            </a>
          </div>
        </div>
        <div className="box">
          <div className="subbox d-block ">
            <div className="">
              <p>
                Click on the How to? button to see the instructions on how to
                import your contacts using a CSV file.
              </p>
              <p>
                Maximum contacts limit as per your{" "}
                <a href="my-subscriptions.html">current plan</a>: 1,000 contacts
              </p>
              <form>
                <div className="form-group">
                  <label>Select CSV file</label>
                  <input
                    type="file"
                    name=""
                    defaultValue=""
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name=""
                    className="action-btn primary-btn w-auto"
                    defaultValue="Import CSV"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="box-heading">
          <span>
            <i className="fa fa-commenting" aria-hidden="true" />
          </span>
          <h2>Add Contacts Using API Request</h2>
          <span
            className="infoicon position-relative right-10"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Approximate conversations data for this month so far. Data shown below is fetched in real time from your WhatsApp Manager account using the Cloud API."
          >
            <i className="fa fa-question-circle-o" aria-hidden="true" />
          </span>
          <div className="ml-auto cursor-pointer">
            <a className="tableaction-btn primary-btn" href="#">
              <i className="fa fa-info-circle" aria-hidden="true" /> How to
            </a>
          </div>
        </div>
        <div className="box">
          <div className="subbox d-block ">
            <div className="">
              <p>
                Add new contact or update exsiting ones by sending API request
                to the following webhook URL. If the contact does not exist,
                it'll be added and if it already exists, it's data will be
                updated.
              </p>
              <h2 className="">Webhook URL</h2>
              <div className="badge">
                https://app.wanotifier.com/api/v1/contacts/?key=V635OBfZI8zfo2X2IIAXmjpp6oWvxw
              </div>
              <p>
                Send request to this webhook URL to add a new contact or update
                exisitng one.
              </p>
              <h2 className="mb-2">Webhook request example data</h2>
              <div className="dataformat">
                <span className="tokenopertaor">{"{"}</span>
                <span className="tokentag">"whatsapp_number"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"+919876543210"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokentag">"first_name"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"John"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokentag">"last_name"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"Doe"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokentag">"attributes"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokenopertaor">{"{"}</span>
                <span className="tokentag">"custom_attribute_1"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"Value 1"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokentag">"custom_attribute_2"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"Value 2"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokentag">"custom_attribute_3"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"Value 3"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokenopertaor">{"}"},</span>
                <span className="tokentag">"lists"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokenopertaor">[</span>
                <span className="tokensrting">"Default"</span>
                <span className="tokenopertaor">],</span>
                <span className="tokentag">"tags"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokenopertaor">[</span>
                <span className="tokensrting">"new lead"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokensrting">"notification sent"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokenopertaor">],</span>
                <span className="tokentag">"status"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"Value 1"</span>
                <span className="tokenopertaor">,</span>
                <span className="tokentag">"replace"</span>
                <span className="tokenopertaor">:</span>{" "}
                <span className="tokensrting">"false"</span>
                <span className="tokenopertaor">{"}"}</span>
              </div>
              <small>
                Send your data in the above shown format as POST request to the
                Webhook URL. Keep Content-Type as application/json in your
                request.
              </small>
              <div className="">
                <table className="table w-100">
                  <thead>
                    <tr>
                      <th className="ps-0 pe-2">Field</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ps-0 pe-2">whatsapp_number</td>
                      <td>
                        WhatsApp phone number of the contact with country
                        extension.{" "}
                        <em>
                          <b>string</b> | <b>required</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">first_name</td>
                      <td>
                        First name of the contact.{" "}
                        <em>
                          <b>string</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">last_name</td>
                      <td>
                        Last name of the contact.{" "}
                        <em>
                          <b>string</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">attributes</td>
                      <td>Contact attributes.</td>
                    </tr>
                    <tr>
                      <td className="pe-2">
                        custom_attribute_1, custom_attribute_2 and so on
                      </td>
                      <td>
                        Key value pair of your custom attributes.{" "}
                        <em>
                          <b>array of key-value pairs</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">status</td>
                      <td>
                        Can be either subscribed or unsubscribed{" "}
                        <em>
                          <b>strings</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">lists</td>
                      <td>
                        List names.{" "}
                        <em>
                          <b>array of strings</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">tags</td>
                      <td>
                        Tags.{" "}
                        <em>
                          <b>array of strings</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2">replace</td>
                      <td>
                        Keep this value <b>true</b> to replace existing custom
                        attributes, lists and tags with data sent in the
                        request. Else, keep <b>false</b>.{" "}
                        <em>
                          <b>boolean</b> | <b>optional</b>
                        </em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box-heading">
          <span>
            <i className="fa fa-commenting" aria-hidden="true" />
          </span>
          <h2>Export Contacts</h2>
        </div>
        <div className="box innerright d-block">
          <div className="subbox d-block">
            <div className="">
              <p>
                Click on the button below to export your contacts to a CSV file.
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="submit"
                    name=""
                    className="action-btn primary-btn w-auto"
                    defaultValue="Export CSV"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ImportExport