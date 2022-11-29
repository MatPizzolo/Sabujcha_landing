import React from 'react';
import links from '../constants/links';
import socialLinks from '../constants/socialLinks/social-links';
import { StaticImage } from 'gatsby-plugin-image';


const Sidebar = ({isOpen, toggleSidebar}) => {
    return (
        <>
        <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}> 
            <button className="close-btn" type="button" onClick={toggleSidebar}> <StaticImage src="../../assets/imgs/box-arrow-up-right.svg" alt="cross" /> </button>
            <div className="side-container">
                <ul className={isOpen ? "sidebar-links" : null}>
                {links.map((link => {
                    return (
                    <li key={link.id}>
                        <a to={link.url} onClick={toggleSidebar} >{link.text}</a>
                    </li>
                    )
                }))}
                </ul>
                <ul className={isOpen ? "social-links sidebar-icons":null}>
                    {socialLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            {link.icon}
                        </li>
                    )
                    })}

                </ul>
            </div>
        </aside>  
        </>
    )
}

export default Sidebar
