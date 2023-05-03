function Radios(props) {
  return (
    <div className="groupit rh">
      <input
        id="radioAuthor"
        type="radio"
        name="param"
        value="author"
        onChange={props.paramSelect}
        defaultChecked
      />
      <label htmlFor="radioAuthor">Author</label>

      <input
        id="radioText"
        type="radio"
        name="param"
        value="text"
        onChange={props.paramSelect}
      />
      <label htmlFor="radioText">Text</label>
    </div>
  );
}

export default Radios;
