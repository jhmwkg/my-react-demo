import Card from "./Card";

function ReaderBody(props) {
  const fillCards = props.entries.map((entry) => (
    <Card
      entry={entry}
      currentUser={props.currentUser}
      editToggle={props.editToggle}
      deleteEntry={props.deleteEntry}
    />
  ));

  return <div id="rb">{fillCards}</div>;
}

export default ReaderBody;
