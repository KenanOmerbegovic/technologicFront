import React, { useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="label-form"htmlFor="email">email</label>
                <input className="input-form" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="label-form"htmlFor="password">password</label>
                <input className="input-form" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="button-form"type="submit">Log In</button>
            </form>
            <Link to='/register'>
            <button className="link-btn" >Don't have an account? <Link to='/register'>Register here.</Link></button>
            </Link>
        </div>
    )
}

export default Login