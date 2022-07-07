const Button = ({type, text}) => {
  return (
    <button className={`btn-${type}`}>{text}</button>
  )
}

export default Button