import React from 'react'
import './FlagCards.scss'
// import { useHistory } from 'react-router-dom'
function FlagCards({posts, loading, history}) {
    
    if (loading) {
        return <h1>Loading ...</h1>
    }

    // const history = useHistory()

    return (
        <React.Fragment>
            {posts.map(post =>
                <div 
                onClick={() => history.push(`/details/${post.name}`)}
                className="flag-container" key={post.latlng}>
                <img className="flag-image" src={post.flag} alt="" />
                <div className="holder">
                    <div className="country-name">{post.name}</div>
                    <div className="list-info">
                        <div className="population"><small>Population : {post.population}</small></div>
                        <div className="region"><small>Region : {post.region} </small></div>
                        <div className="capital"><small>Capital : {post.capital}</small></div>
                    </div>
                </div>
                </div>
            )}
            {/* <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} /> */}
        </React.Fragment>
    )
}

export default FlagCards
