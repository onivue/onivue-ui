// https://github.com/Aryan-mor/reacthelper/blob/master/src/helper/useOpenWithBrowserHistory.js
import _ from 'lodash'
import { useEffect, useState } from 'react'

export const tryIt = (fun, defaultVal) => {
    try {
        return fun()
    } catch (e) {
        return _.isFunction(defaultVal) ? defaultVal() : defaultVal
    }
}

export const getSafe = (fun, defaultVal) => tryIt(fun, defaultVal)

const listOfListener = {}

function onPopState(event) {
    _.forEach(listOfListener, (l) => {
        tryIt(() => l(event))
    })
}

const buttonDelay = 0

export default function useOpenWithBrowserHistory(uniq, defaultValue) {
    const [openDelay, setOpenDelay] = useState(false)
    const [closeDelay, setCloseDelay] = useState(false)
    const [open, setOpen] = useState(false)
    const [element, setElement] = useState(undefined)

    useEffect(() => {
        if (!listOfListener[uniq]) {
            listOfListener[uniq] = function (event) {
                const state = event.state
                const data = getSafe(() => state[uniq], undefined)
                if (!state || data !== true) {
                    setOpen(false)
                    return
                }
                if (data === true) {
                    setOpen(true)
                }
            }
        }
        window.onpopstate = onPopState
        if (defaultValue) {
            handleOpenClick()
        }

        return () => {
            tryIt(() => {
                delete listOfListener[uniq]
            })
        }
    }, [])

    const handleOpenClick = (open = true) => {
        if (openDelay === true) return
        setOpenDelay(true)

        const openProcess = () => {
            const data = {}
            data[uniq] = true
            // eslint-disable-next-line no-undef
            history.pushState(data, null, location.href)
            setOpen(true)

            setTimeout(() => {
                setOpenDelay(false)
            }, buttonDelay)
        }

        const target = tryIt(() => open.target)

        if (target) {
            setElement(target)
            scrollToElement(target)
            setTimeout(() => {
                openProcess()
            }, 0)
            return
        }
        openProcess()
    }

    const handleCloseClick = () => {
        if (closeDelay === true) return
        setCloseDelay(true)
        if (element) {
            window.onscroll = () => {
                scrollToElement()
            }
            setTimeout(() => {
                window.onscroll = () => null
                setElement(undefined)
            }, 0)
        }
        window.history.back()

        setTimeout(() => {
            setCloseDelay(false)
        }, buttonDelay)
    }

    function scrollToElement(target = element) {
        tryIt(() =>
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
            }),
        )
    }

    const handleSetOpen = (open) => {
        if (open) {
            handleOpenClick(open)
            return
        }
        handleCloseClick()
    }

    const handleClose = () => {
        setOpen(false)
    }

    return [open, handleSetOpen, handleOpenClick, handleClose]
}
