import React, { useState } from 'react';
import Body from '../Body/Body'
import styled from 'styled-components';

function Gallery(props) {
    const {data} = props;
    const imgUrl = data.url;
    const deScript = data.explanation;
    const gifImg = `https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif`;
    
    const [dfltImg, setDfltImg] = useState(true);
    const [sunDesc, setSunDesc] = useState(false);
    const [showCopyR, setshowCopyR] = useState(true);

    const changeImg = (e) => {
        setDfltImg(!dfltImg);
        setSunDesc(!sunDesc)
        setshowCopyR(!showCopyR);

    };

    return (
        <WrapperDiv>
            <button onClick={changeImg}>{dfltImg === true ? 'Lets Fly' : 'Go Back'}</button> <br/>
            <br/>
            {sunDesc === false ? null : <Descript>{deScript}</Descript>}
            {dfltImg === true ? <Image1 onClick={changeImg} src={gifImg}/> : <Image2  onClick={changeImg} src={imgUrl}/> }
            {showCopyR === false ? <Body data={data}/> : null}
        </WrapperDiv>
    );
}; 

export default Gallery;


const WrapperDiv = styled.div`
            display: flex-inline;
            width: 100%;
            height: 100%;

        `;

        const Image1 = styled.img`
        border-radius: 60px;
        background: url(paper.gif);
        background-position: left top;
        background-repeat: repeat;
        padding: 20px;
        width: 600px;
        height: 550px;
        `;

        const Image2 = styled.img`
        border-radius: 30px;
        background: url(paper.gif);
        background-position: left top;
        background-repeat: repeat;
        padding: 20px;
        width: 700px;
        height: 550px;
        `;

        const Descript = styled.p`
        width: 100%;
        `;

       