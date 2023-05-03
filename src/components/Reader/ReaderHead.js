import Radios from "./Radios";
import SearchBar from "./SearchBar";

function ReaderHead(props) {
  return (
    <div id="readerHead" className="groupit">
      <Radios paramSelect={props.paramSelect} />
      <SearchBar search={props.search} />
    </div>
  );
}

export default ReaderHead;
