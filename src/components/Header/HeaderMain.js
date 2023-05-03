import Brand from "./Brand";
import Signup from "./Signup";
import Login from "./Login";
import UsersOnly from "./UsersOnly";
import Messages from "./Messages";

function HeaderMain(props) {
  return (
    <div id="headermain" className="groupit">
      <Brand />
      {!props.currentUser && (
        <Signup toggle={props.toggle} signupSubmit={props.signupSubmit} />
      )}
      {!props.currentUser && props.users.length > 0 && (
        <Login toggle={props.toggle} loginSubmit={props.loginSubmit} />
      )}
      {props.currentUser && (
        <UsersOnly
          toggle={props.toggle}
          addDisplay={props.addDisplay}
          addToggle={props.addToggle}
          logoutClick={props.logoutClick}
        />
      )}
      <Messages message={props.message} />
    </div>
  );
}

export default HeaderMain;
