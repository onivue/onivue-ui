// import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef } from 'react'
import { HiOutlineExclamation, HiOutlineInformationCircle, HiOutlinePencilAlt, HiX } from 'react-icons/hi'
import Button from '../Button/Button'

type ModalProps = {
    title: 'string'
    /*  */
    variant?: 'warning' | 'edit' | 'info'
    /* */
    show?: boolean
    /* */
    onClose?: () => void
    /*  */
    onCancel?: () => void
    /*  */
    onSubmit?: () => void
} & React.ComponentPropsWithoutRef<'div'>

export default function Modal({
    show,
    variant = 'info',
    onClose,
    onCancel,
    onSubmit,
    title,
    children,
}: ModalProps) {
    const closeButtonRef = useRef(null)
    return (
        <>
            <Transition.Root show={show} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={onClose}
                    initialFocus={closeButtonRef}
                >
                    <div className="min-h-screen items-end justify-center text-center backdrop-blur">
                        <Transition.Child
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            {/* //! -----------------------BACKDROP--------------------------------- */}
                            <Dialog.Overlay className="fixed inset-0 bg-gray-100 bg-opacity-25 transition" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-6"
                            enterTo="opacity-100 tanslate-y-0"
                            leave="ease-in duration-200 "
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-6"
                        >
                            {/* //! -----------------------CONTENT--------------------------------- */}
                            <div className="inline-block w-11/12 transform overflow-auto rounded-lg bg-white text-left align-middle shadow-xl  transition-all lg:w-full lg:max-w-2xl">
                                {/* //! -----------------------CLOSE X BUTTON--------------------------------- */}
                                <div
                                    className="absolute right-0 flex cursor-pointer items-center justify-center p-2 focus:outline-none"
                                    onClick={onClose}
                                    ref={closeButtonRef}
                                >
                                    <HiX className="h-5 w-5 text-gray-600" aria-hidden="true" />
                                </div>
                                {/* //! -----------------------HEADER--------------------------------- */}
                                <div className=" dark:bg-dark-100 p-6 dark:text-white">
                                    <div className="items-center sm:flex">
                                        {/* //! -----------------------ICON--------------------------------- */}
                                        {variant === 'warning' ? (
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                                                <HiOutlineExclamation className="h-6 w-6 text-red-600" />
                                            </div>
                                        ) : variant === 'info' ? (
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                                                <HiOutlineInformationCircle className="h-6 w-6 text-blue-600" />
                                            </div>
                                        ) : (
                                            variant === 'edit' && (
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                                                    <HiOutlinePencilAlt className="h-6 w-6 text-primary-600" />
                                                </div>
                                            )
                                        )}
                                        {/* //! -----------------------TITLE--------------------------------- */}
                                        <Dialog.Title
                                            as="h3"
                                            className="mt-4 text-center text-xl font-medium leading-6 sm:mt-0 "
                                        >
                                            {title}
                                        </Dialog.Title>
                                    </div>
                                    {/* //! -----------------------CONTENT--------------------------------- */}
                                    <div className="mt-3">{children}</div>
                                </div>
                                {/* //! -----------------------FOOTER--------------------------------- */}
                                {(onSubmit || onCancel) && (
                                    <div className="gap-2 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        {onSubmit && (
                                            <Button variant="solid" onClick={onSubmit}>
                                                Submit
                                            </Button>
                                        )}

                                        {onCancel && (
                                            <Button variant="ghost" onClick={onCancel}>
                                                Cancel
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
