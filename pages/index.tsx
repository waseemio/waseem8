import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Image wrapped inside a link */}
      <a href="https://deceivedaisle.com/b2n0cj0ppm?key=ff762981bb659c924c5d768535acfc66" target="_blank" rel="noopener noreferrer">
        <Image
          src="/2.jpg"  // Image ka path jo aapne public folder mein daala tha
          alt="My Image Asif Ali"
          width={1200}  
          height={630}  
          style={{ cursor: 'pointer' }}
        />
      </a>
    </div>
  );
}

export default Home;
