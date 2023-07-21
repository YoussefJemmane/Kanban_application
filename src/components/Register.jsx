import React, { useState } from 'react'
import users from '../data/user';
const Register = () => {
    

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('Developer')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username,
            email,
            role,
            password
        }
        console.log(newUser);
        // add user to users 
        if (username.trim() === '') {
            setUsernameError('Username is required.')
            return
        }
        if (email.trim() === '') {
            setEmailError('Email is required.')
            return
        }
        if (password.trim() === '') {
            setPasswordError('Password is required.')
            return
        }
        
    }

    return (
        <div>
            <div className="flex justify-center mt-[40px]">
                <div className="border rounded-md p-4">
                    <h1 className="text-center text-3xl mb-4">Register</h1>
                    <form action="">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="border rounded-md px-2 py-1" onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="border rounded-md px-2 py-1" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" className="border rounded-md px-2 py-1" onChange={(e) => setRole(e.target.value)}>
                                <option value="Developer" >Developer</option>
                                <option value="Manager">Manager</option>
                                <option value="Admin">Admin</option>
                                <option value="Tester">Tester</option>
                            </select>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="border rounded-md px-2 py-1" onChange={(e) => setPassword(e.target.value)} />
                            <button className="border rounded-md px-2 py-1 mt-4" onClick={handleSubmit}>Register</button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register