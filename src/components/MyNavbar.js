import React, { useState } from "react";

const MyNavbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    

    return (
        <>
            <nav className="myNavbar navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#home"><strong>B e a u t y  C o s m e t i c s</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse myNavItem" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`my-nav-link ${activeLink === 'product' ? 'my-active' : ''}`} onClick={() => handleLinkClick('product')} aria-current="page" href="#product">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className={`my-nav-link ${activeLink === 'about' ? 'my-active' : ''}`} onClick={() => handleLinkClick('about')} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`my-nav-link ${activeLink === 'contact' ? 'my-active' : ''}`} onClick={() => handleLinkClick('contact')} href="#contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="my-nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default MyNavbar;