import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '../resources/authentication.css'

function Login() {
    const navigate = useNavigate()

    const handleGuestLogin = () => {
        const guestUser = {
            _id: 'guest-user-id',
            name: 'Guest User',
            email: 'guest@example.com'
        }
        localStorage.setItem('Lab-Management-User', JSON.stringify(guestUser))
        navigate('/')
    }

    useEffect(() => {
        if (localStorage.getItem('Lab-Management-User')) {
            navigate('/')
        }
    }, [navigate])

    return (
        <div className='register'>
            <div className="row justify-content-center align-items-center w-100 h-100">
                <div className="col-md-4 user-form">
                    <h1>Welcome</h1>
                    <hr />
                    <p>No login required. Click below to enter the dashboard.</p>
                    <button className='primary' onClick={handleGuestLogin}>Enter Dashboard</button>
                </div>
                <div className="col-md-5">
                    <div className='lottie'>
                        <lottie-player src="https://lottie.host/f58fae94-576b-413d-aed1-080261b6664d/FmgyNjDCCo.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
