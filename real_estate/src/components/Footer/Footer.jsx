import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
<span className="f-wrapper">
<div className="paddings innerWidth flexCenter f-container">
    <div className="flexColStart f-left">
        <img src="./assets/trec.png" alt="logo" width={120} />
        <span className="secondaryText">
            Our Vision is to make all people find<br/> The <span style={{color:"red"}}>BEST</span> Place to live in Jordan
        </span>
    </div>
    <div className="flexColStart f-right">
        <span className='primaryText'>Information</span ><span className="secondaryText"> Tabarbour, Amman ,Jordan</span>
        <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
        </div>
    </div>
</div>
</span>  
)
}

export default Footer