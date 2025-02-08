import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Image ko ek <a> tag ke andar wrap kiya gaya hai */}
      <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/2.jpg"  // Image ka path jo aapne public folder mein daala hai
          alt="My Image Asif Ali"
          width={1200}  
          height={630} 
        />
      </a>
    </div>
  )
}

export default Home


