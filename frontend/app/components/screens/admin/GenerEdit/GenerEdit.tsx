import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import Field from 'components/ui/form-elements/Field'
import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Meta } from 'utils/meta/Meta'

import { AdminNavigation } from '../AdminNavigation/AdminNavigation'

import { IGenerEditInput } from './gener-edit.interface'
import { useGenerEdit } from './useGenerEdit'

export const GenerEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenerEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useGenerEdit(setValue)

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SleletonLoader count={3} />
				) : (
					<>
						<div>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>{/* Slug */}</div>
							<Field
								{...register('icon', {
									required: 'Icon is required!',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
							<button>Update</button>
						</div>
					</>
				)}
			</form>
		</Meta>
	)
}
