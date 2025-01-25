import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    return (

        <div className='dashboard'>
            <Sidebar />
            <div className='main-section'>
                <Navbar />
                <div className="hero">
                    <div className="tc-head">
                        <h1 className="tc">Total Clicks</h1>
                        <span>246</span>
                    </div>

                    <div className="date-click">
                        <ul>
                            <li>21-08-2022</li>
                            <li>20-07-2022</li>
                            <li>20-06-2022</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
