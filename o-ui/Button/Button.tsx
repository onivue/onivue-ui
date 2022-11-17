import classNames from 'classnames'
import { MouseEventHandler, ReactElement, ReactNode, forwardRef } from 'react'
import { ImSpinner2 } from 'react-icons/im'

export interface IButtonProps {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary' | 'tertiary'
    title?: string
    className?: string
    loading?: boolean
    disabled?: boolean
    type?: JSX.IntrinsicElements['button']['type']
    iconLeft?: ReactElement
    iconRight?: ReactElement
    children?: ReactNode
    onClick?: MouseEventHandler
}

const Button = forwardRef((props: IButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    return (
        <button
            ref={ref}
            type={props.type}
            // disabled={props.disabled}
            onClick={props.onClick}
            title={props.title}
            className={classNames(
                'inline-flex items-center justify-center font-semibold',
                'rounded-lg border-2',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                'transition-colors duration-75',
                'disabled:cursor-not-allowed disabled:opacity-60',
                [
                    props.size === 'sm' && 'px-4 py-1 text-sm h-8',
                    props.size === 'md' && 'px-6 py-2 text-base h-12',
                    props.size === 'lg' && 'px-10 py-3 text-lg h-14',
                ],
                //#region  //*=========== Variants ===========
                [
                    props.variant === 'primary' && [
                        'bg-primary-400 text-white border-transparent',
                        'hover:bg-primary-500 hover:text-white',
                        'active:bg-primary-500',
                        'disabled:bg-primary-400 disabled:text-white ',
                    ],
                    props.variant === 'secondary' && [
                        'text-primary-500',
                        'border-primary-500',
                        'hover:bg-primary-100 active:bg-primary-100 ',
                        'disabled:bg-primary-100 disabled:text-primary-500',
                    ],
                    props.variant === 'tertiary' && [
                        'text-primary-500 border-transparent',
                        'hover:bg-primary-100 active:bg-primary-100 hover:border-primary-100 ',
                        'disabled:text-primary-500',
                    ],
                ],
                //#endregion  //*======== Variants ===========
                props.loading && 'relative text-transparent transition-none disabled:cursor-wait px-8',
                props.className,
            )}
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
    type: 'button',
}

export default Button
