import { useState } from "react"

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(e)
    {
      e.preventDefault()
      if(!email || !password)
      {
        alert('Email or password not entered.')
      }
      else
      {
        setEmail("")
        setPassword("")
      }
    }

    return (
    <form className="login_form" onSubmit={onSubmit}>
        <input className="login_input" type="text" placeholder="Email"
        value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input className="login_input" type="password" placeholder="Password"
        value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <input className="login_submit" type="submit" value="Login"/>
    </form>
    )
}

export default LoginForm 