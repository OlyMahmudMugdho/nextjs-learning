import { getPostById } from "@/lib/getPostById";
import { getPosts } from "@/lib/getPosts";
import React, { Suspense } from "react";
import Post from "./components/Post";

type Props = {};

type Params = {
  params : {
    postid : string
  }
}


async function page({ params: { postid } }: Params) {
  // throw new Error("fjfjh");

  const data = getPostById(postid);
  const post : any = await data;
  return (
    <div>
      individual page
      <Suspense>
        <Post post={post} />
      </Suspense>
    </div>
  );
}



export async function generateStaticParams() {
  const data : any = getPosts();
  const posts = await data;
   
  return posts.map((post : any) => post.id);
}

export default page;