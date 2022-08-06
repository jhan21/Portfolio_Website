import React from 'react'
import './about.css'
import SELF from '../../assets/self-1.jpg'
import {FaAward} from 'react-icons/fa'
import {RiStackFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className = "about__me">
          <div className = "about__me-image">
            <img src={SELF} alt="About Image" />
          </div>
        </div>
      

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <RiStackFill className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sit reiciendis est quis? Quod consequuntur earum ducimus, sequi incidunt fuga repudiandae dolor, nesciunt, blanditiis deleniti doloribus optio velit laboriosam amet?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About