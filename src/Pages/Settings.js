import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Settings = () => {
    return (
        <>
            <div className="settings">
                <Sidebar/>
                <div className="main-section">
                    <Navbar/>
                    <div className="hero">
                        <form className="profile-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email id</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile no.</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    className="form-input"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Settings
