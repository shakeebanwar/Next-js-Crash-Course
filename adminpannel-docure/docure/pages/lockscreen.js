


export default function lockscreen() {
  return (
      <>
     
     <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
              <img className="img-fluid" src="/static/assets/img/logo-white.png" alt="User Image" width={201} height={52}/>

              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <div className="lock-user">
                   
                    <img className="rounded-circle" src="/static/assets/img/profiles/avatar-02.jpg" alt="User Image" width={100} height={100} />

                    <h4>John Doe</h4>
                  </div>
                  {/* Form */}
                  <form>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Password" />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary btn-block" type="submit">Enter</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center dont-have">Sign in as a different user? <a href="login.html">Login</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
  
      </>
  
   
  )
}
