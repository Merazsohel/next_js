import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React from "react";
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1>
                    Welcome to Meraz Sohel's Practice NextJs APP
                </h1>

                <Image className={styles.image}
                    src="/meraz.jpeg"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />

                <button className={styles.button}>
                    <Link href="/posts">
                    Browse All Posts
                </Link>
                </button>


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
