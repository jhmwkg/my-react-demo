function Signup(props) {
  return (
    <div className="groupit groupith drop">
      <button
        onClick={() => props.toggle("signupDrop")}
        className="dropButton dr"
      >
        Signup
      </button>
      <form
        id="signupDrop"
        className="dropContent groupit dr"
        onSubmit={props.signupSubmit}
      >
        <input
          type="text"
          name="user"
          placeholder="Username"
          className="suli dr"
          required
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          className="suli dr"
          required
        />
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}

export default Signup;
