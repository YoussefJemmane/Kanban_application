import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);
  console.log(localStorage.getItem('isLogin'));
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    if (loginStatus === 'false') {
      setIsLogin(false);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    setIsLogin(false);
    localStorage.setItem('isLogin', 'false');
    window.location.href = '/';
  };

  return (
    <div>
      <nav className='border rounded-md flex justify-between m-2'>
        <a href='/' className='text-3xl pt-4 ml-3'>
          Kanban
        </a>
        {isLogin ? (
          <ul className='flex m-4'>
            <li className='border rounded-md px-3 py-2 mr-4'>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <img
                src='https://ionicframework.com/docs/img/demos/avatar.svg'
                alt=''
                className='w-[50px] rounded-full px-3 py-2'
              />
            </li>
          </ul>
        ) : (
          <ul className='flex m-4'>
            <li className='border rounded-md px-3 py-2 mr-4'>
              <a href='/login'>Login</a>
            </li>
            <li className='border rounded-md px-3 py-2'>
              <a href='/register'>Register</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
