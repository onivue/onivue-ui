import React from 'react'
import { RegisterOptions, DeepMap, FieldError, UseFormRegister, Path } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import get from 'lodash.get'

type InputProps<TFormValues> = {
    name: Path<TFormValues>
    rules?: RegisterOptions
    register?: UseFormRegister<TFormValues>
    errors?: Partial<DeepMap<TFormValues, FieldError>>
    label: string
    type: 'text' | 'email' | 'number'
    size?: 'md' | 'lg'
    dot?: boolean
    className?: string
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>

const Input = <TFormValues extends Record<string, unknown>>({
    name,
    type,
    label,
    rules = {},
    register,
    errors = {},
    size = 'md',
    dot = false,
    className,
    ...props
}: InputProps<TFormValues>) => {
    const errorMessages: { type: any; message: any; ref: any } = get(errors, name)
    const hasError: boolean = !!(errors && errorMessages)
    return (
        <div className="relative mt-2">
            <label
                htmlFor={name}
                className="absolute -translate-y-2.5 translate-x-2 bg-white px-1.5 text-sm font-bold text-gray-800"
            >
                {label} {dot && <span className="text-red-400">*</span>}
            </label>

            <input
                className={classNames(
                    'w-full rounded-lg border-2 transition-colors duration-150 ease-in',
                    hasError
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-400'
                        : 'border-gray-800 focus:border-primary-400 focus:ring-primary-400',
                    size === 'md' && 'py-2.5 text-base',
                    size === 'lg' && 'py-3 text-lg',
                )}
                aria-invalid={errors[name] ? 'true' : 'false'}
                type={type}
                name={name}
                id={name}
                {...(register && register(name, rules))}
                {...props}
            />
            {/* {console.log(errorMessages)} */}

            <ErrorMessage
                errors={errors}
                name={name as any}
                render={({ message }) => <p className="mt-1 text-sm text-red-600">{message}</p>}
            />
        </div>
    )
}

export default Input
