import './Partner.css'
import React from 'react'
import Paperz from '@images/paperz.svg'
import Dorfus from '@images/dorfus.svg'
import Martino from '@images/martino.svg'
import Square from '@images/square.svg'
import Gobona from '@images/gobona.svg'

const Partner = () => {
  return (
    <section className="logo-partners">
        <div className="container">
            <img src={Paperz} />
            <img src={Dorfus} />
            <img src={Martino} />
            <img src={Square} />
            <img src={Gobona} />   
            </div>
    </section>
  )
}

export default Partner