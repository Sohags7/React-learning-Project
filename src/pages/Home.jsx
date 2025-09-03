import React from 'react'
import ActionMovie from '../Componants/ActionMovie';
import AnimationMovie from '../Componants/AnimationMovie';
import DramaMovie from '../Componants/DramaMovie';
import Adventure from '../Componants/Adventure';
import SciMovie from '../Componants/Sci-FI'

function Home() {
  return (
    <>
     <ActionMovie/>
     <AnimationMovie/>
     <DramaMovie/>
     <Adventure/>
     <SciMovie/>
    
    </>
  )
}

export default Home