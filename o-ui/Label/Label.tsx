import React from 'react'

type LabelType = {
    label: string
    htmlFor?: string
    dot?: boolean
}

const Label = ({ label, dot, htmlFor }: LabelType) => {
    return (
        <label htmlFor={htmlFor} className=" mb-1.5 rounded-lg text-sm font-bold text-gray-800">
            {label} {dot && <span className="text-red-400">*</span>}
        </label>
    )
}

export default Label
