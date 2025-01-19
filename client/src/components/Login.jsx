import { API_BASE_URL } from '../env-config.js'

import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            const response = await fetch(`${API_BASE_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password: password }),
            })

            const data = await response.json() // parse JSON response
            console.log('(Login.jsx) - data is: ', data)
            // check for success flag
            if (response.ok && data.success) {
                login(data.user)
                console.log('data.message is: ', data.message)
                // account logged in successfully
                //navigate('/account')
                navigate('/account', {
                    //state: { message: '(Login.jsx) - Login successful!' }
                    state: { message: data.message }
                })
            } else {
                // handle errors
                setError(data.message || '(Login.jsx) - An error occurred during logging in.')
            }
        } catch (err) {
            setError('(Login.jsx) - Network error or server is down.')
            console.error('(Login.jsx) - Login error:', err)
        }
    }

    return (
        <>
        <main>
            <h1>Log in below to use SCD Coach</h1>
            
            {/*<form action='http://localhost:3000/login' method='POST' className='sign-up-form'>*/}
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <div className="add-ingredient-form">
                    <label htmlFor='email'>Email</label>
                    <input 
                        name="username"
                        placeholder="email@domain.com" 
                        aria-label="Add email address" 
                        type="email" 
                        className="email" 
                        alt="email address text field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="add-ingredient-form">
                    <label htmlFor='password'>Password</label>
                    <input 
                        name="password"
                        placeholder="at least 8 char long, letters a-z, numbers 0-9"
                        aria-label="Add unique password" 
                        type="password" 
                        className="password" 
                        alt="password address text field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className='error-message'>{error}</div>}
                <div className="add-ingredient-form">
                    <button type='submit'>Login</button>
                </div>                    
            </form>
        </main>
        </>
    )
}