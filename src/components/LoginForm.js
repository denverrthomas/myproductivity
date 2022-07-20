import { useState } from "react"

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(e)
    {
      e.preventDefault()
      if(!username || !password)
      {
        alert('Username or password not entered.')
      }
      else
      {
        setUsername("")
        setPassword("")
      }
    }

    return (
    <form className="login_form" onSubmit={onSubmit}>
        <input className="login_input" type="text" placeholder="Username"
        value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input className="login_input" type="password" placeholder="Password"
        value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <input className="login_submit" type="submit" value="Login"/>
    </form>
    )
}

export default LoginForm 