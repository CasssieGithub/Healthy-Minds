import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div>hi</div>
      <Link to="/">Already have an account</Link>
      <form>
        <div>
          <label htmlFor="Username">Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
      </form>
    </>
  );
};

export default Signup;
