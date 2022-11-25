import SideBarNavigation from '@/components/Layout/SideBar/SideBarNavigation'
import LogoIcon from '@/components/LogoIcon/LogoIcon'
import Link from 'next/link'
import { Router } from 'next/router'
import { useEffect, useRef } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

import useOpenWithBrowserHistory from './helper'

export default function SideBar({ hidden = false, width = '20rem' }) {
    const [open, setOpen, handleOpen, handleClose] = useOpenWithBrowserHistory('uniq-key')

    const ref = useRef(null)
    // CLOSE SIDEBAR WHEN ROUTE CHANGES
    Router.events.on('routeChangeStart', () => handleClose())
    //MOBILE SIDEBAR TOGGLE HANDLER
    useEffect(() => {
        const handleOutsideClick = (event) => {
            !ref.current?.contains(event.target) && open && handleClose()
        }
        window.addEventListener('mousedown', handleOutsideClick)
        return () => window.removeEventListener('mousedown', handleOutsideClick)
    }, [open, ref])

    if (hidden) return <></>

    return (
        <>
            {open ? <SideBarOverlay /> : <SideBarToggleButton toggleSidenav={setOpen} />}

            <SideBarNavigationWrapper sideBarIsOpen={open} refProp={ref} width={width}>
                <SideBarLogo />
                <SideBarNavigation />
            </SideBarNavigationWrapper>
        </>
    )
}

function SideBarNavigationWrapper(props) {
    return (
        <aside
            className={`fixed top-0 left-0 z-20 h-screen w-80 shrink-0 transform pt-4 transition-all duration-300 lg:sticky lg:-translate-x-0 ${
                props.sideBarIsOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ width: props.width }}
        >
            <div
                className=" flex h-full flex-col overflow-auto rounded-tr-xl bg-white p-4 text-primary-700 focus:outline-none"
                ref={props.refProp}
            >
                {props.children}
            </div>
        </aside>
    )
}

function SideBarLogo() {
    return (
        <Link href="/" passHref>
            <div className="mt-5 mb-8 flex justify-center">
                <LogoIcon className="h-16 w-16 cursor-pointer" id={'sidebarlogo'} />
            </div>
        </Link>
    )
}

function SideBarToggleButton(props) {
    return (
        <div className={`fixed bottom-5 right-5 z-50 animate-fade-in items-center space-x-4 lg:hidden`}>
            <button
                onClick={props.toggleSidenav}
                className="hover:text-primary rounded-md bg-primary-50 p-1 ring-primary-200 transition-colors duration-200 hover:bg-primary-100 focus:outline-none focus:ring"
            >
                <HiMenuAlt2 className="h-8 w-8" />
            </button>
        </div>
    )
}
function SideBarOverlay() {
    return (
        <div className="fixed inset-0 z-20 h-screen animate-fade-in bg-gray-500 bg-opacity-40 backdrop-blur-sm backdrop-filter lg:hidden" />
    )
}
