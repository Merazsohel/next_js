import React from "react";
import Post from "./components/Post/Post";
import styles from "./posts.module.scss";

export default function Posts({ posts }) {
    return (
        <ul className="row">
            {posts.map((post) => {
                return (
                    <li key={post.id} className={"col-md-3 " + styles.post}>
                        <Post {...post} />
                    </li>
                );
            })}
        </ul>
    );
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
    const res = await fetch(`${process.env.API_BASE_URL}${process.env.POST_URL}`);
    const posts = await res.json();

    // By returning { props: { posts } }, the Post component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
