import classNames from 'classnames'

type NoteProps = {
    emoji?: string
} & React.ComponentPropsWithRef<'div'>

export const Note = ({ emoji, children }: NoteProps) => {
    return (
        <aside
            className={classNames(
                'flex gap-4 rounded-md border p-4',
                'bg-gray-100',
                'dark:border-gray-700 dark:bg-gray-800',
            )}
        >
            {emoji ? <span>{emoji}</span> : null}
            <div>{children}</div>
        </aside>
    )
}

export default Note
