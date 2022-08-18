import Link from 'next/link'
import { navigation } from '@/data/navigation'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const SideBarNavigation = () => {
    const router = useRouter()
    const currentRoute = router.pathname
    console.log(currentRoute)
    return (
        <nav className="flex flex-col gap-8">
            <div className="mb-3">
                {navigation.map((navRoot) => (
                    <div key={navRoot.title}>
                        <div className="px-2 text-lg font-semibold uppercase tracking-wide text-primary-400">
                            {navRoot.title}
                        </div>
                        {navRoot.children.map((navChild) =>
                            !navChild.disabled ? (
                                <Link href={navChild.href} key={navChild.title}>
                                    <a
                                        className={classNames(
                                            currentRoute === navChild.href &&
                                                'underline decoration-primary-400 decoration-2 underline-offset-2',
                                            'cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-base font-light hover:text-primary-400',
                                        )}
                                    >
                                        {navChild.title}
                                    </a>
                                </Link>
                            ) : (
                                <div
                                    className="relative flex w-full items-center rounded border-0 px-2 py-1 text-base text-gray-400"
                                    key={navChild.title}
                                >
                                    {navChild.title}
                                </div>
                            ),
                        )}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default SideBarNavigation
