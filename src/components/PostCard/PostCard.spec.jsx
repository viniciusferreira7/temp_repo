import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postsCardPropsMock } from './postsCardPropsMock';

const props = postsCardPropsMock;

describe('<PostsCard/>', () => {
  it('should render the PostsCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.posts.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.posts.title })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: props.posts.title })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
