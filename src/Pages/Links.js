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
                        <table className="campaign-table">
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
                                <td>Jan 14, 2025 16:30</td>
                                <td>https://www.trav...</td>
                                <td>
                                    https://c...
                                    <button className="copy-button">📋</button>
                                </td>
                                <td className="remarks-cell">campaign1</td>
                                <td>5</td>
                                <td>
                                    <span className="status status-active">Active</span>
                                </td>
                                <td className="action-cell">
                                    <button className="action-button">✏️</button>
                                    <button className="action-button">🗑️</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jan 14, 2025 05:45</td>
                                <td>https://www.trav...</td>
                                <td>
                                    https://c...
                                    <button className="copy-button">📋</button>
                                </td>
                                <td className="remarks-cell">campaign 2</td>
                                <td>5</td>
                                <td>
                                    <span className="status status-inactive">Inactive</span>
                                </td>
                                <td className="action-cell">
                                    <button className="action-button">✏️</button>
                                    <button className="action-button">🗑️</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jan 14, 2025 07:43</td>
                                <td>https://www.trav...</td>
                                <td>
                                    https://c...
                                    <button className="copy-button">📋</button>
                                </td>
                                <td className="remarks-cell">campaign 3</td>
                                <td>5</td>
                                <td>
                                    <span className="status status-inactive">Inactive</span>
                                </td>
                                <td className="action-cell">
                                    <button className="action-button">✏️</button>
                                    <button className="action-button">🗑️</button>
                                </td>
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
