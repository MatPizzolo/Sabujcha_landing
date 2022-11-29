import React from 'react';
import './comment.css';
import { StaticImage } from 'gatsby-plugin-image';

const Comment = () => {
    return (
            <div className="comment-container">
                <div className="content">
                    <StaticImage src="../../assets/imgs/leaf.png" alt="img" className="comment-leaf"/>
                    <h4>It is a long established fact that a reader will be distracted by the readable </h4>
                    <h5>Gregory Perkins</h5>
                    <p>Customer</p>  
                </div>
            </div>
    )
}

export default Comment
