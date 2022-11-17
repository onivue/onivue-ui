import classNames from 'classnames'
import { forwardRef, MouseEventHandler, ReactElement, ReactNode, useCallback } from 'react'
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
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (!props.loading && !props.disabled) props.onClick?.(event)
        },
        [props.loading, props.disabled, props.onClick],
    )

    return (
        <button
            ref={ref}
            type={props.type}
            disabled={props.disabled}
            onClick={handleClick}
            title={props.title}
            className={classNames(
                'inline-flex items-center justify-center font-semibold',
                'rounded-lg border-2',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                'transition-colors duration-75',
                'disabled:cursor-not-allowed disabled:opacity-60',
                [
                    props.size === 'sm' && 'h-8 px-4 py-1 text-sm',
                    props.size === 'md' && 'h-12 px-6 py-2 text-base',
                    props.size === 'lg' && 'h-14 px-10 py-3 text-lg',
                ],
                //#region  //*=========== Variants ===========
                [
                    props.variant === 'primary' && [
                        'border-transparent bg-primary-400 text-white',
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
                        'border-transparent text-primary-500',
                        'hover:border-primary-100 hover:bg-primary-100 active:bg-primary-100 ',
                        'disabled:text-primary-500',
                    ],
                ],
                //#endregion  //*======== Variants ===========
                props.loading && 'relative px-8 text-transparent transition-none disabled:cursor-wait',
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
