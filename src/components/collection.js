import React from 'react'
import SearchBar from '../containers/search_bar'

export default (props) => {
    return(
        <div className="bg" style={{ backgroundColor: '#000', backgroundImage: `url(${props.background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <SearchBar />
            <div className='cards'>
                <div className="card">
                    <img src={props.poster} alt={props.title} />
                </div>
                <div className="text">
                    <h1>{props.title}</h1>
                    <h2>Details</h2>
                    <p className="details" >{props.details}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Votes</h2>
                            <p>{props.vote} / 10</p>
                        </div>
                        <div className="col-md-6">
                            <h2>Release Date</h2>
                            <p>{props.releaseDate}</p>
                        </div>

                        </div>
                </div>
            </div>
        </div>
    )
}