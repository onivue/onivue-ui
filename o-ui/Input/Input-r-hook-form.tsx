import React from 'react'
import { RegisterOptions, DeepMap, FieldError, UseFormRegister, Path } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import get from 'lodash.get'
//INSPIRATION: https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Fatoms%2Finput.tsx,src%2Fcomponents%2Fmolecules%2Fform-textarea.tsx

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
    disabled,
    ...props
}: InputProps<TFormValues>) => {
    const errorMessages: { type: any; message: any; ref: any } = get(errors, name)
    const hasError: boolean = !!(errors && errorMessages)
    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className=" mb-1.5 rounded-lg bg-white px-1.5 text-sm font-bold text-gray-800"
            >
                {label} {dot && <span className="text-red-400">*</span>}
            </label>

            <input
                className={classNames(
                    'w-full rounded-lg border-none ring-2 ring-black transition duration-150 ease-in',
                    hasError ? 'focus:ring-2 focus:ring-red-400' : 'focus:ring-2 focus:ring-primary-400',
                    size === 'md' && 'py-2.5 text-base',
                    size === 'lg' && 'py-3 text-lg',
                    disabled && 'cursor-not-allowed opacity-50',
                )}
                aria-invalid={errors[name] ? 'true' : 'false'}
                type={type}
                name={name}
                id={name}
                disabled={disabled}
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
