import React from 'react'
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import { Link } from "react-router"

const BlogPost = ({ page }) => (
  <div>
    <Link to={ '/'}>Back</Link>
    {page.node && (
      <article>
        <h1>{ page.node.title }</h1>
        <BodyRenderer>{ page.node.body }</BodyRenderer>
      </article>
    )}
  </div>
)

const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))

export default BlogPostContainer
