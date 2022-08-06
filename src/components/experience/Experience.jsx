import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="expereince__frontend">
          <h3>Frontend Development</h3>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>AWS Lambda</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expereince__details">
              <BsPatchCheckFill />
              <div>
                <h4>MSSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

        </div>
      </div>



    </section>
  )
}

export default Experience