import React from 'react'
import Component from './Component'
import Home from '../assets/Home.svg'
import Question from '../assets/question_mark.png'
import Hire_me from '../assets/hire_me.png'
import Applicant from '../assets/Applicant.png'
import Category from '../assets/Category.svg'
const MainContent = () => {
  return (
    <div id='mainContent'>
        <Component name="Home" icon={Home} />
        <Component name="How it works" icon={Question} />
        <Component name="Marketplace" icon={Hire_me} />
        <Component name="For Talents" icon={Applicant} />
        <Component name="Categories" icon={Category} subcategories={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum",]} />
    </div>
  )
}

export default MainContent