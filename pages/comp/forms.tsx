import React from 'react'
import classNames from 'classnames'
import { RegisterOptions, DeepMap, FieldError, UseFormRegister, Path, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import get from 'lodash.get'

type FormData = {
    name: string
}

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            name: '',
        },
    })

    const onSubmit = handleSubmit(({ name }) => {
        console.log(name)
        console.log(errors)
    })
    return (
        <div className="w-full">
            <form onSubmit={onSubmit}>
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    rules={{
                        required: 'You must enter your first name.',
                        maxLength: {
                            value: 2,
                            message: 'This input exceed maxLength.',
                        },
                    }}
                    register={register}
                    errors={errors}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export type InputProps<TFormValues> = {
    name: Path<TFormValues>
    rules?: RegisterOptions
    register?: UseFormRegister<TFormValues>
    errors?: Partial<DeepMap<TFormValues, FieldError>>
    label: string
    type: 'text' | 'email' | 'number'
    size?: 'medium' | 'large'
    className?: string
} & React.ComponentPropsWithoutRef<'input'>

const Input = <TFormValues extends Record<string, unknown>>({
    name,
    type,
    label,
    rules = {},
    register,
    errors = {},
    ...props
}: InputProps<TFormValues>) => {
    const errorMessages: { type: any; message: any; ref: any } = get(errors, name)
    const hasError: boolean = !!(errors && errorMessages)

    return (
        <div className="">
            <>
                <label
                    htmlFor={name}
                    className="absolute translate-y-3.5 translate-x-2 bg-white px-2 text-sm font-bold"
                >
                    {label}
                </label>
                <br />
                <input
                    className={classNames(
                        'w-full rounded-lg  shadow-sm ',
                        hasError
                            ? 'border-red-300 focus:border-red-400 focus:ring-red-400'
                            : 'border-gray-800 focus:border-primary-400 focus:ring-primary-400',
                    )}
                    aria-invalid={errors[name] ? 'true' : 'false'}
                    type={type}
                    name={name}
                    id={name}
                    {...(register && register(name, rules))}
                    {...props}
                />
                {console.log(errorMessages)}
                <br />
                <ErrorMessage
                    errors={errors}
                    name={name as any}
                    render={({ message }) => <p className="mt-1 text-sm text-red-600">{message}</p>}
                />
            </>
        </div>
    )
}

// export default Input
