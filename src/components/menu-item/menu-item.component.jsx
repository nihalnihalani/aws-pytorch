import  React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title,imageurl}) => (
    <div style={{
        backgroundImage: `url(${imageurl})`
    }} className='menu-item'>
        <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>TEST</span>
        </div>
    </div>    
);

export default MenuItem;