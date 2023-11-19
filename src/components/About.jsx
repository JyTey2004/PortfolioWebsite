import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import SectionWrapper from '../hoc'

import '../index.css'

import Carousel from './carousel'


const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75 )}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 500,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center' 
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Hi.
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17-px] max-w-3xl leading=[30-px]">
        I am a full-stack web developer with a passion for creating beautiful, responsive websites and mobile apps. I am currently a studying at Singapore Polytechnic and working as an intern. I have experience working with React, Node.js, Express, MongoDB, and more. I am always looking to learn new technologies and improve my skills. I am currently looking for a position as a full-stack developer or Data analytics intern.
      </motion.p>

      <div className='mt-20'>
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} icon={service.icon} index={index}/>
        ))} */}
        <Carousel />
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")