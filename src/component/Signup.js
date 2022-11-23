
import React, { useEffect, useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Player from "./Player"

function Signup(props) {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showPlayer, setShowPlayer] = useState(false)
    
    const localSignUp = localStorage.getItem("signUp")
    const navigate = useNavigate();

    useEffect(() => {
        if (localSignUp) {
            setShowPlayer(true)
        }
    })

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {

            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", email.current.value)
            localStorage.setItem('loggedin', true)
            // alert("Account has been registered")
           return navigate('/');
            // window.location.reload()
        }

    }

    return (
        <div>
            {/* {showPlayer ? <Player /> : */}
                <div className="Signup-form-container">
                    <form className="Signup-form">
                        <div className="Signup-form-content">
                            <h3 className="Signup-form-title">Sign Up</h3>
                            <div className="form-group mt-3">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter Full Name"
                                    ref={name}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter Email"
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
                    </form>
                </div>
            {/* } */}
        </div>
    )
}

export default Signup;