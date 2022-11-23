
import React, { useEffect, useRef, useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import Player from "./Player"
import LoginGoogle from "./Google/Login"

function Login() {
    const email = useRef()
    const password = useRef()
    const [showPlayer, setShowPlayer] = useState(false)
    const localEmail = localStorage.getItem("login")

    const navigate = useNavigate();


    useEffect(() => {
        if (localEmail) {
            setShowPlayer(true)
        }
    })


    const handleClick = () => {
        if (email.current.value && password.current.value) {


            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("login", email.current.value)
            localStorage.setItem('loggenid', true)
            navigate('/home');


            window.location.reload()
        }
    }
    console.log('hi form login');

    return (
        <div>
            {/* {showPlayer ? < Player /> : */}
            <div className="Login-form-container">
                <form className="Login-form">

                    <div className="Login-form-content">
                        <h3 className="Login-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                ref={email}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                ref={password}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={handleClick} type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>

                    </div>
            <LoginGoogle />
                </form>
            </div>
            {/* } */}
        </div>
    )
}



export default Login;