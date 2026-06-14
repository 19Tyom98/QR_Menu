import React from 'react';
import './MenuCategory.css';
import { useTranslation } from 'react-i18next';

export default function MenuCategory({ items }) {
  const { t } = useTranslation();

  return (
    <div className='menu-category'>
      <div className="text">
        <h2>{t('our_menu')}</h2>
      </div>

      <div className="sales_menu">
        {items.map((item, index) => (
          <div className="sales" key={index}>
            <div className="img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="text_block">
              <h2>{t(item.name)}</h2>
              <h3>{item.price} {t('amd')}</h3>
              <p>{t(item.baga)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
