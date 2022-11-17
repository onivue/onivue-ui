import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, ReactNode, useRef } from 'react'
import { HiOutlineExclamation, HiOutlineInformationCircle, HiOutlinePencilAlt } from 'react-icons/hi'

import Button from '../Button/Button'

export interface IModalProps {
    title: 'string'
    variant?: 'warning' | 'edit' | 'info'
    show?: boolean
    children?: ReactNode
    onClose?: () => void
    onSubmit?: () => void
}

const Modal: React.FC<IModalProps> = (props) => {
    const closeButtonRef = useRef(null)
    return (
        <>
            <Transition appear show={props.show} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={props.onClose}
                    initialFocus={closeButtonRef}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {/* OVERLAY */}
                        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="items-center sm:flex">
                                        {props.variant === 'warning' ? (
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                                                <HiOutlineExclamation className="h-6 w-6 text-red-600" />
                                            </div>
                                        ) : props.variant === 'info' ? (
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                                                <HiOutlineInformationCircle className="h-6 w-6 text-blue-600" />
                                            </div>
                                        ) : (
                                            props.variant === 'edit' && (
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                                                    <HiOutlinePencilAlt className="h-6 w-6 text-primary-600" />
                                                </div>
                                            )
                                        )}
                                        <Dialog.Title
                                            as="h3"
                                            className="mt-4 text-center text-xl font-medium leading-6 sm:mt-0 "
                                        >
                                            {props.title}
                                        </Dialog.Title>
                                    </div>
                                    {props.children && <div className="mt-3">{props.children}</div>}
                                    {(props.onSubmit || props.onClose) && (
                                        <div className="grid gap-2 pt-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            {props.onSubmit && (
                                                <Button variant="primary" onClick={props.onSubmit}>
                                                    Submit
                                                </Button>
                                            )}

                                            {props.onClose && (
                                                <Button
                                                    variant="tertiary"
                                                    onClick={props.onClose}
                                                    ref={closeButtonRef}
                                                >
                                                    Cancel
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

Modal.defaultProps = { variant: 'info' }

export default Modal
