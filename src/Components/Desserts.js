import React from 'react'
import './Desserts.css'

export default function Desserts() {

  const desserts_menu = [
    {
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1364&auto=format&fit=crop',
      name: 'Chocolate Cake',
      price: '2500',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1364&auto=format&fit=crop',
      name: 'Cheesecake',
      price: '2100',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2156&auto=format&fit=crop',
      name: 'Brownie',
      price: '1900',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1287&auto=format&fit=crop',
      name: 'Chocolate Lava Cake',
      price: '2400',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1287&auto=format&fit=crop',
      name: 'Chocolate Brownie',
      price: '1700',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=1282&auto=format&fit=crop',
      name: 'Nutella Pancakes',
      price: '2800',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1335&auto=format&fit=crop',
      name: 'Mango Dessert',
      price: '3100',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1593424718424-cf4d83f3def1?q=80&w=1287&auto=format&fit=crop',
      name: 'Banana Split',
      price: '1550',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1287&auto=format&fit=crop',
      name: 'Strawberry Cheesecake',
      price: '2700',
      baga: 'Lorem Ipsum Dollar Sit',
    },
  ]

  return (
    <div className='desserts'>
      <div className="text">
        <h2>Our Menu</h2>
      </div>

      <div className="sales_menu">
        {desserts_menu.map((item, index) => (
          <div className="sales" key={index}>
            <div className="img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="text_block">
              <h2>{item.name}</h2>
              <h3>{item.price} AMD</h3>
              <p>{item.baga}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};