function UsersOnly(props) {
  return (
    <div className="groupit groupith">
      <button
        id="addButton"
        className="b"
        onClick={() => props.toggle("addModal")}
      >
        Add Entry
      </button>
      <button id="logout" className="b" onClick={props.logoutClick}>
        Logout
      </button>
    </div>
  );
}

export default UsersOnly;
