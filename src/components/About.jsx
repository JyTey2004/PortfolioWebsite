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
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
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
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
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
        I'm a Blockchain, Frontend, Backend Developer with expertise with cloud based applications on AWS and Oracle Cloud Infrastucture (OCI).
        My knowledge of the blockchain space is extensive, building decentralized applications on Ethereum, Moonbeam, Polkadot, and Solana.
        I have a strong understanding of the blockchain ecosystem and the technologies that drive it, attending multiple hackathons and conferences.
        My projects are listed below, feel free to reach out to me if you have any questions.
      </motion.p>

      {/* <div className='mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} icon={service.icon} index={index}/>
        ))}
        <Carousel />
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")