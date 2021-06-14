import React, { Component } from "react";

export class coba extends Component {
  render() {
    return (
      <div>
        <div className="main-panel">
          {/* Navbar */}
          <nav
            className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
            id="navigation-example"
          >
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="javascript:void(0)">
                  Dashboard
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#navigation-example"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
              </button>
              <div className="collapse navbar-collapse justify-content-end">
                <form className="navbar-form">
                  <div className="input-group no-border">
                    <input
                      type="text"
                      defaultValue
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="btn btn-default btn-round btn-just-icon"
                    >
                      <i className="material-icons">search</i>
                      <div className="ripple-container" />
                    </button>
                  </div>
                </form>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">
                      <i className="material-icons">dashboard</i>
                      <p className="d-lg-none d-md-block">Stats</p>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="javscript:void(0)"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="material-icons">notifications</i>
                      <span className="notification">5</span>
                      <p className="d-lg-none d-md-block">Some Actions</p>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="javascript:void(0)">
                        Mike John responded to your email
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        You have 5 new tasks
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        You're now friend with Andrew
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        Another Notification
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        Another One
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">
                      <i className="material-icons">person</i>
                      <p className="d-lg-none d-md-block">Account</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-4 col-lg-12">
                  <div className="card card-chart">
                    <div className="card-header card-header-success">
                      <div className="ct-chart" id="dailySalesChart" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Daily Sales</h4>
                      <p className="card-category">
                        <span className="text-success">
                          <i className="fa fa-long-arrow-up" /> 55%{" "}
                        </span>{" "}
                        increase in today sales.
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> updated 4
                        minutes ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="card card-chart">
                    <div className="card-header card-header-warning">
                      <div className="ct-chart" id="websiteViewsChart" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Email Subscriptions</h4>
                      <p className="card-category">Last Campaign Performance</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign
                        sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="card card-chart">
                    <div className="card-header card-header-danger">
                      <div className="ct-chart" id="completedTasksChart" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Completed Tasks</h4>
                      <p className="card-category">Last Campaign Performance</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign
                        sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">content_copy</i>
                      </div>
                      <p className="card-category">Used Space</p>
                      <h3 className="card-title">
                        49/50
                        <small>GB</small>
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-warning">warning</i>
                        <a href="#pablo" className="warning-link">
                          Get More Space...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">store</i>
                      </div>
                      <p className="card-category">Revenue</p>
                      <h3 className="card-title">$34,245</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">date_range</i> Last 24
                        Hours
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">info_outline</i>
                      </div>
                      <p className="card-category">Fixed Issues</p>
                      <h3 className="card-title">75</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">local_offer</i> Tracked
                        from Github
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <i className="fa fa-twitter" />
                      </div>
                      <p className="card-category">Followers</p>
                      <h3 className="card-title">+245</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">update</i> Just Updated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title">Employees Stats</h4>
                      <p className="card-category">
                        New employees on 15th September, 2016
                      </p>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <thead className="text-warning">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>$23,789</td>
                            <td>Curaçao</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-tabs card-header-warning">
                      <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                          <span className="nav-tabs-title">Tasks:</span>
                          <ul className="nav nav-tabs" data-tabs="tabs">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#profile"
                                data-toggle="tab"
                              >
                                <i className="material-icons">bug_report</i>{" "}
                                Bugs
                                <div className="ripple-container" />
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#messages"
                                data-toggle="tab"
                              >
                                <i className="material-icons">code</i> Website
                                <div className="ripple-container" />
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#settings"
                                data-toggle="tab"
                              >
                                <i className="material-icons">cloud</i> Server
                                <div className="ripple-container" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Lines From Great Russian Literature? Or
                                  E-mails From My Boss?
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Create 4 Invisible User Experiences you Never
                                  Knew About
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="messages">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="settings">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Lines From Great Russian Literature? Or
                                  E-mails From My Boss?
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-white btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
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
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <nav className="float-left">
                <ul>
                  <li>
                    <a href="https://www.creative-tim.com">Creative Tim</a>
                  </li>
                  <li>
                    <a href="https://creative-tim.com/presentation">About Us</a>
                  </li>
                  <li>
                    <a href="http://blog.creative-tim.com">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.creative-tim.com/license">Licenses</a>
                  </li>
                </ul>
              </nav>
              <div className="copyright float-right" id="date">
                , made with <i className="material-icons">favorite</i> by
                <a href="https://www.creative-tim.com" target="_blank">
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default coba;
