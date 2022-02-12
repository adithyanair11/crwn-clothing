import React from "react";
import { withRouter } from "react-router-dom";
import './menu-item.component.css';

export const MenuItem = withRouter(({title,image,size,history,linkUrl,match}) => {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{
            backgroundImage:`url(${image})`
        }}className="background"></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        
    );
})

