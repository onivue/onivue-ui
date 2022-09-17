import LogoIcon from '@/components/LogoIcon/LogoIcon'
import Link from 'next/link'
import { HiOutlineCog } from 'react-icons/hi'

function Header() {
    return (
        <header className="sticky top-0 z-10 flex items-center py-5 px-3 backdrop-blur lg:h-16">
            <div className="relative flex w-full items-center justify-between lg:flex-row-reverse">
                <div className="mx-2 grid h-full place-items-center rounded-lg lg:hidden">
                    <Link href="/">
                        <a>
                            <LogoIcon className="h-7 w-7" />
                        </a>
                    </Link>
                </div>
                <div className="flex items-center text-sm">
                    <div className="false cursor-pointer px-3 text-zinc-400 hover:text-primary-600">
                        <HiOutlineCog className="h-8 w-8" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
