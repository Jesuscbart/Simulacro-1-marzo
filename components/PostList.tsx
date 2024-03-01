import { FunctionComponent } from "preact";
import { Post } from "../types.ts";

const PostList: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div class="postlist">
      <h1>POSTS</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>Title: {post.title} </p>
            <p>Author: {post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;