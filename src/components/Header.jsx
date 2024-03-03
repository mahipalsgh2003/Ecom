import React from 'react'

export default function Header() {
  return (
    <div>
          <header>
        <nav>
            <img src="logo.png" alt="logo" class="logo"/>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="Search something here"/>
                <button className="btn">Search</button>
                <div className='control-btn'>
                <button className='login-btn'>login</button>
                <button className='signup-btn'>signup</button>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}
