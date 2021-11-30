import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

const StyledHeader = styled.h1`
height: 138px;
background: #202020;
color: #ffffff; 
display: flex;
justify-content: left;
align-items: stretch;
`

export default function Projects() {
    return (
      <div className={styles.container}>
        <Head>t
          <title>Illini Blockchain</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <StyledHeader>Welcome to the Projects Page</StyledHeader>       
  
      </div>
    )
  }