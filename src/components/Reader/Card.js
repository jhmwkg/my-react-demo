function Card(props) {
  return (
    <div className="groupit card" key={props.entry.id}>
      <div className="cardSpacer"></div>
      <div>
        <span className="cardTitle">Author:</span> {props.entry.author}
      </div>
      <div>
        <span className="cardTitle">Text:</span> {props.entry.text}
      </div>
      <div className="cardSpacer">
        {props.currentUser == props.entry.author && (
          <button
            className="b delete"
            onClick={() => props.deleteEntry(props.entry.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
  /*
              <button 
                  className="b" 
                  onClick={()=>props.editToggle(props.entry)}>
                      Edit
              </button>
              */
}

export default Card;
