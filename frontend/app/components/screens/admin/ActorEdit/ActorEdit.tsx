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

import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'

/* const DynamicTextEditor = dynamic(
	() => import('components/ui/form-elements/TextEditor'),
	{ ssr: false }
) */

export const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={stylesForm.form}>
				{isLoading ? (
					<SleletonLoader count={3} />
				) : (
					<>
						<div className={stylesForm.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('name')))
								}}
							/>

							{/* 						<Controller
							control={control}
							name="photo"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder="Description"
								/>
							)}
							rules={{
								validate: (v) =>
									(v && stripHtml(v).result.length > 0) ||
									'Description is required',
							}}
						/> */}
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}
