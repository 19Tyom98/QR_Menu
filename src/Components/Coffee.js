import React from 'react'
import './Coffee.css'

export default function Coffee() {

  const coffee_menu = [
    {
      img: 'https://images.pexels.com/photos/8616015/pexels-photo-8616015.jpeg',
      name: 'Espresso',
      price: '800',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=900&auto=format&fit=crop',
      name: 'Americano',
      price: '1000',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=3274&auto=format&fit=crop',
      name: 'Cappuccino',
      price: '900',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=2600&auto=format&fit=crop',
      name: 'Latte',
      price: '1200',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1287&auto=format&fit=crop',
      name: 'Macchiato',
      price: '1300',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?q=80&w=1287&auto=format&fit=crop',
      name: 'Flat White',
      price: '1800',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1287&auto=format&fit=crop',
      name: 'Mocha',
      price: '700',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?q=80&w=1287&auto=format&fit=crop',
      name: 'Caffè Breve',
      price: '1500',
      baga: 'lorem ipsum dolar sit'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1671559021551-95106555ee19?q=80&w=1287&auto=format&fit=crop',
      name: 'Iced Coffee',
      price: '1100',
      baga: 'lorem ipsum dolar sit'
    },
  ]

  return (
    <div className='coffee'>
      <div className="text">
        <h2>Our Menu</h2>
      </div>

      <div className="sales_menu">
        {coffee_menu.map((item, index) => (
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
