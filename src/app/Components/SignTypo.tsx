import React from 'react'
import dish from "../assets/pngwing.png"
import { Image } from 'antd'
import '../signin/login.css'

export default function SignTypo() {
  return (
    <>
    
     <div style={{ display:"flex", flexDirection:"column" , alignItems:"center", justifyItems:"center" }} className='typo-part'>
      <span className='heading-style typo-part'>CraveFeed</span>
      
      <img src={dish.src} className='dish-style typo-part' alt='dish'></img>
   </div>
   
 
    </>
  )
}
