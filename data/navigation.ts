type Navigation = {
    title: string
    href: string | null
    children: { title: string; href: string | null; disabled?: boolean }[]
}[]

const disabled = true

export const navigation: Navigation = [
    {
        title: 'FORMS',
        href: null,
        children: [
            { title: 'Button', href: '/comp/button' },
            { title: 'Input, Textarea, Radio, Switch', href: '/comp/forms' },
            { title: 'Select', href: '/comp/select', disabled },
            { title: 'Checkbox', href: '/comp/checkbox', disabled },
        ],
    },
    {
        title: 'INTERACTIONS',
        href: null,
        children: [
            { title: 'Modal', href: '/comp/modal' },
            { title: 'Dropdown', href: '/comp/dropdown' },
        ],
    },
    {
        title: 'MEDIA',
        href: null,
        children: [{ title: 'Icon', href: '/comp/icon' }],
    },
]
