import React from 'react';
import Typography from '@material-ui/core/Typography';
import TagsBar from '../../../components/tagsBar';
import PostCards from '../../../components/postCards';

export default function Blog() {
  return (
    <div data-testid="blog-section">
      <Typography variant="h4">Recent Posts</Typography>
      <TagsBar />
      <PostCards />
    </div>
  );
}
