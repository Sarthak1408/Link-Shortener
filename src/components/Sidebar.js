import React from 'react'
import { RiHomeSmile2Line, RiLinksLine, RiSettings4Line } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";


const Sidebar = () => {
    return (
        <>
            <div className="container">
                <img className='dash-img' src="/download 2.svg" alt="logo"/>
                <nav>
                    <a href="/dashboard" className="sidebar-link">
                        <RiHomeSmile2Line style={{marginRight: 5}}/>
                        <span>Dashboard</span>
                    </a>

                    <a href="/links" className="sidebar-link">
                        <RiLinksLine style={{marginRight: 5}}/>
                        <span>Links</span>
                    </a>

                    <a href="/analytics" className="sidebar-link">
                        <IoMdTrendingUp style={{marginRight: 5}}/>
                        <span>Analytics</span>
                    </a>


                    <div className="setting">
                        <a href="/settings" className="sidebar-link">
                            <RiSettings4Line style={{marginRight: 5}}/>
                            <span>Settings</span>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Sidebar






