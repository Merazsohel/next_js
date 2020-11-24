import React, {Component} from 'react';
import Link from 'next/link';
import styles from "../../styles/Home.module.css";

export default function Posts({posts}) {
    return <ul>
        {posts.map((post) => {
            return <li key={post.id}>
                <h3> {post.title} </h3>
                <p>{post.body}</p>
                <Link href="/posts/[id]" as={"/posts/" + post.id}>
                    <button className={styles.button}>Read More</button>
                </Link>
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
