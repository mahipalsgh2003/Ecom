import React from 'react'
import Cards from '../components/Cards.jsx'
import SimpleSlider from '../components/Slider.jsx'

export default function Main() {
  return (
    <div>
        <SimpleSlider></SimpleSlider>
      <main>
<div class="container">
   <Cards/>
   <Cards/>
   <Cards/>
   <Cards/>
   <Cards/>
</div>
    </main>
    </div>
  )
}
