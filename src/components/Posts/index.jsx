import './styles.css'

import { PostCard } from '../PostCard'

export const Posts = ({ posts }) => (
  <div className='posts'>
    {posts.map(posts => (
      <PostCard key={posts.id} posts={posts} />
    ))}
  </div>
)