import {Component} from 'react'

import './index.css'

// const blogData = {
//   title: 'Blog Name',
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
//   avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//   author: 'Author Name',
//   content:
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// }

class BlogItemDetails extends Component {
  state = {blogData: {}}
  // step - 3
  //  componentDidMount() =>  getBlogItemData()
  // this path="/blogs/:id" i.e "id" is passed to BlogItemDetails as prop.
  // when component is rendered by Route, some additional props are passed like "match", "location", "history"
  // Match: the "match object" contains the information about the path from which the "component" is rendered.
  // get id
  // async/await fetch
  // update data to camelCase from snake_case notation.
  //  create state => then update setState
  // delete dummy data
  //   try to add Loader

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(data)

    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogData: updatedData})
    // console.log(updatedData)
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
