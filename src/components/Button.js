const Button = ({type, text, onClick, color}) => {
  return (
    <button className={`btn-${type}`} onClick={onClick} style={color ? {backgroundColor:color} : {backgroundColor:'transparent'}}>{text}</button>
  )
}

export default Button