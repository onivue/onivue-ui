import FormFieldErrorMessage from '@/o-ui/Forms/FormFieldErrorMessage/FormFieldErrorMessage'
import Label from '@/o-ui/Forms/Label/Label'
import classNames from 'classnames'
import * as React from 'react'

export type TTextareaProps = {
    invalid?: boolean
    label?: string
    dot?: boolean
    errorMessage?: string
    size?: 'md' | 'lg'
    variant?: 'outline' | 'solid'
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> &
    React.RefAttributes<HTMLTextAreaElement>

export const Textarea: React.FC<TTextareaProps> = React.forwardRef(
    (
        {
            id,
            dot,
            name,
            label,
            invalid,
            errorMessage,
            className,
            disabled,
            readOnly,
            required,
            size = 'md',
            ...rest
        },
        ref,
    ) => {
        return (
            <div className="flex flex-col">
                <Label htmlFor={name} dot={dot} label={label} className="mb-1.5" bold disabled={disabled} />
                <div className="relative flex">
                    <textarea
                        ref={ref}
                        id={id || name}
                        aria-readonly={readOnly}
                        aria-disabled={disabled}
                        aria-label={label}
                        aria-invalid={invalid}
                        aria-required={required}
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
                        {...rest}
                    />
                </div>
                {errorMessage && <FormFieldErrorMessage className="mt-1" errorMessage={errorMessage} />}
            </div>
        )
    },
)

if (process.env.NODE_ENV !== 'production') {
    Textarea.displayName = 'Input'
}
export default Textarea
