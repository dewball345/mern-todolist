import {Link} from 'react-router-dom';

export function TodoCard(props){
    let radius = 10
    return (
      <div className="card w-100 shadow-sm" style={{
        borderRadius: radius + "px",
        marginBottom: 20 + "px",
        marginTop: 20 + "px"
      }}>
        <div className="card-header bg-primary" 
              style={{
                borderTopLeftRadius: radius + "px",
                borderTopRightRadius: radius + "px",
                color: "white"
              }}>
          <div className="row">
            <div className="col-sm">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-subtitle">
                Date: {props.subtitle}
              </h6>
            </div>
            <div className="col-sm d-flex justify-content-end">
              <Link to={"/edit/" + props.id} className="btn" style={{
                backgroundColor: "white",
              }}>
                <h6>
                  Edit
                </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            {props.description}
          </p>
          <h3 className="blockquote-footer">
            By: {props.username}
          </h3>
        </div>
      </div>
    );
  }