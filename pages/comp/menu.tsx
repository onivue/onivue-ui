import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import Button from '@/components/Button/Button'
import classNames from 'classnames'

const menu = () => {
    return (
        <div>
            <DropDown button={<Button>MENU</Button>} direction={'right'}>
                <DropDown.Item>XX</DropDown.Item>
                <DropDown.Divider />
                <DropDown.Item>XX</DropDown.Item>
                <DropDown.Item>XX</DropDown.Item>
                <DropDown.Item>XX</DropDown.Item>
            </DropDown>
        </div>
    )
}

export default menu

const DropDown = ({ button, children, direction }) => {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button as={React.Fragment}>{button}</Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={classNames(
                            [direction === 'right' && 'right-0', direction === 'left' && 'left-0'],
                            'absolute  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-primary-300 ring-opacity-40 focus:outline-none',
                        )}
                    >
                        {children}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

const DropDownItem = ({ children }) => {
    return <div>{children}</div>
}
DropDown.Item = DropDownItem

const DropDownDivider = () => {
    return <hr />
}
DropDown.Divider = DropDownDivider
