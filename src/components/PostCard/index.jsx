import P from 'prop-types';
import './styles.css';

export const PostCard = ({ posts }) => (
  <div className="post">
    <img src={posts.cover} alt={posts.title} />
    <div className="post-content">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  posts: P.objectOf(
    P.shape({
      title: P.string.isRequired,
      body: P.string.isRequired,
      cover: P.string.isRequired,
    }),
  ),
};
