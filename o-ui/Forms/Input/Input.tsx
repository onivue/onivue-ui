import FormFieldErrorMessage from '@/o-ui/Forms/FormFieldErrorMessage/FormFieldErrorMessage'
import Label from '@/o-ui/Forms/Label/Label'
import classNames from 'classnames'
import * as React from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'

export type InputProps<T = HTMLInputElement> = {
    disabled?: React.InputHTMLAttributes<T>['disabled']
    invalid?: boolean
    required?: React.InputHTMLAttributes<T>['required']
    readOnly?: React.InputHTMLAttributes<T>['readOnly']
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'outline' | 'solid'
    'aria-label'?: string
    'aria-describedby'?: string
    label?: string
    dot?: boolean
    errorMessage?: string
} & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled' | 'required' | 'checked' | 'defaultChecked' | 'readOnly'
> &
    React.RefAttributes<T>

export const Input = React.forwardRef<HTMLElement, InputProps>(
    (
        {
            size = 'md',
            // variant = 'outline',
            color = 'primary',
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
        },
        ref?: React.Ref<HTMLInputElement>,
    ) => {
        const [showPassword, setShowPassword] = React.useState(false)

        return (
            <div className="flex flex-col">
                <Label htmlFor={name} dot={dot} label={label} className="mb-1.5" bold disabled={disabled} />
                <div className="relative">
                    <input
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
                            className,
                        )}
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        id={name}
                        name={name}
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
