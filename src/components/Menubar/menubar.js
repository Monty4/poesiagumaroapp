import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import { Link } from "react-router-dom"
import { TopbarData } from './topbarData'
import './menubar.css'
import { IconContext } from 'react-icons'

function Menubar() {
    const [topbar, setTopbar] = useState(false)
    const showTopbar = () => setTopbar(!topbar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        {/* <div className='menubar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={ showTopbar } />
            </Link>
        </div> */}
        <nav className={topbar ? 'menu-menu active' : 'menu-menu' }>
            <ul className='menu-menu-items' onClick={ showTopbar }>
                <li className='menubar-toggle'>
                    <Link to='#' className='menu-menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {
                    TopbarData.map((item, index) => {
                        return (
                            <li key={index} className={ item.cName }>
                                <Link to={ item.path }>
                                    { item.icon }
                                    <span>{ item.title }</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default withRouter(Menubar)
