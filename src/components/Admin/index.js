import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import api from '../../api-client'
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            category: ''
        }
    }
    
    componentDidMount() {
        this.alt()
    }

    alt() {
        document.getElementById('top').style.height = (window.innerHeight-80) + 'px'
    }

    fillTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    fillText = (event) => {
        this.setState({ text: event.target.value })
    }

    fillCategory = (event) => {
        this.setState({ category: event.target.value })
    }
    
    newPoem(title,text,category) {
        api.newPoem(title,text,category)
        .then(
            this.setState({ title: '', text:'', category: '' })
        )
    }

    render() {
        return (
            <div className='container top'>
                <div id='top' className={this.state.trackClass}>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12'><textarea id='title' placeholder='Titulo' cols='80' rows='1' onChange={this.fillTitle} /></div>
                            <div className='col-12'><textarea id='text' placeholder='Texto' cols='80' rows='20' onChange={this.fillText} /></div>
                            <div className='col-12'><textarea id='category' placeholder='Id Categoria' cols='80' rows='1' onChange={this.fillCategory} /></div>
                            <input type="button" value="Nuevo" onClick={(e) => { e.preventDefault(); this.newPoem(this.state.title,this.state.text,this.state.category)}} />
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default withRouter(Home)