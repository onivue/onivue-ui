import * as React from 'react'
import Label from '@/o-ui/Label/Label'
import classNames from 'classnames'

export type TextareaProps<T = HTMLTextAreaElement> = {
    /* Makes input disabled */
    disabled?: React.TextareaHTMLAttributes<T>['disabled']
    /* Makes input invalid */
    invalid?: boolean
    /* Makes input required */
    required?: React.TextareaHTMLAttributes<T>['required']
    /* Makes input readOnly */
    readOnly?: React.TextareaHTMLAttributes<T>['readOnly']
    /* Size of the input */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    /** Controls input appearance */
    variant?: 'outline' | 'solid'
    /* A11y: A label that describes the input */
    'aria-label'?: string
    /* A11y: The id of the element that describes the input */
    'aria-describedby'?: string
    /*  */
    label?: string
    dot?: boolean
    errorMessage?: string
} & Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'disabled' | 'required' | 'checked' | 'defaultChecked' | 'readOnly'
> &
    React.RefAttributes<T>

export const Textarea = React.forwardRef<HTMLElement, TextareaProps>(
    (
        {
            size = 'md',
            variant = 'outline',
            color = 'primary',
            'aria-label': ariaLabel,
            'aria-describedby': ariaDescribedby,
            className,
            name,
            invalid,
            errorMessage,
            disabled,
            readOnly,
            required,
            label,
            dot,
            ...rest
        },
        ref?: React.Ref<HTMLTextAreaElement>,
    ) => {
        const [showPassword, setShowPassword] = React.useState(false)

        return (
            <div className="flex flex-col">
                <Label htmlFor={name} dot={dot} label={label} className="mb-1.5" bold />
                <div className="relative">
                    <textarea
                        ref={ref}
                        readOnly={readOnly}
                        aria-readonly={readOnly}
                        disabled={disabled}
                        aria-disabled={disabled}
                        aria-label={ariaLabel}
                        aria-invalid={invalid}
                        required={required}
                        aria-required={required}
                        aria-describedby={ariaDescribedby}
                        data-color={color ? color : undefined}
                        className={classNames(
                            'w-full rounded-lg transition duration-150 ease-in',
                            invalid
                                ? 'border-none ring-2 ring-red-400 focus:ring-2 focus:ring-red-400'
                                : 'border-none ring-2 ring-black focus:ring-2 focus:ring-primary-400',
                            size === 'md' && 'py-2.5 text-base',
                            size === 'lg' && 'py-3 text-lg',
                            disabled && 'cursor-not-allowed opacity-50',
                        )}
                        id={name}
                        name={name}
                        {...rest}
                    />
                </div>
                {errorMessage && <div className="mt-1 text-sm text-red-600">{errorMessage}</div>}
            </div>
        )
    },
)

if (process.env.NODE_ENV !== 'production') {
    Textarea.displayName = 'Input'
}
export default Textarea
