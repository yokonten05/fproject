<div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Add Product</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#tab-1"
                          data-toggle="tab"
                        >
                          Product Info
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-2" data-toggle="tab">
                          Data
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-3" data-toggle="tab">
                          Discount
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tab-4" data-toggle="tab">
                          Images
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form className="form-horizontal">
                    <div className="card-body">
                      <div className="tab-content">
                        <div id="tab-1" className="tab-pane active">
                          <div className="panel-body">
                            <fieldset>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Name:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product name"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Price:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="$160.00"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Description:
                                </label>
                                <div className="col-sm-10"></div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Meta Tag Title:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="..."
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Meta Tag Description:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Sheets containing Lorem"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Meta Tag Keywords:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Lorem, Ipsum, has, been"
                                  />
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                        <div id="tab-2" className="tab-pane">
                          <div className="panel-body">
                            <fieldset>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  ID:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={543}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Model:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="..."
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Location:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="location"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Tax Class:
                                </label>
                                <div className="col-sm-10">
                                  <select className="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Quantity:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Quantity"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Minimum quantity:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={2}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Sort order:
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={0}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                  Status:
                                </label>
                                <div className="col-sm-10">
                                  <select className="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                  </select>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                        <div id="tab-3" className="tab-pane">
                          <div className="panel-body">
                            <div className="table-responsive">
                              <table className="table table-stripped table-bordered">
                                <thead>
                                  <tr>
                                    <th>Group</th>
                                    <th>Quantity</th>
                                    <th>Discount</th>
                                    <th style={{ width: "20%" }}>Date start</th>
                                    <th style={{ width: "20%" }}>Date end</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <select className="form-control">
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={10}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="$10.00"
                                      />
                                    </td>
                                    <td>
                                      <div className="input-group date">
                                        <span className="input-group-addon">
                                          <i className="fa fa-calendar" />
                                        </span>
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="07/01/2014"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="input-group date">
                                        <span className="input-group-addon">
                                          <i className="fa fa-calendar" />
                                        </span>
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="07/01/2014"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <button className="btn btn-white">
                                        <i className="fa fa-trash" />{" "}
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div id="tab-4" className="tab-pane">
                          <div className="panel-body">
                            <div className="table-responsive">
                              <table className="table table-bordered table-stripped">
                                <thead>
                                  <tr>
                                    <th>Image preview</th>
                                    <th>Image url</th>
                                    <th>Sort order</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <img src="img/gallery/2s.jpg" />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        disabled
                                        defaultValue="http://mydomain.com/images/image1.png"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={1}
                                      />
                                    </td>
                                    <td>
                                      <button className="btn btn-white">
                                        <i className="fa fa-trash" />{" "}
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit">submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>