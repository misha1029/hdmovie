import cn from 'classnames'
import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import Image from 'next/image'
import React, { FC } from 'react'

import { IUploadField } from '../form.interface'

import { useUpload } from './useUpload'

import styles from './UploadField.module.scss'

export const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	isNoImage = false,
	style,
	value,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<div className = {styles.lable}>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</div>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SleletonLoader count={1} className="w-full h-full" />
						) : (
							value && <Image alt='' src={value} layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}
