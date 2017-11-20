import React, { Component} from 'react'
import { connect } from 'react-redux';
import Collection from '../components/collection'

class Data extends Component {
    
    errorHandeling = () => {
        return this.props.movies.map(this.dataRender)
    }

    dataRender = (movie) => { 
        if(movie.results[0] === undefined){
            return this.errorHandeling()
        }else{
            const poster = `https://image.tmdb.org/t/p/w500${movie.results[0].poster_path}`
            const background = `https://image.tmdb.org/t/p/w500${movie.results[0].backdrop_path}`
            const title = movie.results[0].title
            const vote = movie.results[0].vote_average
            const details = movie.results[0].overview
            const releaseDate= movie.results[0].release_date
            return (
                <Collection poster = {poster} background = {background} title = { title } vote = {vote} details = {details} releaseDate = {releaseDate} />                        
            )
        }
    }


    render() {
        return(
            <div>
                {this.props.movies.map(this.dataRender)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { movies : state.movies }
}

export default connect(mapStateToProps)(Data)