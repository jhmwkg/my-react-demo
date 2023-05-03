function Login(props) {
  return (
    <div className="groupit groupith drop">
      <button
        onClick={() => props.toggle("loginDrop")}
        className="dropButton dr"
      >
        Login
      </button>
      <form
        id="loginDrop"
        className="dropContent groupit dr"
        onSubmit={props.loginSubmit}
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
        <button type="submit">Let's Go</button>
      </form>
    </div>
  );
}

export default Login;
