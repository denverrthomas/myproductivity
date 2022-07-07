const AddActivity = () => {
  return (
    <div className="add-popup">
      <form className="add-form">
        <input type="text" placeholder="Activity Name" autoFocus/>
        <textarea type="text" placeholder="Description"/>
        <input type="text" placeholder="Color"/>
        <input className="create-btn"type="submit"  value="Create"/>
      </form>
    </div>
  )
}

export default AddActivity