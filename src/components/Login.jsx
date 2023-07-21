import React, { useState } from 'react'
import users from '../data/user';
const Login = () => {
    


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsernameError('');
        setPasswordError('');

        if (username.trim() === '') {
            setUsernameError('Username is required.');
            return;
        }

        if (password.trim() === '') {
            setPasswordError('Password is required.');
            return;
        }

        const user = users.find((user) => user.username === username && user.password === password);

        if (user) {
            // Perform secure authentication here, e.g., JWT or session management
            localStorage.setItem('isLogin', 'true');
            window.location.href = '/'
        } else {
            if (users.find((user) => user.username === username)) {
                setPasswordError('Password is incorrect.');
                return;
            }
            setUsernameError('Username does not exist.');
        }

        // login user to database
    };
    return (
        <div>
            <div className="flex justify-center mt-[40px]">

                <div className="border rounded-md p-4">
                    <h1 className="text-center text-3xl mb-4">Login</h1>
                    <form action="">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="border rounded-md px-2 py-1" onChange={(e) => setUsername(e.target.value)} />
                            {usernameError && <p className="text-red-500">{usernameError}</p>}
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="border rounded-md px-2 py-1" onChange={(e) => setPassword(e.target.value)} />
                            {passwordError && <p className="text-red-500">{passwordError}</p>}
                            <button className="border rounded-md px-2 py-1 mt-4" onClick={handleSubmit}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login