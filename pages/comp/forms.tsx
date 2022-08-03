import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'

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
                            value: 4,
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
