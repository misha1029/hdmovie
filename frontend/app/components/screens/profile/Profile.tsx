import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import { Button } from 'components/ui/form-elements/Button'
import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Meta } from 'utils/meta/Meta'

import { AuthField } from '../auth/AuthField'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import { useProfile } from './useProfile'

export const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title="Auth">
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SleletonLoader count={2} />
				) : (
					<AuthField formState={formState} register={register} />
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	)
}
