import React from 'react'
import './Breakfast.css'

export default function Breakfast() {

  const breakfast_menu = [
    {
      img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1760&auto=format&fit=crop',
      name: 'Omelette',
      price: '2500',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=1847&auto=format&fit=crop',
      name: 'Scrambled Eggs',
      price: '1900',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1287&auto=format&fit=crop',
      name: 'Pancakes',
      price: '2300',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1676929360029-65fadc001ff7?q=80&w=1287&auto=format&fit=crop',
      name: 'Croissant',
      price: '2700',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1504708706948-13d6cbba4062?q=80&w=2670&auto=format&fit=crop',
      name: 'Chia Pudding',
      price: '3100',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2670&auto=format&fit=crop',
      name: 'Toast with Butter',
      price: '1450',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1581559178851-b99664da71ba?q=80&w=1286&auto=format&fit=crop',
      name: 'Strawberry Yogurt Bowl',
      price: '1650',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1692193554212-6a27903ab9c4?q=80&w=2670&auto=format&fit=crop',
      name: 'French Toast',
      price: '2200',
      baga: 'Lorem ipsum Dollar Sit',
    },
    {
      img: 'https://images.unsplash.com/photo-1594627882045-57465104050f?q=80&w=1364&auto=format&fit=crop',
      name: 'Waffles',
      price: '1850',
      baga: 'Lorem ipsum Dollar Sit',
    },
  ]

  return (
    <div className='breakfast'>
      <div className="text">
        <h2>Our Menu</h2>
      </div>

      <div className="sales_menu">
        {breakfast_menu.map((item, index) => (
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
