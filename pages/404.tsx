import Link from 'next/link'

export default function FourOhFour() {
    return (
        <div className="flex flex-1 flex-col justify-center">
            <div className="py-4">
                <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight md:text-6xl">
                    404 - Page Not Found
                </h2>

                <Link href="/">
                    <a className="mx-auto mt-12 grid w-1/2 grid-cols-1 gap-4">
                        <div>Go back</div>
                    </a>
                </Link>
            </div>
        </div>
    )
}
