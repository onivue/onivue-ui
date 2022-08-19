import Button from 'o-ui/Button/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/o-ui/Input/Input'
import Textarea from '@/o-ui/Textarea/Textarea'
import classNames from 'classnames'
import Label from '@/o-ui/Label/Label'

type FormData = {
    name: string
    password: string
    text: string
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
            <form onSubmit={onSubmit} className="grid gap-4">
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
                <Textarea
                    cols={5}
                    rows={5}
                    label="Text"
                    {...register('text', {
                        required: 'Field is required',
                        maxLength: {
                            value: 4,
                            message: 'This input exceed maxLength.',
                        },
                    })}
                    invalid={Boolean(errors.text)}
                    errorMessage={errors.text?.message}
                />
                {/* TODO: Checkbox */}
                <div className="relative w-10 select-none align-middle">
                    <input
                        type="checkbox"
                        id={'chk'}
                        name={'chk'}
                        className={classNames(
                            'absolute right-4 block h-6 w-6 cursor-pointer rounded-full border-4 border-black bg-white text-primary-400 ring-primary-300 duration-200 ease-in checked:right-0',
                            'checked:bg-primary-400 focus:border-primary-400  focus:ring-2 focus:ring-primary-200',
                        )}
                    />
                    <span className="block h-6 overflow-hidden rounded-full bg-gray-300"></span>
                </div>
                {/* TODO: Radio */}
                <div className="flex items-center">
                    <input
                        id="default-radio-1"
                        type="radio"
                        name="default-radio"
                        className="h-6 w-6 border-gray-300 bg-gray-100 text-primary-400 transition-all focus:ring-2 focus:ring-primary-400"
                    />
                    <Label label="Default radio" htmlFor="default-radio-1" className="mb-0 ml-2" />
                </div>

                <div className="flex items-center">
                    <input
                        id="default-radio-2"
                        type="radio"
                        name="default-radio"
                        className="h-6 w-6 border-gray-300 bg-gray-100 text-primary-400 transition-all focus:ring-2 focus:ring-primary-400"
                    />

                    <Label label="Default radio" htmlFor="default-radio-2" className="mb-0 ml-2" />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
