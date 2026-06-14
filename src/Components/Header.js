import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(null)

  const prod = ['Coffee', 'Breakfast', 'Burgers', 'Desserts', 'Drinks']

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

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
                    {t(item)}
                  </NavLink>
                </div>
              ))}
            </li>
          </ul>
        </nav>
        <div className="language-selector">
          <button onClick={() => changeLanguage('hy')} className={i18n.language === 'hy' ? 'active' : ''}>AM</button>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
          <button onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? 'active' : ''}>RU</button>
        </div>
      </header>
    </div>
  )
}
