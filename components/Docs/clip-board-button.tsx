import useClipboard from 'react-use-clipboard'

interface ClipBoardButtonProps {
    value?: string
}

export function ClipBoardButton({ value = '', ...props }: ClipBoardButtonProps) {
    const [isCopied, setCopied] = useClipboard(value, {
        successDuration: 1000,
    })

    return (
        <button onClick={setCopied} {...props}>
            {isCopied ? <div>SUCCESS!</div> : <div>COPY</div>}
        </button>
    )
}
