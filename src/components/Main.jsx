import React , {useState, useEffect} from 'react'
import Cards from '../components/Cards.jsx'
import SimpleSlider from '../components/Slider.jsx'

export default function Main() {
  const [products , setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await fetch('http://localhost:3000/products')
        if(!response.ok){
          throw new Error('An error occured')
        }
        const result = response.json()
        console.log(result)
        setProducts(result)
      }
      catch(error){
        console.error('Error fetching data:', error);
      }finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if(products!=null){
  return (
    <div>
        <SimpleSlider></SimpleSlider>
      <main>
<div class="container">
   <Cards products={products}/>
   <Cards products={products}/>
   <Cards products={products}/>
   <Cards products={products}/>
   <Cards products={products}/>
   <Cards products={products}/>
</div>
    </main>
    </div>
  )}
}
