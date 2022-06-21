import Link from 'next/link'

const SideBarNavigation = () => {
    return (
        <nav className="flex flex-col gap-8">
            <div className="mb-3">
                <p className="px-2 text-lg font-semibold uppercase tracking-wide text-primary-400">Forms</p>
                <div className="flex flex-col space-y-0">
                    <Link href="/comp/button">
                        <a className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400">
                            Button
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default SideBarNavigation
