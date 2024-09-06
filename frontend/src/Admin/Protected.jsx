import AdminLogin from "./AdminLogin";
import AdminNav from "./AdminNav";

const Protected = () => {
  const isSignIn = true;
  const isAdmin = true;
  return <>{isSignIn && isAdmin ? <AdminNav /> : <AdminLogin />}</>;
};

export default Protected;
