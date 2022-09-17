import classNames from 'classnames'

export const FormFieldErrorMessage = ({ errorMessage, className }) => {
    return <div className={classNames(className, 'text-sm text-red-600')}>{errorMessage}</div>
}

export default FormFieldErrorMessage
