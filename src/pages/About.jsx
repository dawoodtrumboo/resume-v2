import React from 'react'
import { faLinkedin, faXTwitter, faGithub, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signDark,signLight } from '../assets'
import { CustomButton, FooterSection } from '../components'

const About = (props) => {
  return (
    <div className='w-full mt-10'>
        
        <div className='w-full flex flex-col items-start space-y-2'>
          <h1 className='text-[48px] w-2/3 text-white font-bold leading-none'>A little bit about me</h1>
          <p className=' '>Who I am and what I do.</p>
        </div>

        <hr className='w-[200%] border-gray-600 my-5 -m-20'  />

        <div className='font-light space-y-4 md:w-[60%]'>
          <div>
            <h2 className='uppercase font-bold'>Who I Am</h2>
            <p>I’m <em className={`font-bold ${props.lightTheme ? '': 'text-white'}`}>Dawood</em> a multi-disciplinary 
            front-end engineer based in Kashmir, India.</p>
          </div>

          <div>
          <h2 className='uppercase font-bold'>What i do</h2>
          <p>As a part-time UI Developer at PySync, a dynamic service-based startup, my mission is to craft immersive and aesthetically pleasing websites that elevate user experiences. I have embarked on a journey to enhance our web presence by migrating our existing simple HTML and CSS-based website to the modern and powerful ReactJS framework.
            My role is multi-faceted, encompassing various responsibilities to ensure a top-notch user experience. Leveraging my expertise in HTML, CSS, and JavaScript, I meticulously create user interfaces that seamlessly integrate with ReactJS. </p>
          </div>

          <div>
          <h2 className='uppercase font-bold'>What i did</h2>
          <p>Before delving into the realm of front end development, I spent 1+ year going through courses and creating public and private projects. This has equipped me with a keen eye for aesthetics and a deep understanding of user-centered designs. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.</p>
          </div>
        </div>

        <div className='my-20'>
            <h1 className='font-bold uppercase'>Contact</h1>
            <ul className='p-2'>
              <a href='mailto:idawoodtrumboo@gmail.com' target='_blank'><li className='space-x-2'> <FontAwesomeIcon icon={faEnvelope}/><spn>Reach me out via gmail</spn></li></a>
              <a href='https://twitter.com/dmax_eth' target='_blank'><li className='space-x-2'> <FontAwesomeIcon icon={faXTwitter}/><span>Follow me on Twitter</span></li></a>
              <a href='https://github.com/dawoodtrumboo'  target='_blank'><li className='space-x-2'> <FontAwesomeIcon icon={faGithub}/><span>Check out my work on GitHub</span></li></a>
              <a href='https://www.linkedin.com/in/dawoodtrumboo/' target='_blank'> <li className='space-x-2'> <FontAwesomeIcon icon={faLinkedin}/><span>Connect with me on Linkedin</span></li></a>
            </ul>
        </div>

        <div className='md:flex md: justify-between md:w-full border-2 border-red-500 '>
            <div>
            <h1>Let's build something great,</h1>
            <img  src={props.lightTheme? signDark : signLight } className='w-[280px] -ml-14 my-3' />
            </div>
            <div className='mt-10 w-full flex flex-col  border-2 border-red-500  items-center  mb-10 md:flex-row md:justify-between md:mt-[100px]'>
      <CustomButton name="Get in touch"
      />
     </div>
        </div>
        

     <hr className='w-[200%] border-gray-600 my-5 -m-20'  />

     <FooterSection
          style={props.gradient}
          lightTheme = {props.lightTheme}
     />

    </div>
  )
}

export default About