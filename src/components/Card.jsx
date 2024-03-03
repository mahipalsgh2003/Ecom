import React from 'react'

export default function Card({data}) {
  return (
    <div className='card'>
      <h3>{data.title}</h3>
      <img src="product.png" alt="product name" />
        <p>{data.price}</p>
        <p>{data.description}</p>
        <button>Buy Now</button>
    </div>
  )
}
