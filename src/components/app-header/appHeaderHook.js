import { useEffect, useState } from "react"

function UseAppHeader() {
    const [showHeight, setShowHeight] = useState(200)
    const [boxHeight, setBoxHeight] = useState(60)
    const [boxWidth, setBoxwWidth] = useState(400)

    const [showOpacity, setShowOpacity] = useState(1)
    const [isScrollDown, setIsScrollDown] = useState(false)
    function setVar() {
        const height = document.documentElement.scrollTop
        if (height > 80) {
            setIsScrollDown(true)
            setShowHeight(80)
            setShowOpacity(0)
            setBoxHeight(30)
            setBoxwWidth(300)
        } else {
            setIsScrollDown(false)
            setShowHeight(200)
            setShowOpacity(1)
            setBoxHeight(60)
            setBoxwWidth(400)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setVar)
        return () => {
            window.removeEventListener('scroll', setVar)
        }
    }, [])
    return {
        showHeight, showOpacity, boxHeight, boxWidth, isScrollDown,
        setShowHeight, setShowOpacity, setBoxHeight, setBoxwWidth, setIsScrollDown
    }
}
export default UseAppHeader