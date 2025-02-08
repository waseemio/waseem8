import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image
        src="/2.jpg"  // Image ka path jo aapne public folder mein daala tha
        alt="My Image Asif Ali"
        width={1200}  // Aap apne image ke size ke according adjust kar sakte hain
        height={630} // Aap apne image ke size ke according adjust kar sakte hain
      />
    </div>
  )
}

export default Home

