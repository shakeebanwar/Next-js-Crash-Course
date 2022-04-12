
import Navbar from '../components/Navbar'

export default function Review() {
  return (
      <>
    

        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Reviews</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">Reviews</li>
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
                          <th>Patient Name</th>
                          <th>Doctor Name</th>
                          <th>Ratings</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Charlene Reed </a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Ruby Perrin</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>3 Nov 2019 <br /><small>09.59 AM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Travis Trimble </a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Darren Elder</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>2 Nov 2019<br /> <small>08.50 AM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Carl Kelly</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Deborah Angel</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>1 Nov 2019<br /> <small>02.59 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html"> Michelle Fairfax</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Sofia Brient</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>27 Sep 2019 <br /><small>03.40 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Gina Moore</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Marvin Campbell</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>24 Sep 2019 <br /><small>04.38 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Elsie Gilley</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Katharine Berthold</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>22 Aug 2019 <br /><small>01.50 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Joan Gardner</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Linda Tobin</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>21 Jul 2019 <br /><small>05.50 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Daniel Griffing</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Paul Richard</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>16 Jun 2019 <br /><small>04.50 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Walter Roberson</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. John Gibbs</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>11 Mar 2019 <br /><small>05.55 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Harry Williams</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                              <a href="profile.html">Dr. Olga Barlow</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>15 Feb 2019 <br /><small>07.30 PM</small></td>
                          <td className="text-right">
                            <div className="actions">
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
