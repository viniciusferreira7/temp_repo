import P from 'prop-types';
import './styles.css';

import { PostCard } from '../PostCard/index';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((posts) => (
      <PostCard key={posts.id} posts={posts} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number,
    }),
  ),
};
