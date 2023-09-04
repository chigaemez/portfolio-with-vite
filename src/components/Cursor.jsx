import React from 'react'
import AnimatedCursor from "react-animated-cursor"


const Cursor = () => {
  return (
    
      <AnimatedCursor
      
      innerSize={40}
      outerSize={40}
      color='122, 131, 211'
      outerAlpha={0.2}
      innerScale={0.9}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />

      
    
  )
}

export default Cursor
