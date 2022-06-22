import Link from 'next/link'
import 'prismjs/themes/prism-tomorrow.css'

export default function BlogPost({ children, meta, propTypes }) {
    return (
        <div className="w-full rounded-lg px-0 lg:px-4">
            <h1 className="mb-8 mt-6 text-3xl font-extrabold">{meta.title}</h1>
            <article className="prose w-full max-w-none">{children}</article>

            <div className="mt-16 flex flex-col divide-y divide-solid divide-gray-300">
                <h1 className="mb-3 mt-0   text-3xl font-extrabold">Props</h1>
                {propTypes.map((propType) => (
                    <div className="flex flex-col py-4" key={propType.property}>
                        <li className="flex flex-wrap">
                            <b className="mr-2">{propType.property}</b>
                            <span className="text-teal-500">[{propType.type.join(', ')}]</span>
                            <span className="mx-2">·</span>
                            <span className="text-neutral-500">
                                Default:{' '}
                                <span className="ml-1 font-medium text-orange-500">
                                    {propType.default || "''"}
                                </span>
                            </span>
                        </li>
                        <p className="whitespace-normal text-neutral-500">{propType.description}</p>
                    </div>
                ))}
            </div>
            <Link href="/">
                <a className="float-right">Go back to Home</a>
            </Link>
        </div>
    )
}
