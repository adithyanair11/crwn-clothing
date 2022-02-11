import React from "react";
import './menu-item.component.css';

export const MenuItem = ({title,image,size}) => {
    return (
        <div className={`menu-item ${size}`}>
        <div style={{
            backgroundImage:`url(${image})`
        }}className="background"></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        
    );
}