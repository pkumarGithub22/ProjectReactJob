import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className="navbar">
    <div className="navbarInner">
    <div className="navLogo">
      <img src="assets/Group 36901.png" alt="" />
    </div>
    <div className="navList">
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Offering</a>
      </li>
      <li>
        <a href="">Our Team</a>
      </li>
      <li>
        <a href="">Contact Us</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
    </div>
    <div className="btn">
      <button>Register Now</button>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav
