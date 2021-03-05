import React from 'react';
import Styled from 'styled-components';

const NasaPicture = (props) => {
    const { picture } = props;
    return (
        <>
          <div>
              {/* {picture.media_type "image"} ? ( */}

              <img src={picture.hdurl}style={{width:'600px'}} alt= {picture.title}/>
              {/* ) : (
                  <iframe
                  title="space-video"
                  src={picture.hdurl}
                  frameBorder="0"
                  gesture="media"
                  allowFullScreen
                  className="picture"
                  /> */}
              <h1>{picture.title}</h1>
              <p>{picture.date}</p>
              <p>{picture.explanation}</p>
             
        
        
    </div>
    </>
        
      )}
    

export default NasaPicture;