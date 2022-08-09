const Header = (props) => {
  return (
    <header>
        <h1><span>My</span>Productivity</h1>
        <p>Welcome <span>{props.displayName}</span></p>
    </header>
  )
}

export default Header