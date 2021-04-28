import React from 'react'
import "./Header.css";



function Header(props) {
    const {data} = props;
    
    return (
        <div>
            <h1>{data.title}</h1>
            <h4>{data.date}</h4>


        </div>
    );
};

export default Header;