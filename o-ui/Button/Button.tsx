import classNames from 'classnames'
import { ReactElement, ReactNode, forwardRef } from 'react'
import { ImSpinner2 } from 'react-icons/im'

interface IButtonProps {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary' | 'tertiary'
    className?: string
    loading?: boolean
    disabled?: boolean
    iconLeft?: ReactElement
    iconRight?: ReactElement
    children?: ReactNode
}

const Button = forwardRef((props: IButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const buttonDisabled = props.loading || props.disabled

    return (
        <button
            ref={ref}
            type="button"
            disabled={buttonDisabled}
            className={classNames(
                'flex h-fit items-center justify-center font-semibold',
                'rounded-lg ',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                'transition-colors duration-75',
                'disabled:cursor-not-allowed disabled:opacity-60',
                [
                    props.size === 'sm' && 'px-3 py-1 text-sm',
                    props.size === 'md' && 'px-4 py-2 text-base',
                    props.size === 'lg' && 'px-6 py-3 text-lg',
                ],
                //#region  //*=========== Variants ===========
                [
                    props.variant === 'primary' && [
                        'bg-primary-400 text-white border border-transparent',
                        'hover:bg-primary-500 hover:text-white',
                        'active:bg-primary-500',
                        'disabled:bg-primary-400 disabled:text-white ',
                    ],
                    props.variant === 'secondary' && [
                        'text-primary-500',
                        'border border-primary-500',
                        'hover:bg-primary-50 active:bg-primary-100 ',
                        'disabled:bg-primary-100 disabled:text-primary-500',
                    ],
                    props.variant === 'tertiary' && [
                        'text-primary-500 border border-transparent',
                        'hover:bg-primary-100 active:bg-primary-100 hover:border-primary-100 ',
                        'disabled:text-primary-500',
                    ],
                ],
                //#endregion  //*======== Variants ===========
                props.loading &&
                    'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait px-8',
                props.className,
            )}
            // {...props}
        >
            {props.loading ? (
                <>
                    <ImSpinner2 className="animate-spin" />
                </>
            ) : (
                <>
                    {props.iconLeft}
                    {props.children}
                    {props.iconRight}
                </>
            )}
        </button>
    )
})

if (process.env.NODE_ENV !== 'production') {
    Button.displayName = 'Button'
}

Button.defaultProps = {
    variant: 'primary',
    size: 'md',
}

export default Button
