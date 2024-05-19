import React from 'react'
import './SelectStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'
import Maldives3 from '../../assets/maldives3.jpg'

import SelectsImg from '../Selectsimg/SelectsImg'


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
    </div>
  )
}

export default Selects