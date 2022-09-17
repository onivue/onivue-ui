import {
    HiOutlineCheckCircle,
    HiOutlineExclamationCircle,
    HiOutlineInformationCircle,
    HiOutlineXCircle,
} from 'react-icons/hi'

type IconType = {
    as: 'info' | 'success' | 'warning' | 'danger'
    className?: string
}

const iconMapping = {
    info: HiOutlineInformationCircle,
    success: HiOutlineCheckCircle,
    warning: HiOutlineExclamationCircle,
    danger: HiOutlineXCircle,
}
const iconColors = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
}

const Icon = ({ as, className }: IconType) => {
    const Comp = iconMapping[as]

    return <Comp className={className || `h-6 w-6 ${iconColors[as]}`}></Comp>
}

export default Icon
