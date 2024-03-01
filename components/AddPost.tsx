import { FunctionComponent } from "preact";

const AddPost: FunctionComponent = () => {
  return (
    <form class="AddPost" action="/add" method="post">
      <h1>ADD POST</h1>
      <p>Title</p>
      <input type="text" name="title" placeholder="Title" />
      <p>Author</p>
      <input type="text" name="author" placeholder="Author" />
      <p>Content</p>
      <input type="text" name="content" placeholder="Content" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;