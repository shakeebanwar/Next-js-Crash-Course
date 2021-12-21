
import Navbar from '../components/Navbar'

export default function Invoice() {
  return (
      <>




      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Invoice Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">Invoice Report</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Invoice Number</th>
                          <th>Patient ID</th>
                          <th>Patient Name</th>
                          <th>Total Amount</th>
                          <th>Created Date</th>
                          <th className="text-center">Status</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="invoice.html">#IN0001</a></td>
                          <td>#PT001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Charlene Reed </a>
                            </h2>
                          </td>
                          <td>$100.00</td>
                          <td>9 Sep 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0002</a></td>
                          <td>#PT002</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Travis Trimble </a>
                            </h2>
                          </td>
                          <td>$200.00</td>
                          <td>29 Oct 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0003</a></td>
                          <td>#PT003</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Carl Kelly</a>
                            </h2>
                          </td>
                          <td>$250.00</td>
                          <td>25 Sep 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0004</a></td>
                          <td>#PT004</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html"> Michelle Fairfax</a>
                            </h2>
                          </td>
                          <td>$150.00</td>
                          <td>9 Oct 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0005</a></td>
                          <td>#PT005</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Gina Moore</a>
                            </h2>
                          </td>
                          <td>$350.00</td>
                          <td>19 Nov 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0006</a></td>
                          <td>#PT006</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Elsie Gilley</a>
                            </h2>
                          </td>
                          <td>$300.00</td>
                          <td>12 Oct 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0007</a></td>
                          <td>#PT007</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html"> Joan Gardner</a>
                            </h2>
                          </td>
                          <td>$250.00</td>
                          <td>25 Oct 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0008</a></td>
                          <td>#PT008</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html"> Daniel Griffing</a>
                            </h2>
                          </td>
                          <td>$150.00</td>
                          <td>30 Oct 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0009</a></td>
                          <td>#PT009</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Walter Roberson</a>
                            </h2>
                          </td>
                          <td>$100.00</td>
                          <td>5 Nov 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0010</a></td>
                          <td>#PT010</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Robert Rhodes </a>
                            </h2>
                          </td>
                          <td>$120.00</td>
                          <td>7 Nov 2019</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a data-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
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


     
      
  
      </>
  
   
  )
}
