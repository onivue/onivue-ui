import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment } from 'react'

type DropDownProps = {
    button: React.ReactElement
    direction?: 'left' | 'right'
} & React.ComponentPropsWithoutRef<'div'>

type DropDownItemProps = {} & React.ComponentPropsWithoutRef<'div'>

type DropDownDividerProps = {} & React.ComponentPropsWithoutRef<'div'>

const DropDown = ({ button, children, direction }: DropDownProps) => {
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
                            'absolute mt-2 grid w-56 origin-top-right rounded-md bg-white p-1.5 shadow-lg ring-1 ring-primary-300 ring-opacity-40 focus:outline-none',
                        )}
                    >
                        {children}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

const DropDownItem = ({ children }: DropDownItemProps) => {
    return <div className="cursor-pointer rounded-lg py-1.5 px-2 hover:bg-primary-50">{children}</div>
}
DropDown.Item = DropDownItem

const DropDownDivider = ({}: DropDownDividerProps) => {
    return <hr className="my-1.5" />
}
DropDown.Divider = DropDownDivider

export default DropDown
