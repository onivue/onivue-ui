import Button from 'o-ui/Button/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../o-ui/Input/Input'

type FormData = {
    name: string
    username: string
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
            <form onSubmit={onSubmit}>
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    invalid={Boolean(errors.name)}
                    {...register('name', {
                        required: 'ERROR',
                        // maxLength: {
                        //     value: 4,
                        //     message: 'This input exceed maxLength.',
                        // },
                    })}
                    errorMessage={errors.name?.message}
                />
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
