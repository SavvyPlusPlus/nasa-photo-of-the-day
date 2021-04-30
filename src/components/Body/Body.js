import React, { useState } from 'react'
import styled from 'styled-components'



function Body(props) {
    const {data} = props;
    const copy = data.copyright;
    
    return (
            <p>{copy}</p>
    );
};

export default Body;