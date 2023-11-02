import React from 'react'
import { useState } from 'react'
import Arrow from '../assets/Arrow_drop_up.svg'
import Arrow_Close from '../assets/Arrow_drop_right.svg'

const Component = ({name, icon, subcategories, activo}) => {

    const [active, setActive] = useState(activo)

    const handleActivate = () =>{
        setActive(!active)
    }
  return (
    <div id='component'>
        {icon !== undefined ? <img src={icon} id='icon_component' alt='icon' />: <></>}
        
        <div id='name_component'>{name}</div>
        
        {subcategories !== undefined ?
            active? 
                <img onClick={handleActivate} src={Arrow} alt='arrow' id='arrow'/> :
                <img onClick={handleActivate} src={Arrow_Close} alt='arrow' id='arrow'/> 
            :<></>
        }
        
        <div id='subcategories'>{active ? subcategories.map((el => <Component key={el} name='Lorem Ipsum'/>)):''}</div>
    </div>
  )
}

export default Component