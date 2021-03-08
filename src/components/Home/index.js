import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import loading from '../../images/icons/loading.gif'
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
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
                <header className='home-header'>
                    <h2>A la memoria de Gustavo Martínez Rodríguez</h2>
                </header>
            </div>
        )
    }
}

export default withRouter(Home)