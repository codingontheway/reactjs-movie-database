import React, { Component } from 'react'
import {movieList} from '../actions'
import { connect } from 'react-redux'
class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ''}
    }
    
    
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.movieList(this.state.term)
        this.setState({term: ''})
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }
    
    render() {
        return(
            <div className="row">
                <img src='https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png' alt='logo' className="logo-img" />
                <form onSubmit={this.onFormSubmit} className=' col-md-3  offset-md-8 input-mutated'>
                    <input 
                        placeholder='Search A Movie'
                        className='form-control search'
                        value={this.state.term}
                        onChange = {this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}


export default connect(null, { movieList })(SearchBar)