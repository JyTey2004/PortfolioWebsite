import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { CarsCanvas } from './canvas'
import TypeWriterEffect from 'react-typewriter-effect';


const Hero = () => {
  return (
    <section className='relative w-full h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div> */}
        <div className='mt-20'>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Poppins',
              color: '#fff', 
              fontWeight: 900, 
              fontSize: '100px', 
              lineHeight: '98px', 
              marginTop: '2px', 
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'Welcome',
              '欢迎',
              'ようこそ',
              '환영합니다',
              'Добро пожаловать',
              'Bienvenue',
              'Välkommen',
              'أهلاً وسهلاً',
              'Hoş geldiniz'
            ]}
            multiTextLoop={true}
            multiTextDelay={1000}
            typeSpeed={400}
          />
          {/* <h1 className={`${styles.heroHeadText}`}>
            <span className='text-[#915eff]'>Welcome</span>
          </h1> */}
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            My portfolio website
            <br className='sm:block hidden'/>
            I hope you enjoy your stay
          </p>
        </div>
      </div>
      <CarsCanvas />
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex- justify-center items-start p-2'>

          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero