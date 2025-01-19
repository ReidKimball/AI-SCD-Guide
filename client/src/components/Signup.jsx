import { useState } from 'react'
import { useNavigate } from 'react-router'
import { API_BASE_URL } from '../env-config.js'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            const response = await fetch(`${API_BASE_URL}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password }),
            })

            if (response.ok) {
                // account created successfully
                navigate('/login')
            } else {
                // handle errors
                const data = await response.json()
                setError(data.message || 'An error occurred during signup.')
            }
        } catch (err) {
            setError('Network error or server is down.')
            console.error('Signup error:', err)
        }
    }
    
    return (
        <>
        <main>
            <h1>Sign-up below to try SCD Coach for free</h1>
            
            {/*<form action='http://localhost:3000/signup' method='POST' className='sign-up-form'>*/}
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
                    <button type='submit'>Sign-up</button>
                </div>
            </form>
        </main>
        </>
    )
}