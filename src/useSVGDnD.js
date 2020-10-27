import React from 'react'

export const useSvgDnD = (position, setPosition) => {
  const handleMouseMove = React.useRef(e => {
    setPosition(position => {
      const xDiff = position.coords.x - e.pageX
      const yDiff = position.coords.y - e.pageY
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      }
    })
  })

  const handleMouseDown = e => {
    // Save the values of pageX and pageY and use it within setPosition.
    const pageX = e.pageX
    const pageY = e.pageY
    setPosition(position =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
          y: pageY,
        },
      }),
    )
    document.addEventListener('mousemove', handleMouseMove.current)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove.current)
    // Use Object.assign to do a shallow merge so as not to
    // totally overwrite the other values in state.
    setPosition(position =>
      Object.assign({}, position, {
        coords: {},
      }),
    )
  }

  return [handleMouseDown, handleMouseUp]
}
