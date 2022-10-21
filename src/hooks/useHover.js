import React from "react";

function useHover() {
    const [hover, setHover] = React.useState(false)

    const mouseOver = () => {
      setHover(true)
    }
  
    const mouseOut = () => {
      setHover(false)
    }

    const attrs = {
        onMouseOver: mouseOver,
        onMouseOut: mouseOut
    }
    
    return [ hover, attrs]
}

export default useHover
