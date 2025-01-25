import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <div className='top-section'>
                        <img src="/sun.png" alt="Sun" className="sun-icon" />
                    </div>

                    <div className='bottom-section'>
                        <span className="greeting">Good morning, Sarthak</span>
                        <span className="date">Tue, Jan 25</span>
                    </div>
                </div>

                <div className="navbar-right">
                    <button className="create-new-btn">
                        <span>+</span>
                        <span>Create new</span>
                    </button>
                    <div className="search-container">
                        <IoIosSearch />
                        <input type="text" placeholder="Search by remarks" className="search-input" />
                    </div>
                    <button className="account">SU</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar

