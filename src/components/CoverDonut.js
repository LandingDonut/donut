import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/donut.gif'




const VideoContainer =styled.div`

img{
    width:100%;
    height: auto;
    @media (max-width:2700px) {
       opacity:0.3;
    }
    z-index:0;
}
`
const CoverDonut = () => {
  return (
    <VideoContainer>
        <img src={GIF}/ >
    </VideoContainer>

  )
}

export default CoverDonut