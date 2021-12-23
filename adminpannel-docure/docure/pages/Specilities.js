import Navbar from '../components/Navbar'
import { Button, Form, Row, Col, FormGroup, Option, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react'

export default function Appointments() {


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);


  const [modaltitle, setmodaltitle] = useState('');

 


  return (
    <>


      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Specialities</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">Specialities</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a onClick={()=> {setmodaltitle("Add Specialities")
                  setModal1(true)
              } }className="btn btn-primary float-right mt-2">Add</a>
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
                          <th>#</th>
                          <th>Specialities</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#SP001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2">
                                <img className="avatar-img" src="/static/assets/img/specialities/specialities-01.png" alt="Speciality" />
                              </a>
                              <a href="profile.html">Urology</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a href='#' className="btn btn-sm bg-success-light" data-toggle="modal" onClick={() => {setModal1(true)
                              setmodaltitle("Edit Specialities")
                                    
                              
                              
                              }}>
                                <i className="fe fe-pencil" /> Edit
                              </a>


                              <a data-toggle="modal" onClick={() => {setModal(true)
                                }} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP002</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2">


                                <img className="avatar-img" src="/static/assets/img/specialities/specialities-02.png" alt="Speciality" />
                              </a>
                              <a href="profile.html">Neurology</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                            <a className="btn btn-sm bg-success-light" data-toggle="modal" onClick={() => setModal1(true)}>
                                <i className="fe fe-pencil" /> Edit
                              </a>

                              <a data-toggle="modal" onClick={() => setModal(true)} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP003</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2">
                                <img className="avatar-img" src="/static/assets/img/specialities/specialities-03.png" alt="Speciality" />
                              </a>
                              <a href="profile.html">Orthopedic</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                            <a className="btn btn-sm bg-success-light" data-toggle="modal" onClick={() => setModal1(true)}>
                                <i className="fe fe-pencil" /> Edit
                              </a>

                              <a data-toggle="modal" onClick={() => setModal(true)} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP004</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2">
                                <img className="avatar-img" src="/static/assets/img/specialities/specialities-04.png" alt="Speciality" />
                              </a>
                              <a href="profile.html">Cardiologist</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                            <a className="btn btn-sm bg-success-light" data-toggle="modal" onClick={() => setModal1(true)}>
                                <i className="fe fe-pencil" /> Edit
                              </a>

                              <a data-toggle="modal" onClick={() => setModal(true)} className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP005</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2">
                                <img className="avatar-img" src="/static/assets/img/specialities/specialities-05.png" alt="Speciality" />
                              </a>
                              <a href="profile.html">Dentist</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                            <a className="btn btn-sm bg-success-light" data-toggle="modal" onClick={() => setModal1(true)}>
                                <i className="fe fe-pencil" /> Edit
                              </a>

                              <a data-toggle="modal" onClick={() => setModal(true)} className="btn btn-sm bg-danger-light">
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





      {/* Delete Model */}

      <Modal className='text-center' isOpen={modal} toggle={toggle} size="md" centered={true}>

        <ModalBody>


          <div className="form-content p-2">
            <h4 className='modal-title'>{modaltitle}</h4>
            <p className="mb-4">Are you sure want to delete?</p>
            <button type="button" className="btn btn-primary mx-1">Save </button>
            <button type="button" className="btn btn-danger mx-1" onClick={() => setModal(false)}>Close</button>
          </div>

        </ModalBody>

      </Modal>
      {/* Delete Model */}


      {/* Edit model */}

      <Modal className='text-center' isOpen={modal1} toggle={toggle1} size="md" centered={true}>
      <ModalHeader toggle={toggle1}  > {modaltitle}</ModalHeader>
        <ModalBody className='text-left'>
         


          <form>
        <div className="row form-row">
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Specialities</label>
              <input type="text" className="form-control" defaultValue="Cardiology" />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Image</label>
              <input type="file" className="form-control" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
      </form>


        </ModalBody>

      </Modal>


      {/* Edit model */}

    </>


  )
}
