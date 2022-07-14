import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Form.module.scss'
import { IButton } from './form.interface'

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}
