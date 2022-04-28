import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import './Header.css'

function Header() {
    return (
        <div className={'header'}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={(isActive) => isActive ? 'lk' : 'active'}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={(isActive) => isActive ? 'lk' : 'active'}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={(isActive) => isActive ? 'lk' : 'active'}>junior+</NavLink>
            <div className={'block'}/>
        </div>
    )
}

export default Header
