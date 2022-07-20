import LoginForm from '../LoginForm'

export const Login = () => {
    return(
        <div className="login_wrapper">
            <div className="login_title_wrapper"> <h1 className="login_title"><span>My</span>Productivity</h1> </div>
            <LoginForm/>
        </div>
    )
}