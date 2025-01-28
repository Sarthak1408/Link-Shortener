import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Analytics = () => {
    return (
        <>
            <div className="analytics">
                <Sidebar />
                <div className="main-section">
                    <Navbar/>
                    <div className="hero">
                        <table className="tracking-table">
                            <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Original Link</th>
                                <th>Short Link</th>
                                <th>ip address</th>
                                <th>User Device</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Jan 14, 2025 16:30</td>
                                <td>https://www.travelwiththejoneses.</td>
                                <td>https://cuvette.io/Bn41aCOInxj</td>
                                <td>192.158.1.38</td>
                                <td>Adroid</td>
                            </tr>
                            <tr>
                                <td>Jan 14, 2025 6:30</td>
                                <td>https://www.travelwiththejoneses.</td>
                                <td>https://cuvette.io/Bn41aCOInxj</td>
                                <td>192.158.1.38</td>
                                <td>Chrome</td>
                            </tr>
                            <tr>
                                <td>Jan 14, 2025 8:30</td>
                                <td>https://www.travelwiththejoneses.</td>
                                <td>https://cuvette.io/Bn41aCOInxj</td>
                                <td>192.158.1.38</td>
                                <td>ios</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Analytics
