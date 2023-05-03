function AddModal(props) {
  return (
    <div id="addModal" className="modal">
      <div className="modalContent">
        <button className="modalClose" onClick={() => props.toggle("addModal")}>
          &times;
        </button>
        <div>Add Entry</div>
        <form onSubmit={props.addSubmit}>
          <input type="text" name="text" placeholder="Text" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
