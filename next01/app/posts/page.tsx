// 'use client'
// posts/page.tsx
import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import { getPosts } from '@/lib/getPosts'
import Link from 'next/link';



type Props = {}
/* type Params = {
  post  : {
    id : string
  }
} */



async function page({}: Props) {

  const data : Promise<any> = getPosts();
  const posts = await data;
  
  return (
    <div>
        Posts Page
        <br />
        Go to <Button href="/" linkname="home" />
        <div>
            {
              Object.values(posts).map((post : any) => <Link key={post.id} href={`/posts/${post.id}`}><h1>{post.title}</h1></Link>)
            }
        </div>
    </div>
  )
}







export default page