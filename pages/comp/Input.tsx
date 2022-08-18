import Button from 'o-ui/Button/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/o-ui/Input/Input'

type FormData = {
    name: string
    password: string
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

    const onSubmit = handleSubmit(
        ({ name }) => {
            console.log(name)
        },
        (e) => console.log(e),
    )

    return (
        <div className="w-full">
            <form onSubmit={onSubmit} className="grid gap-2">
                <Input
                    label="Name"
                    name="name"
                    type="text"
                    invalid={Boolean(errors.name)}
                    {...register('name', {
                        required: 'Field is required',
                        maxLength: {
                            value: 4,
                            message: 'This input exceed maxLength.',
                        },
                    })}
                    errorMessage={errors.name?.message}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    invalid={Boolean(errors.password)}
                    {...register('password', {
                        required: 'Field is required',
                        maxLength: {
                            value: 10,
                            message: 'This input exceed maxLength.',
                        },
                        minLength: {
                            value: 5,
                            message: 'This input exceed minLength.',
                        },
                    })}
                    errorMessage={errors.password?.message}
                />
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
