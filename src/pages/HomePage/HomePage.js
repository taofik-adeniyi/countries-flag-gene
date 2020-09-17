import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './HomePage.scss'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import FlagCards from '../../components/FlagCards/FlagCards'
import Pagination from '../../components/Pagination/Pagination'

function Homepage() {
  
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(20)
  
  const history = useHistory()

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get('https://restcountries.eu/rest/v2/all')
        setPosts(res.data)
        setLoading(false)
    }

    fetchPosts()
  },[])

    return (
        <React.Fragment>
          <NavBar />
          <div>
            <Search>
              <Filter />
            </Search>
          </div>
          <div className="flag-card-wrapper">
            <FlagCards posts={currentPosts} loading={loading} history={history} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </div>
        </React.Fragment>
    )
}

export default Homepage
