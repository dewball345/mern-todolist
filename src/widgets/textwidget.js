export function TextWidget(props){
    return (
      <div className="form-group">
        <label>{props.title}:</label>
        <input type="text" 
          required
          className="form-control" 
          placeholder={props.placeholder}
          value={props.value === null ? "asdfadsfsaf" : props.value}
          onChange={props.onChange}></input>
      </div>
    )
  }