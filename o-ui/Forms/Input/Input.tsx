import FormFieldErrorMessage from '@/o-ui/Forms/FormFieldErrorMessage/FormFieldErrorMessage'
import Label from '@/o-ui/Forms/Label/Label'
import classNames from 'classnames'
import * as React from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'

export type TInputProps = {
    dot?: boolean
    label?: string
    invalid?: boolean
    disabled?: boolean
    required?: boolean
    errorMessage?: string
    size?: 'md' | 'lg'
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'required' | 'checked'> &
    React.RefAttributes<HTMLInputElement>

export const Input: React.FC<TInputProps> = React.forwardRef(
    (
        {
            dot,
            label,
            invalid,
            disabled,
            required,
            errorMessage,
            size = 'md',
            id,
            name,
            readOnly,
            className,
            type = 'text',
            ...rest
        },
        ref,
    ) => {
        const [showPassword, setShowPassword] = React.useState(false)

        return (
            <div className="flex flex-col">
                <Label htmlFor={name} dot={dot} label={label} className="mb-1.5" bold disabled={disabled} />
                <div className="relative">
                    <input
                        ref={ref}
                        id={id || name}
                        readOnly={readOnly}
                        disabled={disabled}
                        required={required}
                        aria-label={label}
                        aria-invalid={invalid}
                        aria-disabled={disabled}
                        aria-required={required}
                        aria-readonly={readOnly}
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        className={classNames(
                            'w-full rounded-lg transition duration-150 ease-in',
                            size === 'md' && 'py-2.5 text-base',
                            size === 'lg' && 'py-3 text-lg',
                            disabled && 'cursor-not-allowed opacity-50',
                            invalid
                                ? 'border-none ring-2 ring-red-400 focus:ring-2 focus:ring-red-400'
                                : 'border-none ring-2 ring-black focus:ring-2 focus:ring-primary-400',
                            className,
                        )}
                        {...rest}
                    />
                    {type === 'password' && !disabled && (
                        <div
                            onClick={(e) => {
                                e.preventDefault()
                                setShowPassword(!showPassword)
                            }}
                            className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer text-xl text-primary-500"
                        >
                            {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                        </div>
                    )}
                </div>
                {errorMessage && <FormFieldErrorMessage className="mt-1" errorMessage={errorMessage} />}
            </div>
        )
    },
)

if (process.env.NODE_ENV !== 'production') {
    Input.displayName = 'Input'
}
export default Input
