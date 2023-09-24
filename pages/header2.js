import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Header(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
            </ link>
        </Head>
    )
}