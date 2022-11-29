import React, {useState} from 'react';
import Navibar from './Navibar/Navibar';
import Sidebar from './Navibar/Sidebar';
import Footer from './Footer/Footer';

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navibar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
