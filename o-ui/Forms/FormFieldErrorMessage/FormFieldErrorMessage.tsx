import classNames from 'classnames'
import React from 'react'

interface TFormFieldErrorMessageProps {
    errorMessage: string
    className: string
}

export const FormFieldErrorMessage: React.FC<TFormFieldErrorMessageProps> = ({ errorMessage, className }) => {
    return <div className={classNames(className, 'text-sm text-red-600')}>{errorMessage}</div>
}

export default FormFieldErrorMessage
