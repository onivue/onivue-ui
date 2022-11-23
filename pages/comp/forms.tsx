import Input from '@/o-ui/Forms/Input/Input'
import Radio from '@/o-ui/Forms/Radio/Radio'
import Switch from '@/o-ui/Forms/Switch/Switch'
import TextArea from '@/o-ui/Forms/Textarea/Textarea'
import Button from 'o-ui/Button/Button'
import { useForm } from 'react-hook-form'

type FormData = {
    name: string
    password: string
    text: string
    checkbox: boolean
    radio: string
}

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
        },
    })

    const onSubmit = handleSubmit(
        (formV) => {
            console.log(formV)
        },
        (e) => console.log(e),
    )

    return (
        <div className="w-full">
            <form onSubmit={onSubmit} className="grid gap-4">
                <Input
                    label="Name"
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
                <TextArea
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

                <Switch {...register('checkbox')} label="Switch/Checkbox" />

                <Radio {...register('radio', { required: 'Checkbox' })} label="Radio-1" value="Radio-1" />
                <Radio {...register('radio')} label="Radio-2" value="Radio-2" />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
