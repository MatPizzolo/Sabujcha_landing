import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <> 
        <footer className="footer-container">
        <div className="container">
            <div className="footer-links">
                <div className="text-rows">
                    <h3 className="footer-title">My Account</h3>
                    <p className="footer-p-links">My Account</p>
                    <p className="footer-p-links">Order History</p>
                    <p className="footer-p-links">WishList</p>
                    <p className="footer-p-links">Newsletter</p>
                    <p className="footer-p-links">International Orders</p>
                </div>
                <div className="text-rows">
                    <h3 className="footer-title">Information</h3>
                    <p className="footer-p-links">About Us</p>
                    <p className="footer-p-links">Delivery Information</p>
                    <p className="footer-p-links">Privacy Policy</p>
                    <p className="footer-p-links">Terms & conditions</p>
                    <p className="footer-p-links">Customer Service</p>
                    <p className="footer-p-links">Return Policy</p>
                </div>
                <div className="text-rows">
                    <h3 className="footer-title">Quick Links</h3>
                    <p className="footer-p-links">Support Center</p>
                    <p className="footer-p-links">Terms & COnditions</p>
                    <p className="footer-p-links">Shipping</p>
                    <p className="footer-p-links">PrivacY Policy</p>
                    <p className="footer-p-links">Help</p>
                    <p className="footer-p-links">FAQS</p>
                </div>
                <div className="text-rows">
                    <h3 className="footer-title">Contact Us</h3>
                    <p className="footer-p-links">Adress 900</p>
                    <p className="footer-p-links">0123456789</p>
                    <p className="footer-p-links">demo@example.com</p>
                </div>
            </div>
        </div> 
        
        
        <div className="botom-footer">
                <div className="copyright">
                    <p>2021 Sabujcha Made by Mateo Pizzolo</p>
                </div>
                <div className="payments">
                    <StaticImage src='../../assets/imgs/payment.png' alt="payments"/>
                </div>
        </div>  
        </footer>
        </>
    )
}

export default Footer
