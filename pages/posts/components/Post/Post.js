import React from "react";
import Link from "next/link";

import styles from "./Post.module.scss";

export default function Post({ id, title, body }) {
    return (
        <>
            <img src={"/images/posts/" + id + ".jpeg"} className={styles.postImage} />

                <Link href="/posts/[id]" as={"/posts/" + id}>
                    {title}
                </Link>
            <p>{body}</p>
        </>
    );
}
