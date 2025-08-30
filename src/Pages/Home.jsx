import React from 'react'
import Products from '../Componants/Products/Products'
import ProductData from '../Componants/Products/ProductData'


function Home() {
  return (
    <>
    <div className=' flex flex-wrap gap-4 max-w-[1580px] mx-auto  mt-20 justify-center overflow-x-hidden'>
     
      {ProductData.map((product) => (
        <Products key={product.id} product={product} />
      ))}
     
    </div>
    </>
  )
}

export default Home