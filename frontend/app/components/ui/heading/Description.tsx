import cn from 'classnames'
import parce from 'html-react-parser'
import React, { FC } from 'react'

export const Description: FC<{ text: string; className?: string }> = ({
	text,
	className,
}) => {
	return (
		<div
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			{parce(text)}
		</div>
	)
}
