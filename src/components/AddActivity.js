import { useState } from "react"


const AddActivity = ({addActivity}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [color, setColor] = useState("Black")
  const [days, setDays] = useState([1,1,1,1,1,1,1])

  function onSubmit(e)
  {
    e.preventDefault()
    if(!name || !description || !color)
    {
      alert('Please make sure your activity has a name, description, and color')
    }
    else
    {
      addActivity({name, description, color, days})
      setName("")
      setDescription("")
      setColor("")
    }
  }

  return (
    <>
    <div className="add-popup">
      <form className="add-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Activity Name" 
          value={name} onChange={(e)=> setName(e.target.value)} style={{color:color}}/>
        <textarea type="text" placeholder="Description"
          value={description} onChange={(e)=> setDescription(e.target.value)} style={{color:color}}/>
        <label>Color</label>
        <select value={color} onChange={(e)=> setColor(e.target.value)} style={{color:color}}>
          <option value="Black">Black</option>
          <option value="Crimson">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
          <option value="#e75480">Pink</option>
          <option value="Purple">Purple</option>
          <option value="Green">Green</option>
        </select>
        <input className="create-btn"type="submit"  value="Create" style={{backgroundColor: color}}/>
      </form>
    </div>
    <div className="popup-background"></div>
    </>
  )
}

export default AddActivity