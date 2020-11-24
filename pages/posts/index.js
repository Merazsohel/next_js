import React, {Component} from 'react';
import Link from 'next/link';

export default function Posts({posts}) {
    return <ul>
        {posts.map((post) => {
            return <li key={post.id}>
                <h3>
                    <Link href="/posts/[id]" as={"/posts/" + post.id}>
                        {post.title}
                    </Link>
                </h3>
                <p>{post.body}</p>
            </li>
        })}
    </ul>
}

//Static Render
/*export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Post component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}*/

//Server Side Render
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Post component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
