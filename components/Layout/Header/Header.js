import LogoIcon from '@/components/LogoIcon/LogoIcon'
import Link from 'next/link'

function Header() {
    return (
        <header className="sticky top-0 z-10 flex items-center p-4 backdrop-blur lg:h-16 lg:backdrop-blur-none">
            <div className="relative flex w-full items-center justify-between lg:flex-row-reverse">
                <div className="grid h-full place-items-center rounded-lg lg:hidden">
                    <Link href="/">
                        <a>
                            <LogoIcon className="h-10 w-10" id={'header'} />
                        </a>
                    </Link>
                </div>
                <div className="flex items-center text-sm">
                    {/* <div className="false cursor-pointer px-3 text-zinc-400 hover:text-primary-600">
                        <HiOutlineCog className="h-8 w-8" />
                    </div> */}
                </div>
            </div>
        </header>
    )
}
export default Header
