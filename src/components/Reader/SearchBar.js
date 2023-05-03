function SearchBar(props) {
  return (
    <div className="groupit rh">
      <input type="text" onChange={props.search} placeholder="Starts with..." />
    </div>
  );
}

export default SearchBar;
