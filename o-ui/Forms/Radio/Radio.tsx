import FormFieldErrorMessage from '@/o-ui/Forms/FormFieldErrorMessage/FormFieldErrorMessage'
import Label from '@/o-ui/Forms/Label/Label'
import classNames from 'classnames'
import React from 'react'

export type TRadioProps = {
    label?: string
    dot?: boolean
    errorMessage?: string
    type?: 'radio'
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
    React.RefAttributes<HTMLInputElement>

const Radio: React.FC<TRadioProps> = React.forwardRef(
    ({ id, name, disabled, required, label, dot, errorMessage, ...rest }, ref) => {
        return (
            <div className="flex items-center">
                <input
                    ref={ref}
                    id={id || name}
                    disabled={disabled}
                    required={required}
                    type="radio"
                    aria-disabled={disabled}
                    className={classNames(
                        'h-6 w-6 border-gray-300 bg-gray-100 text-primary-400 transition-all focus:ring-2 focus:ring-primary-400',
                        disabled && 'cursor-not-allowed opacity-30',
                    )}
                    {...rest}
                />

                <Label label={label} htmlFor={name} dot={dot} className="mb-0 ml-2" disabled={disabled} />
                {errorMessage && <FormFieldErrorMessage className="ml-4" errorMessage={errorMessage} />}
            </div>
        )
    },
)

if (process.env.NODE_ENV !== 'production') {
    Radio.displayName = 'Radio'
}
export default Radio
