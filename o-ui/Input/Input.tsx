import classNames from 'classnames'
import * as React from 'react'

export type InputProps<T = HTMLInputElement> = {
    /* Makes input disabled */
    disabled?: React.InputHTMLAttributes<T>['disabled']
    /* Makes input invalid */
    invalid?: boolean
    /* Makes input required */
    required?: React.InputHTMLAttributes<T>['required']
    /* Makes input readOnly */
    readOnly?: React.InputHTMLAttributes<T>['readOnly']
    /* Set the input color */
    color?: string
    /* Size of the input */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    /** Controls input appearance */
    variant?: 'outline' | 'solid'
    /**
     * The element or component to use in place of `input`
     */
    as?: React.ElementType
    /** */
    type?: string
    /**
     * A11y: A label that describes the input
     */
    'aria-label'?: string
    /**
     * A11y: The id of the element that describes the input
     */
    'aria-describedby'?: string
    label?: string
    dot?: boolean
    errorMessage?: string
} & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled' | 'required' | 'checked' | 'defaultChecked' | 'readOnly'
> &
    React.RefAttributes<T>

export const Input = React.forwardRef<HTMLElement, InputProps>((props, ref) => {
    const {
        size = 'md',
        variant = 'outline',
        color = 'primary',
        as: Comp = 'input',
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedby,
        className,
        type = 'text',
        name,
        invalid,
        errorMessage,
        disabled,
        readOnly,
        required,
        label,
        dot,
        ...rest
    } = props

    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className=" mb-1.5 rounded-lg bg-white px-1.5 text-sm font-bold text-gray-800"
            >
                {label} {dot && <span className="text-red-400">*</span>}
            </label>
            <Comp
                ref={ref}
                readOnly={readOnly}
                aria-readonly={readOnly}
                disabled={disabled}
                aria-disabled={disabled}
                aria-label={ariaLabel}
                aria-invalid={invalid}
                required={required}
                aria-required={required}
                aria-describedby={ariaDescribedby}
                data-color={color ? color : undefined}
                className={classNames(
                    'w-full rounded-lg transition duration-150 ease-in',
                    invalid
                        ? 'border-none ring-2 ring-red-400 focus:ring-2 focus:ring-red-400'
                        : 'border-none ring-2 ring-black focus:ring-2 focus:ring-primary-400',
                    size === 'md' && 'py-2.5 text-base',
                    size === 'lg' && 'py-3 text-lg',
                    disabled && 'cursor-not-allowed opacity-50',
                )}
                type={type}
                id={name}
                name={name}
                {...rest}
            />
            <div className="mt-1 text-sm text-red-600">{errorMessage}</div>
        </div>
    )
})

if (process.env.NODE_ENV !== 'production') {
    Input.displayName = 'Input'
}
export default Input
