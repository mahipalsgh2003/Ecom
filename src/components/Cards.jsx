import React from 'react'
import Card from '../components/Card.jsx'

export default function Cards({products}) {
  return (
    <div className='cards'>
       <div className="card-row">
        {
        products.map(data => {
         <Card data={data}/>
         cosole.log(data)
        })
        }
       </div>
    </div>
  )
}
