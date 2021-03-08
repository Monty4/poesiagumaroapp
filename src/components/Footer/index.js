import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import api from '../../api-client'

import './index.css'
import github from '../../images/icons/footer-github.gif'
import instagram from '../../images/icons/footer-instagram.gif'
import envelop from '../../images/icons/footer-envelop.gif'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    contact = () => {
        this.props.history.push(`/contact`)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <footer>
                <div className='footer'>
                    <div className='header'>
                        <div className='row row-footer'>
                            <div>
                                <a href="https://github.com/Monty4/" target='blank'><img src={github} alt="" title="Github" /></a>
                                <a href="https://www.instagram.com/monty_bcn/" target='blank'><img src={instagram} alt="" title="Instagram" /></a>
                                <a href=""><img src={envelop} alt="" title="Mail al desarrollador" onClick={(e) => {e.preventDefault(); this.contact()}} /></a>&nbsp;
                                V1.0
                            </div>
                            <div>Developed by Mario Montalbán</div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer)