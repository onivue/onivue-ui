import classNames from 'classnames'

type TLabelProps = {
    label: string
    dot?: boolean
    htmlFor?: string
    className?: string
    bold?: boolean
    disabled?: boolean
}

const Label = ({ label, dot, htmlFor, className, bold, disabled }: TLabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={classNames(
                className,
                bold && 'font-bold',
                'rounded-lg text-sm text-gray-800',
                disabled && 'opacity-50',
            )}
        >
            {label} {dot && <span className="text-red-400">*</span>}
        </label>
    )
}

export default Label
