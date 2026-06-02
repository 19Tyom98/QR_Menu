import React from 'react'
import './Drinks.css'

export default function Drinks() {

  const drinks_menu = [
    {
      img : 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg',
      name : 'Orange Juice',
      price : '1200',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg',
      name : 'Virgin Mojito',
      price : '1400',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg',
      name : 'Pineapple Juice',
      price : '900',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/357577/pexels-photo-357577.jpeg',
      name : 'Tropical Mix',
      price : '1700',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/1148215/pexels-photo-1148215.jpeg',
      name : 'Tea',
      price : '2100',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg',
      name : 'Soda Water',
      price : '2500',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg',
      name : 'Orange Cocktail',
      price : '2700',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg',
      name : 'Blue Lagoon',
      price : '800',
      baga : 'Lorem Ipsum Dollar Sit',
    },
    {
      img : 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg',
      name : 'Strawberry Mojito',
      price : '1100',
      baga : 'Lorem Ipsum Dollar Sit',
    },
  ]

  return (
    <div className='drinks'>
      <div className="text">
              <h2>Our Menu</h2>
          </div>
          <div className="sales_menu">
          {
                drinks_menu .map(item => {
                  return <div className="sales">
                    <div className="img">
                      <img src={item.img} alt="#" />
                    </div>
                    <div className="text_block">
                        <h2>{item.name}</h2>
                        <h3>{item.price} AMD</h3>
                        <p>{item.baga}</p>
                    </div>
                  </div>
                })
          }
          </div>
    </div>
  )
}
