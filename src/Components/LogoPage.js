import React from 'react'
import './LogoPage.css'
import { SiCoffeescript } from "react-icons/si";
import { useTranslation } from 'react-i18next'

export default function LogoPage() {
  const { t } = useTranslation()
  return (
    <div className='logo_page'>
      <div className="logo">
        <h1><SiCoffeescript /></h1>
        <h2>{t('coffee_cafe')}</h2>
      </div>
    </div>
  )
}