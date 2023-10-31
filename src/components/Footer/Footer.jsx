import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <>
   <div className="footer">
    <div className="first_div">
        <h1>Stay Up To Date</h1>
        <form action="#">
            <input type="text" placeholder="links.com//you started" />
            <button>➡️</button>
          </form>
         <p>Sign up for product updates.</p>
    </div>
    <div className="second_div">
        <h1>🔗</h1>
        <ul>
            <li>Terms Of Services</li>
            <li>cookie policy</li>
            <li>Privacy policy</li>
            <li>contact</li>
            <li>FaQ</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className="third_div">
        <p>© Liinks, LLC. All Rights Reserved</p>
    </div>
   </div>
   </>
  )
}

export default Footer
