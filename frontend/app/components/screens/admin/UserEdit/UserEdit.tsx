import { AuthField } from 'components/screens/auth/AuthField'
import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import { Button } from 'components/ui/form-elements/Button'
import Field from 'components/ui/form-elements/Field'
import { SlugField } from 'components/ui/form-elements/SlugField/SlugField'
import { Heading } from 'components/ui/heading/Heading'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { Meta } from 'utils/meta/Meta'
import { generateSlug } from 'utils/string/generateSlug'

import stylesForm from '../../../ui/form-elements/admin-form.module.scss'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'

import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'

export const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, getValues, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title="Edit user">
			<AdminNavigation />
			<Heading title="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SleletonLoader count={3} />
				) : (
					<>
						<AuthField register={register} formState={formState} />

						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className = 'text-link block mb-7'
								>
									{field.value ? 'Make it regular user' : 'Make it admin'}
								</button>
							)}
						></Controller>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}
