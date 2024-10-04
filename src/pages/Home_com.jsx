import React from 'react'
import Achievements from "../Components/Achievements"
import Faq from "../Components/Faq"
import Hero from "../Components/Hero"
import Next_Gen from "../Components/Next_Gen"
import Recipe from "../Components/Recipe"
import Solution from "../Components/Solution"

const Home_com = () => {
  return (
    <div>
    <Hero/>
    <Recipe/>
    <Next_Gen/>
    <Achievements/>
    <Solution/>
    <Faq/>
    </div>
  )
}

export default Home_com