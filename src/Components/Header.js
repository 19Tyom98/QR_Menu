import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const [activeIndex, setActiveIndex] = useState(null)

  const prod = ['Coffee', 'Breakfast', 'Burgers', 'Desserts', 'Drinks']

  return (
    <div className='header'>
      <header>
        <nav>
          <ul>
            <li>
              {prod.map((item, index) => (
                <div
                  key={index}
                  className="menu_block"
                  style={{
                    background: activeIndex === index ? "#4B2E2E" : "#F8F4E3",
                    color: activeIndex === index ? "#FFFFFF" : "#000000",
                  }}
                >
                  <NavLink
                    to={item === "Coffee" ? "/" : `/${item.toLowerCase()}`}
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "#4B2E2E",
                      textDecoration: "none"
                    })}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item}
                  </NavLink>
                </div>
              ))}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
