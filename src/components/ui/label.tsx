import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> { }
export function Label({ children, ...props }: Props) {
    return (
        <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
            {...props}
        >
            {children}
        </label>

    )
}

export default Label