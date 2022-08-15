import React from 'react'
import classNames from 'classnames'
import { ImSpinner2 } from 'react-icons/im'

type ButtonProps = {
    /* The label to show in the button when loading is true */
    loading?: boolean
    /* Controls button appearance */
    variant?: 'solid' | 'light' | 'outline' | 'ghost' | 'link'
    /* Size of the button */
    size?: 'sm' | 'md' | 'lg'
    /* Adds icon before button label */
    leftIcon?: React.ReactElement
    /* Adds icon after button label */
    rightIcon?: React.ReactElement
} & React.ComponentPropsWithRef<'button'>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            disabled: buttonDisabled,
            loading,
            variant = 'solid',
            size = 'md',
            leftIcon,
            rightIcon,
            ...rest
        },
        ref,
    ) => {
        const disabled = loading || buttonDisabled

        return (
            <button
                ref={ref}
                type="button"
                disabled={disabled}
                className={classNames(
                    'inline-flex h-fit items-center font-semibold',
                    'rounded-lg ',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                    'transition-colors duration-75',
                    'disabled:cursor-not-allowed disabled:opacity-60',
                    [
                        size === 'sm' && 'px-3 py-1 text-sm',
                        size === 'md' && 'px-4 py-2 text-base',
                        size === 'lg' && 'px-6 py-3 text-lg',
                    ],

                    //#region  //*=========== Variants ===========
                    [
                        variant === 'solid' && [
                            'bg-primary-400 text-white',
                            'hover:bg-primary-500 hover:text-white',
                            'active:bg-primary-500',
                            'disabled:bg-primary-400 disabled:text-white',
                        ],
                        variant === 'light' && [
                            'bg-primary-100 text-primary-500 ',
                            'hover:text-primary-600',
                            'hover:bg-primary-200 active:bg-primary-100',
                            'disabled:bg-primary-100 disabled:text-primary-500',
                        ],
                        variant === 'outline' && [
                            'text-primary-500',
                            'border border-primary-500',
                            'hover:bg-primary-50 active:bg-primary-100',
                            'disabled:bg-primary-100 disabled:text-primary-500',
                        ],
                        variant === 'ghost' && [
                            'text-primary-500',
                            'shadow-none',
                            'hover:bg-primary-50 active:bg-primary-100',
                            'disabled:text-primary-500 hover:disabled:bg-transparent',
                        ],
                    ],
                    //#endregion  //*======== Variants ===========

                    loading &&
                        'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
                    className,
                )}
                {...rest}
            >
                {loading ? (
                    <>
                        &nbsp;
                        <ImSpinner2 className="animate-spin" />
                    </>
                ) : (
                    <>
                        {leftIcon}
                        {children}
                        {rightIcon}
                    </>
                )}
            </button>
        )
    },
)

if (process.env.NODE_ENV !== 'production') {
    Button.displayName = 'Button'
}

export default Button
