import cn from 'classnames'
import { MaterialIcon } from 'components/ui/MaterialIcon'
import React, { FC } from 'react'

import styles from './SliderArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

export const SliderArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left'
	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}
