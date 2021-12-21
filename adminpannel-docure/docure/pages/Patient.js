
import Navbar from '../components/Navbar'

export default function Patient() {
  return (
      <>
     


        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Patient</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
                  <li className="breadcrumb-item active">Patient</li>
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
                    <div className="table-responsive">
                      <table className="datatable table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Last Visit</th>
                            <th className="text-right">Paid</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#PT001</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>29</td>
                            <td>4417  Goosetown Drive, Taylorsville, North Carolina, 28681</td>
                            <td>8286329170</td>
                            <td>20 Oct 2019</td>
                            <td className="text-right">$100.00</td>
                          </tr>
                          <tr>
                            <td>#PT002</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Travis Trimble </a>
                              </h2>
                            </td>
                            <td>23</td>
                            <td>4026  Fantages Way, Brunswick, Maine, 04011</td>
                            <td>2077299974</td>
                            <td>22 Oct 2019</td>
                            <td className="text-right">$200.00</td>
                          </tr>
                          <tr>
                            <td>#PT003</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Carl Kelly</a>
                              </h2>
                            </td>
                            <td>29</td>
                            <td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
                            <td>2607247769</td>
                            <td>21 Oct 2019</td>
                            <td className="text-right">$250.00</td>
                          </tr>
                          <tr>
                            <td>#PT004</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html"> Michelle Fairfax</a>
                              </h2>
                            </td>
                            <td>25</td>
                            <td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
                            <td>5043686874</td>
                            <td>21 Sep 2019</td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>#PT005</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Gina Moore</a>
                              </h2>
                            </td>
                            <td>23</td>
                            <td>888  Everette Alley, Hialeah, Florida, 33012</td>
                            <td>9548207887</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$350.00</td>
                          </tr>
                          <tr>
                            <td>#PT006</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Elsie Gilley</a>
                              </h2>
                            </td>
                            <td>16</td>
                            <td>644  Coffman Alley, Bowling Green, Kentucky, 42101</td>
                            <td>3153844562</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$300.00</td>
                          </tr>
                          <tr>
                            <td>#PT007</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html"> Joan Gardner</a>
                              </h2>
                            </td>
                            <td>25</td>
                            <td>2399  Hillview Drive, San Francisco, California, 94103</td>
                            <td>7072202603</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$250.00</td>
                          </tr>
                          <tr>
                            <td>#PT008</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html"> Daniel Griffing</a>
                              </h2>
                            </td>
                            <td>21</td>
                            <td>4914  Hilltop Haven Drive, Passaic, New Jersey, 07055</td>
                            <td>9737739497</td>
                            <td>7 Sep 2019</td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>#PT009</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Walter Roberson</a>
                              </h2>
                            </td>
                            <td>18</td>
                            <td>1299  Star Trek Drive, Panama City, Florida, 32405</td>
                            <td>8503584445</td>
                            <td>11 Sep 2019</td>
                            <td className="text-right">$100.00</td>
                          </tr>
                          <tr>
                            <td>#PT010</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Robert Rhodes</a>
                              </h2>
                            </td>
                            <td>19</td>
                            <td>1214  Hamill Avenue, Del Mar, California, 92014</td>
                            <td>8582595285</td>
                            <td>12 Sep 2019</td>
                            <td className="text-right">$120.00</td>
                          </tr>
                          <tr>
                            <td>#PT011</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Harry Williams</a>
                              </h2>
                            </td>
                            <td>9</td>
                            <td>4566  Sampson Street, Denver, Colorado, 80202</td>
                            <td>3036077075</td>
                            <td>14 Sep 2019</td>
                            <td className="text-right">$130.00</td>
                          </tr>
                          <tr>
                            <td>#PT012</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Robert Johnston</a>
                              </h2>
                            </td>
                            <td>29</td>
                            <td>1996  Crummit Lane, Beatrice, Nebraska, 68310</td>
                            <td>4022231492</td>
                            <td>7 Nov 2019</td>
                            <td className="text-right">$260.00</td>
                          </tr>
                          <tr>
                            <td>#PT013</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Tracy Mason</a>
                              </h2>
                            </td>
                            <td>32</td>
                            <td>4211  Vesta Drive, TOLEDO, Washington, 98591</td>
                            <td>7737265795</td>
                            <td>9 Nov 2019</td>
                            <td className="text-right">$290.00</td>
                          </tr>
                          <tr>
                            <td>#PT014</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html"> Daniel Finch</a>
                              </h2>
                            </td>
                            <td>23</td>
                            <td>186  Bryan Street, Greensboro, North Carolina, 27409</td>
                            <td>3362314023</td>
                            <td>5 Nov 2019</td>
                            <td className="text-right">$300.00</td>
                          </tr>
                          <tr>
                            <td>#PT015</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/static/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                <a href="profile.html">Jessica Garza</a>
                              </h2>
                            </td>
                            <td>10</td>
                            <td>4672  Rose Street, Schaumburg, Illinois, 60173</td>
                            <td>7082788201</td>
                            <td>6 Nov 2019</td>
                            <td className="text-right">$310.00</td>
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


        
      
  
      </>
  
   
  )
}
