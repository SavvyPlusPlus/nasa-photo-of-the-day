import React, { useState } from 'react';
import Body from '../Body/Body'


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
        <div>
            <button onClick={changeImg}>{dfltImg === true ? 'Lets Fly' : 'Go Back'}</button> <br/>
            <br/>
            {sunDesc === false ? null : <p>{deScript}</p>}
            {dfltImg === true ? <img onClick={changeImg} src={gifImg}/> : <img  onClick={changeImg} src={imgUrl}/> }
            {showCopyR === false ? <Body data={data}/> : null}
        </div>
    );
}; 

export default Gallery;