import React from 'react'
import styled from 'styled-components'
import { Arvo } from "@next/font/google";


const StyledGradient = styled('div')({
    "@keyframes gradient": {
        "0%":{
            backgroundPosition: "0% 50%",
        },
        "50%":{
            backgroundPosition: "100% 50%"
        },
        "100%":{
            backgroundPosition: "0% 50%"
        },
    },
    background: "linear-gradient(-45deg, #ffbd44, #FF605C, #23a6d5, #00CA4E)",
	backgroundSize: "400% 400%",
	animation: "gradient 15s ease infinite",
	height: "50px",
    fontWeight: 'bold',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
    
})

const ArvoFont = Arvo({
    subsets: ['latin'],
    weight: '400'
});

const ComingSoonHeader = () => {
  return (
    <StyledGradient className={ArvoFont.className}>Something Awesome Is Coming...</StyledGradient>
  )
}

export default ComingSoonHeader