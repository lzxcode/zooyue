import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { DragOverScreen } from './style'
const index = memo((props) => {
  const [isDrag, setIsDrag] = useState(false)
  const [dragInitialHeight, setdragInitialHeight] = useState(0)
  const [open, setOpen] = useState(false)
  const [initHeight, setInitHeight] = useState(0)
  const content = useRef()
  const { height = "200px", width = "100%" } = props
  const [initScrollStatus, setInitScrollStatus] = useState("")
  function onMouseDown(e) {
    console.log(e, 2222);

    e.preventDefault()
    setIsDrag(true)
    setdragInitialHeight(e.screenY)
  }

  function onMouseUp(e) {
    e.preventDefault()
    setIsDrag(false)
  }
  function onMouseOut(e) {
    e.preventDefault()
    setIsDrag(false)
  }
  function onMouseMove(e) {
    e.preventDefault()
    if (!isDrag) return
    const dragHeight = e.screenY - dragInitialHeight
    if (dragHeight > 50) {
      setOpen(true)
      if (document.body.scrollHeight > window.innerHeight) {
        setInitScrollStatus(getComputedStyle(document.body).overflow)
        console.log(getComputedStyle(document.body).overflow,999999);
        document.body.style.overflow = 'hidden'
      }
      setIsDrag(false)

    } else if (dragHeight < -50) {
      setOpen(false)
      if (initScrollStatus) {
        document.body.style.overflow = initScrollStatus
      }
      setIsDrag(false)
    }

  }

  useEffect(() => {
    setInitHeight(height)
  }, [props.children])
  return (
    <DragOverScreen $open={open} $initHeight={initHeight} $initWidth={width}>
      <div ref={content} className='content' onTouchStart={onMouseDown} onMouseDown={onMouseDown}
        onMouseUp={onMouseUp} onMouseOut={onMouseOut} onMouseMove={onMouseMove}>
        {props.children}

      </div>
    </DragOverScreen>
  )
})

index.propTypes = {
  height: PropTypes.number || PropTypes.string,
  width: PropTypes.number || PropTypes.string,
}

export default index