const Card = (props) => {
  return (
    //TODO: expand image when clicked on
    <div className="col-md-4 col-sm-6">
      <div className="card my-2">
        <img
          className="card-img-top"
          onClick={props.onExpand}
          src={props.card.imgSrc}
          alt={props.card.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.card.title}</h5>
          <p className="card-text">{props.card.text}</p>
        </div>
        <button className="btn btn-sm my-2" onClick={props.onDelete}>
          X
        </button>
      </div>
    </div>
  );
};

export default Card;
