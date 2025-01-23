import React from 'react'
// import "./App.css"


const Register = () => {
    return (
        <>
            <div className="background">
                <div className="right-section">
                    <div className="auth-btn">
                        <button className="signup">SignUp</button>
                        <button className="login">Login</button>
                    </div>

                    <div className="form-container">
                        <h1>Join us Today</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Name" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email id" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Mobile no." required=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" required=""/>
                            </div>
                            <button type="submit" className="register-btn">
                                Register
                            </button>
                        </form>
                        <p className="login-text">Already have an account? <a href="#">Login</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Register
