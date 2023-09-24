import Header from './header2'
import Link from 'next/link'

export default function Home() {
    const title = "Other"

    return (
        <div>
            <Header title={title} />
            <h1 className="bg-primary px-3 text-white display-4">
                React</h1>
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    {title}</h3>
            <div className='card p-3'>
                <p>これは，移動のサンプルです。</p>
                <Link href="/">
                    Go to Other page &gt;&gt;
            </Link>
            </div>
            </div>
        </div>
    )
}