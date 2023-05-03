import ReaderHead from "./ReaderHead";
import ReaderBody from "./ReaderBody";

function ReaderMain(props) {
  return (
    <div>
      <ReaderHead
        paramSelect={props.paramSelect}
        sortBy={props.sortBy}
        search={props.search}
      />
      <ReaderBody
        currentUser={props.currentUser}
        entries={props.entries}
        editToggle={props.editToggle}
        deleteEntry={props.deleteEntry}
      />
    </div>
  );
}

export default ReaderMain;
