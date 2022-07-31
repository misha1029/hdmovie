import React from 'react'

export const useSlider = (length: number) => {
	const [currentInx, setCurrentInx] = React.useState(0)
	const [slideIn, setSlideIn] = React.useState(true)

	const isExistsNext = currentInx + 1 < length
	const isExistsPrev = currentInx ? currentInx - 1 < length : false

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? currentInx + 1 : currentInx - 1
		setSlideIn(false)

		setTimeout(() => {
			setCurrentInx(newIndex)
			setSlideIn(true)
		}, 300)
	}

	return {
		slideIn,
		index: currentInx,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
		handleClick: handleArrowClick,
	}
}
