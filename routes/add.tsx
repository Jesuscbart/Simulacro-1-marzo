import { FreshContext, Handlers } from "$fresh/server.ts";
import AddPost from "../components/AddPost.tsx";
import PostModel from "../db/Post.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        title: form.get("title"),
        author: form.get("author"),
        content: form.get("content"),
      };

      await PostModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddPost />
    </div>
  );
};

export default Page;