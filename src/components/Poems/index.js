import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../api-client'
import TextareaAutosize from 'react-autosize-textarea'
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import '../Menubar/menubar.css'
import './index.css'

import { Link } from "react-router-dom"
import { TopbarData } from '../Menubar/topbarData.js'

import { IconContext } from 'react-icons'

class Poems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            categories: [],
            poems: [],
            show: false,
            idcategory: '',
            idpoem: ''
        }
    }

    componentDidMount() {
        this.alt()
        api.categories()
        .then( categories => {
            this.setState({ categories: categories.data })
        })
    }

    alt() {
        document.getElementById('top').style.height = (window.innerHeight-160) + 'px'
    }

    showTopbar = (id) =>  {
        api.poems(id)
        .then( poems => {
            this.setState({ poems : poems.data })
        })
        this.setState({ show: true, idcategory: id })
    }

    hideTopbar = () =>  {
        this.setState({ show: false, idcategory: '', idpoem: '', poems: undefined })
    }

    showPoem = (id) => {
        this.setState({ idpoem: id })
    }

    back() {
        this.setState({ idpoem: ''})
    }

    render() {
        return (
            <div id='top' className='home-container-trans'>
                <ul>
                    {
                        this.state.categories.map(category =>{
                            return(
                                <li><span className='item-center' onClick={ (e) => { e.preventDefault(); this.state.show ? this.hideTopbar(category._id) : this.showTopbar(category._id) } }>{ category.title }</span></li>
                            )
                        })
                    }
                </ul>
                <section>
                    <nav className={this.state.show ? 'menu-menu active' : 'menu-menu' }>
                        <ul className='menu-menu-items'>
                            <li className='menu-toggle'>
                                {
                                    !this.state.idpoem
                                    ?
                                    <Link to='#' className='menu-menu-bars' onClick={ (e) => { e.preventDefault(); this.hideTopbar() } }>
                                        <AiIcons.AiOutlineClose />
                                    </Link>
                                    :
                                    <Link to='#' className='menu-menu-bars' onClick={ (e) => { e.preventDefault(); this.back() } }>
                                        <BiIcons.BiArrowBack />
                                    </Link>
                                }
                            </li>
                            <div className='row'>
                                <div className='col-12'>
                                    {
                                        this.state.poems && !this.state.idpoem
                                        ?
                                        this.state.poems.map((item, index) => {
                                            return (
                                                <li className='list'><span className={item.cName} onClick={ (e) => { e.preventDefault(); this.showPoem(item._id) } }>{ item.title }</span></li>
                                            )
                                        })
                                        :
                                        this.state.poems && this.state.idpoem
                                        ?
                                        this.state.poems.map(poem => (
                                            poem._id === this.state.idpoem
                                            ?
                                            <div>
                                                <h3>{poem.title}</h3>
                                                <div className='description'>
                                                    <TextareaAutosize className='swal2-textarea'>{ this.text = poem.text }</TextareaAutosize>
                                                </div>
                                            </div>
                                            :
                                            undefined
                                        ))
                                        :
                                        undefined
                                    }
                                </div>
                            </div>
                        </ul>
                    </nav>
                </section>
            </div>
            
        )
    }
}

export default withRouter(Poems)