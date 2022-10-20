import { useCallback, useEffect, useRef } from "react"

function useDebounce(fn: () => void, delay: number) {
    const { current } = useRef({ fn, timer: null } as { fn: () => void; timer: number | null })
    useEffect(
        function () {
            current.fn = fn
        },

        [fn, current],
    )

    return useCallback(
        function f(...args: []) {
            if (current.timer) {
                clearTimeout(current.timer)
            }
            current.timer = window.setTimeout(() => {
                current.fn(...args)
            }, delay)
        },
        [current, delay],
    )
}
export default useDebounce
