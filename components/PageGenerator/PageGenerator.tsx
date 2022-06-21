import 'prismjs/themes/prism-tomorrow.css'

export default function BlogPost({ children, meta }) {
    return (
        <div className="w-full rounded-lg bg-gray-100 p-4">
            <div className="mb-8 rounded-lg bg-white p-4">
                <h1 className="mb-3 mt-0 text-3xl font-extrabold">{meta.title}</h1>
                <div>
                    <p className="text-lg">{meta.description}</p>
                    <span className="text-sm">{meta.date}</span>
                    <div className="text-sm text-neutral-600">☕ {meta.readTime + ' min read'}</div>
                </div>
            </div>
            <article className="prose max-w-none ">{children}</article>
        </div>
    )
}
