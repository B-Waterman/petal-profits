export default function Submit() {

  return (
    <div className="wrapper">
      <input type="checkbox" name="submit" className="check" id="submit"/>
        <label htmlFor="submit" className="button">
          <span className="submit-text">Submit</span>
          <span className="submit-confirm"><i className="fa fa-check"></i></span>
        </label>
    </div>
  )
};
