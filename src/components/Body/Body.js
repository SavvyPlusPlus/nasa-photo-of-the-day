import React, { useState } from 'react'




function Body(props) {
    const {data} = props;
    const copy = data.copyright;
    
    return (
            <p>{copy}</p>
    );
};

export default Body;