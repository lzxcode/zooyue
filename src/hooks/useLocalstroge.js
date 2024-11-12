import { useEffect, useState } from "react";
const localS = {}
function useLocalstroge(key) {
    const [value, setValue] = useState(localStorage.getItem(key))
    useEffect(() => {
        if (value) {
            localStorage.setItem(key, value)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    if (localS[key]) {
        localS[key] = Object.assign(localS[key], {
            value,
            setValue
        })
    } else {
        localS[key] = {
            value,
            setValue
        }
    }


    return localS[key]
}

export default useLocalstroge