import React from 'react'
import { useCharContext } from './utils/global.context'
import "../Styles/Footer.css"

const Footer = () => {

  const {state } = useCharContext()

  return (
    <footer className={state.theme}>
        <img src="./images/DH.png" alt='DH-logo' className='digitalHouse' />
        <div>
        <img src="./images/ico-facebook.png" alt='Facebook'/>
        <img src="./images/ico-instagram.png" alt='Instagram'/>
        <img src="./images/ico-tiktok.png" alt='Tiktok'/>
        <img src="./images/ico-whatsapp.png" alt='Whatsapp'/>
        </div>
    </footer>
  )
}

export default Footer