import classNames from 'classnames'
import React from 'react'

type LabelType = {
    label: string
    htmlFor?: string
    dot?: boolean
    className?: string
    bold?: boolean
}

const Label = ({ label, dot, htmlFor, className, bold }: LabelType) => {
    return (
        <label
            htmlFor={htmlFor}
            className={classNames(className, bold && 'font-bold', 'rounded-lg text-sm text-gray-800')}
        >
            {label} {dot && <span className="text-red-400">*</span>}
        </label>
    )
}

export default Label
