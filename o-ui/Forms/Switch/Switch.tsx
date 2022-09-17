import FormFieldErrorMessage from '@/o-ui/Forms/FormFieldErrorMessage/FormFieldErrorMessage'
import Label from '@/o-ui/Forms/Label/Label'
import classNames from 'classnames'
import React from 'react'

export type SwitchProps<T = HTMLInputElement> = {
    disabled?: React.InputHTMLAttributes<T>['disabled']
    invalid?: boolean
    required?: React.InputHTMLAttributes<T>['required']
    readOnly?: React.InputHTMLAttributes<T>['readOnly']
    'aria-label'?: string
    'aria-describedby'?: string
    label?: string
    dot?: boolean
    errorMessage?: string
    type?: 'checkbox'
} & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'required' | 'checked' | 'defaultChecked' | 'readOnly' | 'type'
> &
    React.RefAttributes<T>

const Switch = React.forwardRef<HTMLElement, SwitchProps>(
    (
        { name, invalid, disabled, required, label, dot, errorMessage, ...rest },
        ref?: React.Ref<HTMLInputElement>,
    ) => {
        return (
            <div className="flex flex-col">
                <Label label={label} htmlFor={name} dot={dot} className="mb-1.5" bold disabled={disabled} />
                <div
                    className={classNames(
                        'relative w-10 select-none align-middle',
                        disabled && 'cursor-not-allowed opacity-30',
                    )}
                >
                    <input
                        ref={ref}
                        disabled={disabled}
                        aria-disabled={disabled}
                        required={required}
                        aria-required={required}
                        type="checkbox"
                        id={name}
                        name={name}
                        className={classNames(
                            'absolute right-4 block h-6 w-6 cursor-pointer rounded-full border-4 border-black bg-white text-primary-400 ring-primary-300 duration-200 ease-in checked:right-0',
                            'checked:bg-primary-400 focus:border-primary-400  focus:ring-2 focus:ring-primary-200',
                            disabled && 'cursor-not-allowed',
                        )}
                        {...rest}
                    />
                    <span
                        className={classNames(
                            'block h-6 overflow-hidden rounded-full duration-200 ease-in',
                            invalid ? 'bg-red-200 ring-2 ring-red-400' : 'bg-gray-300',
                        )}
                    ></span>
                </div>
                {errorMessage && <FormFieldErrorMessage className="mt-1" errorMessage={errorMessage} />}
            </div>
        )
    },
)

if (process.env.NODE_ENV !== 'production') {
    Switch.displayName = 'Switch'
}
export default Switch
