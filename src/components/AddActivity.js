import { useState } from "react"


const AddActivity = ({addActivity}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [color, setColor] = useState("")
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
    <div className="add-popup">
      <form className="add-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Activity Name" autoFocus 
          value={name} onChange={(e)=> setName(e.target.value)}/>
        <textarea type="text" placeholder="Description"
          value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <label>Color</label>
        <select value={color} onChange={(e)=> setColor(e.target.value)}>
          <option value="Red" >Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <input className="create-btn"type="submit"  value="Create"/>
      </form>
    </div>
  )
}

export default AddActivity