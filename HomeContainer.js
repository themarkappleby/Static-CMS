import React from "react"
import { Link } from "react-router"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

const Home =  ({ posts }) => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <a href="/admin.html">Admin</a>
      </li>
      { posts && posts.node && posts.node.list &&
        posts.node.list.map((post) => (
          <li key={post.id}>
            <Link to={ `/blog/${ post.id }`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({ collection: "posts" }),
}))

export default HomeContainer
