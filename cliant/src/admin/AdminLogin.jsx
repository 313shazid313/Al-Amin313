const AdminLogin = () => {
  return (
    <>
      <div className="">
        <span className="" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className=""
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div>
        <label className="">Password</label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="">
          Your password must be 8-20 characters long, contain letters and
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
