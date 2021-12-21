import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {

    const [reportDropdown, setreportDropdown] = useState(true);
    const [authDropdown, setauthDropdown] = useState(true);
    const [error, seterror] = useState(true);
    const [form, setform] = useState(true);



  const updateDropdown = (e) => {

    if(e == "reports"){

      if (reportDropdown) {


        setreportDropdown(false)
      }
  
      else {
        setreportDropdown(true)
      }
  
  }

  else if(e == "auth"){

    if (authDropdown) {


      setauthDropdown(false)
    }

    else {
      setauthDropdown(true)
    }


  }

  else if(e == "error"){

    if (error) {


      seterror(false)
    }

    else {
      seterror(true)
    }


  }



  else if(e == "form"){

    if (form) {


      setform(false)
    }

    else {
      setform(true)
    }


  }


    

  }
  return (
    <>

<style jsx>{`
        .m-scroll{overflow:scroll}

      `}

      </style>


<div className="header">
          {/* Logo */}
          <div className="header-left">
           <Link href="/"><a className="logo">
              <img src="/static/assets/img/logo.png" alt="Logo" />

              {/* <Image src="/../public/static/assets/img/logo.png" height={40} width={155} alt="Logo"/> */}
            
            
            </a>
            </Link> 

            <Link href="/"><a className="logo logo-small">
            
            <img src="/static/assets/img/logo-small.png" />
              {/* <Image src="/../public/static/assets/img/logo-small.png" height={16} width={16} alt="Logo" /> */}
            </a></Link>
          </div>
          {/* /Logo */}
          <a href="javascript:void(0);" id="toggle_btn">
            <i className="fe fe-text-align-left" />
          </a>
          <div className="top-nav-search">
            <form>
              <input type="text" className="form-control" placeholder="Search here" />
              <button className="btn" type="submit"><i className="fa fa-search" /></button>
            </form>
          </div>
          {/* Mobile Menu Toggle */}
          <a className="mobile_btn" id="mobile_btn">
            <i className="fa fa-bars" />
          </a>
          {/* /Mobile Menu Toggle */}
          {/* Header Right Menu */}
          <ul className="nav user-menu">
            {/* Notifications */}
            <li className="nav-item dropdown noti-dropdown">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" alt="User Image" src="/static/assets/img/doctors/doctor-thumb-01.jpg"  />

                         
                          </span>
                          <div className="media-body">
                            <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                            <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" alt="User Image" src="/static/assets/img/patients/patient1.jpg"  />
                          </span>
                          <div className="media-body">
                            <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                            <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" alt="User Image" src="/static/assets/img/patients/patient2.jpg"/>
                          </span>
                          <div className="media-body">
                            <p className="noti-details"><span className="noti-title">Travis Trimble</span> sent a amount of $210 for his <span className="noti-title">appointment</span></p>
                            <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" alt="User Image" src="/static/assets/img/patients/patient3.jpg"  />
                          </span>
                          <div className="media-body">
                            <p className="noti-details"><span className="noti-title">Carl Kelly</span> send a message <span className="noti-title"> to his doctor</span></p>
                            <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            </li>
            {/* /Notifications */}
            {/* User Menu */}
            <li className="nav-item dropdown has-arrow">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <span className="user-img">
                  <img className="rounded-circle" src="/static/assets/img/profiles/avatar-01.jpg" width={31} height={31} alt="Ryan Taylor" />

                </span>
              </a>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img src="/static/assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle"  />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <a className="dropdown-item" href="profile.html">My Profile</a>
                <a className="dropdown-item" href="settings.html">Settings</a>
                <a className="dropdown-item" href="login.html">Logout</a>
              </div>
            </li>
            {/* /User Menu */}
          </ul>
          {/* /Header Right Menu */}
        </div>



        <div className="sidebar m-scroll" id="sidebar">
          <div className="sidebar-inner">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="active">

                <Link href="/"><a><i className="fe fe-home" /> <span>Dashboard</span></a></Link>
                  
                </li>
                <li>

                <Link href="Appointments"><a ><i className="fe fe-layout" /> <span>Appointments</span></a></Link>

                </li>
                <li>

                <Link href="Specilities"><a><i className="fe fe-users" /> <span>Specialities</span></a></Link>

                </li>
                <li>


                <Link href="Doctors"><a><i className="fe fe-user-plus" /> <span>Doctors</span></a></Link>
                </li>
                <li>
                <Link href="Patient"><a ><i className="fe fe-user" /> <span>Patients</span></a></Link>
                </li>
                <li>
                <Link href="Review"><a ><i className="fe fe-star-o" /> <span>Reviews</span></a></Link>
                </li>
                <li>
                <Link href="Transaction"><a><i className="fe fe-activity" /> <span>Transactions</span></a></Link>
                </li>
                <li>
                <Link href="Settings"><a><i className="fe fe-vector" /> <span>Settings</span></a></Link>
                </li>
                <li className="submenu">
                  <a href="#" onClick={()=>{updateDropdown("reports")}} ><i className="fe fe-document" /> <span> Reports</span> <span className="menu-arrow" /></a>
                  <ul style={reportDropdown ? { display: 'none' } : { display: 'block' }}>
                    <li><Link href="Invoice"><a >Invoice Reports{reportDropdown}</a></Link></li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li>
                <Link href="Profile"><a><i className="fe fe-user-plus" /> <span>Profile</span></a></Link>
                </li>
                <li className="submenu">
                 
                  <a href="#" onClick={()=>{updateDropdown("auth")}} ><i className="fe fe-document" /> <span> Authentication</span> <span className="menu-arrow" /></a>
                 

                  <ul style={authDropdown ? { display: 'none' } : { display: 'block' }}>
                    <li><Link href="login"><a> Login </a></Link></li>
                    <li><Link href="register"><a> Register </a></Link></li>
                    <li><Link href="forgetpassword"><a> Forgot Password </a></Link></li>
                    <li><Link href="lockscreen"><a> Lock Screen </a></Link></li>
                 
                  </ul>
                </li>
                <li className="submenu">
                <a href="#" onClick={()=>{updateDropdown("error")}} ><i className="fe fe-document" /> <span> Error</span> <span className="menu-arrow" /></a>

                  <ul style={error ? { display: 'none' } : { display: 'block' }}>
                 
                    <li><Link href="page404"><a> 404 Error </a></Link></li>
                    <li><Link href="page500"><a> 500 Error </a></Link></li>
                  </ul>
                </li>
               
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li>
                <Link href="components"><a><i className="fe fe-vector" /> <span>Components</span></a></Link>
                </li>
                <li className="submenu">
                <a href="#" onClick={()=>{updateDropdown("form")}} ><i className="fe fe-document" /> <span> Form</span> <span className="menu-arrow" /></a>
                <ul style={form ? { display: 'none' } : { display: 'block' }}>
                     <li><Link href="basicinputform"><a> Basic Inputs </a></Link></li>
                     <li><Link href="forminputgroup"><a> Input Groups </a></Link></li>
                     <li><Link href="horizontalform"><a> Horizontal Form </a></Link></li>
                     <li><Link href="verticalform"><a> Vertical Form  </a></Link></li>
                     <li><Link href="formmask"><a>Form Mask </a></Link></li>
                     <li><Link href="formmask"><a>Form Validation </a></Link></li>
                   
                  
                    
                    
                  </ul>
                </li>
                <li className="submenu">

                <Link href="table"><a><i className="fe fe-table" /> <span>Tables</span></a></Link>
                  
                </li>
               
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}
