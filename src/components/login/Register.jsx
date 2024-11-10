import React, { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="label-form" htmlFor="name">Full name</label>
            <input className="input-form" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label className="label-form" htmlFor="email">email</label>
            <input className="input-form" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="label-form" htmlFor="password">password</label>
            <input className="input-form" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="button-form" type="submit">Log In</button>
        </form>
        <Link to='/login'>
        <button className="link-btn" onClick={() => props.onFormSwitch('/login')}>Already have an account? Login here.</button>
        </Link>
    </div>
    )
}

export default Register