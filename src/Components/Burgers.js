import React from 'react'
import './Burgers.css'

export default function Burgers() {

  const burgers_menu = [
    {
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop',
      name: 'Classic Burger',
      price: '2300',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1760&auto=format&fit=crop',
      name: 'Cheeseburger',
      price: '2100',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2315&auto=format&fit=crop',
      name: 'Double Cheeseburger',
      price: '1900',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?q=80&w=1287&auto=format&fit=crop',
      name: 'Chicken Burger',
      price: '2400',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=1287&auto=format&fit=crop',
      name: 'Big Boss Burger',
      price: '1750',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1288&auto=format&fit=crop',
      name: 'King Burger',
      price: '2900',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2672&auto=format&fit=crop',
      name: 'Mega Burger',
      price: '1850',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=2330&auto=format&fit=crop',
      name: 'Burger Deluxe',
      price: '3100',
      baga: 'Lorem Ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1287&auto=format&fit=crop',
      name: 'Golden Burger',
      price: '2600',
      baga: 'Lorem Ipsum Dollar Sit',
    },
  ];

  return (
    <div className='burgers'>
      <div className="text">
        <h2>Our Menu</h2>
      </div>

      <div className="sales_menu">
        {burgers_menu.map((item, index) => (
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
}