const AdminLogin = () => {
  return (
    <>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div>
        <label className="form-label">Password</label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
   
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
