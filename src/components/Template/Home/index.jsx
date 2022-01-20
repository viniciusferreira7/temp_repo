import React, { Component } from 'react'

import './styles.css'

import { Posts } from '../../Posts'
import { loadPosts } from '../../../util/load-posts'
import { Button } from '../../Button'
import { TextInput } from '../../TextInput'

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state

    const postsAndPhotos = await loadPosts()

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {

    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target

    this.setState({ searchValue: value })

  }

  render() {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state

    const morePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue &&
            <>
              <h1>Search Value : {searchValue}</h1>
            </>
          }

          <TextInput handleChange={this.handleChange} searchValue={searchValue} />
        </div>

        {filteredPosts.length > 0 &&
          <Posts posts={filteredPosts} />
        }

        {filteredPosts.length === 0 &&
          <p>Não exitem posts...</p>
        }

        <div className="button-container">
          {!searchValue &&
            <Button
              onClick={this.loadMorePosts}
              text="Load more posts"
              disabled={morePosts} />}
        </div>
      </section>
    )
  }
}

export default Home