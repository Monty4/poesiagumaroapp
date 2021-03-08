import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import loading from '../../images/icons/loading.gif'
import './index.css'

import { slide as Menu } from 'react-burger-menu'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    showSettings (event) {
        event.preventDefault()
    }

    componentDidMount() {
        this.alt()
        // this.timer()
    }

    alt() {
        document.getElementById('top').style.height = (window.innerHeight-80) + 'px'
    }

    render() {
        return (
            
            <div id='top' className='home-container'>
                <header>
                    <h1>Poesiagumaro</h1>
                    <h2>A la memoria de Gustavo Martínez Rodríguez</h2>
                </header>
            </div>
        )
    }
}

export default withRouter(Home)