import React from "react"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import logo from "../pages/assets/logo.png"
import gsap from 'gsap';

function NavTabs() {

    const location = useLocation();

    const [dropDown, setDropDown] = useState(false)

    const toggleDropDown = () => {
        if (dropDown === false) {
            setDropDown(true)
            gsap.set('.dropdown', { display: 'block', opacity: '0%' })
            gsap.to('.dropdown', { duration: '.15', opacity: '100%' })
        } else if (dropDown === true) {
            setDropDown(false)
            gsap.set('.dropdown', { display: 'none' })
        }
    }

    const hideDropDown = () => {
        setDropDown(false)
        gsap.set('.dropdown', { display: 'none' })
    }

    return (
        <nav className="print-hide">
            <div className="nav-background">
                <div className="nav nav-links ml-auto mr-auto row">

                    <div className="col-md-4">
                        {/* Logo sends to home when clicked */}
                        <Link onClick={hideDropDown} to="/"><img src={logo} alt="logo" className="logo" /></Link>
                    </div>

                    <div className="col-md-8 links">
                        {/* Home link */}
                        <button>
                            <Link onClick={hideDropDown} to="/" className={location.pathname === "/" ? "nav-link active-link" : "nav-link inactive-link"}>Home</Link>
                        </button>

                        {/* Dropdown menu that shows links to shop in store or online */}
                        <button onClick={toggleDropDown}>
                            <div className={location.pathname === "/Shop-Local" || dropDown === true ? "nav-link active-link d-down" : "nav-link inactive-link d-down"}>
                                
                                Shop Atlas

                            <div className="dropdown text-center">
                                    {/* Shop in store */}
                                    <Link to="/Shop-Local" className="dropdown-link">In Store</Link>
                                    {/* Shop online */}
                                    <a className="dropdown-link" href="https://shop.atlaspet.net/products/list/" target="_blank" rel="noopener noreferrer">Online</a>
                                </div>
                            </div>

                        </button>

                        {/* <Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link active-link" : "nav-link inactive-link"}>Contact Us</Link> */}

                        {/* Careers page link */}
                        <button>
                            <Link onClick={hideDropDown} to="/Careers" className={location.pathname === "/Careers" || location.pathname === "/User-Page" ? "nav-link active-link" : "nav-link inactive-link"}>Careers</Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default NavTabs;