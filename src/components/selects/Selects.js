import React from 'react'
import './SelectStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'
import Maldives3 from '../../assets/maldives3.jpg'

import SelectsImg from '../Selectsimg/SelectsImg'

import audioFile from '../../assets/birds-19624.mp3';



function Selects() {
  return (
    <div name='views' className='selects'>
        <div className="container">
            <SelectsImg bgImg={BoraBora} text='BoraBora' />
            <SelectsImg bgImg={BoraBora2} text='Emerlad Bay' />
            <SelectsImg bgImg={Maldives} text='Maldives' />
            <SelectsImg bgImg={Maldives2} text='Grenada' />
            <SelectsImg bgImg={Maldives3} text='Barbados' />
            <SelectsImg bgImg={KeyWest} text='Key West' />
        </div>
        <audio autoPlay loop muted={true}>
                <source src={audioFile} type="audio/mp3" />
        </audio>
    </div>
  )
}

export default Selects