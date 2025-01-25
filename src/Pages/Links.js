import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Links = () => {
    return (
        <>
            <div className="links">
                <Sidebar/>
                <div className="main-section">
                    <Navbar/>
                    <div className="hero">
                        <table border="1">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Original Link</th>
                                <th>Short Link</th>
                                <th>Remarks</th>
                                <th>Clicks</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>abcd</td>
                                <td>abcd</td>
                                <td>abcd</td>
                                <td>abcd</td>
                                <td>5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Links
