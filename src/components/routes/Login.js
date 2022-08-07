import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/Firebase'
// import { useLogin, useNotify, Notification } from 'react-admin';

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    // const login = useLogin();
    // const notify = useNotify();

    function onSubmit(e)
    {
        e.preventDefault()

        // LOGIC SHOULD GO HERE IN DETERMINING RATHER SUBMIT IS VALID
        // IF IT IS, NEXT CODE WILL RUN REDIRECTING TO PAGE

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Pass this user object into the home screen
                console.log('Signed in')
                const user = userCredential.user;
                console.log(user.uid);
                navigate('/home', { state: user }); // should include a variable id maybe so page knows to load that particular user info?
            })
            .catch(error => {
                alert("Please make sure Email and Password are correct.")
                console.error(error);
                // Display some sort of error pop up message here
            });
    }

    return(
        <div className="login_wrapper">
            <div className="login_title_wrapper"> <h1 className="login_title"><span>My</span>Productivity</h1> </div>
            <form className="login_form" onSubmit={onSubmit}>
                <input
                    className="login_input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                    className="login_input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <input
                    className="login_submit"
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    )
}