import React from 'react'
import { logo, title } from '../styles/style'
import useHover from '../hooks/useHover'

const Logo = () => {

    const [hover, attrs] = useHover()

    const logoImage = {
        url: './logo192.png'
    }
    
  return (
    <div >
    <h3 style={title}>Logo</h3>
    {
      hover ? <p>Hello Logo</p> : null
    }
        {/* <img src={"./logo192.png"} width="100" alt="logo" /> */}
        <img {...attrs} style={logo} src={logoImage.url} width="100" alt="logo" />
    </div>
  )
}

export default Logo