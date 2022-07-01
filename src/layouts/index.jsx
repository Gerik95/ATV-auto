import React from 'react';
import './style.css';


const WrapLayout = ({ title, children, componentRef }) => {
    return (
        <div ref={componentRef} className="section">
            <div className="wrapper">
                <h2 className="section-title">{title}</h2>
                <div className="section-grid">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default WrapLayout;