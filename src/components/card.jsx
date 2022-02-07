const Card = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card my-2">
        <img
          className="card-img-top"
          onClick={() => props.onViewer(props.card.imgSrc)}
          src={props.card.imgSrc}
          alt={props.card.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.card.title}</h5>{" "}
          <p className="card-text">{props.card.text}</p>
        </div>
        <button
          className="del-button"
          onClick={() => props.onDelete(props.card)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Card;
