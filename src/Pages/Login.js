import React from 'react'

const Login = () => {
    return (
        <>
            <div className="background">
                <div className="right-section">
                    <div className="auth-btn">
                        <button className="signup">SignUp</button>
                        <button className="login">Login</button>
                    </div>

                    <div className="form-container">
                        <h1>Login</h1>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Email id" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" required=""/>
                            </div>
                            <button type="submit" className="register-btn">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
