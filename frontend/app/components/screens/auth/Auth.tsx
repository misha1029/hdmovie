import { Button } from 'components/ui/form-elements/Button'
import { Heading } from 'components/ui/heading/Heading'
import { useAuth } from 'hooks/useAuth'
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Meta } from 'utils/meta/Meta'

import styles from './Auth.module.scss'
import { AuthField } from './AuthField'
import { IAuthInput } from './auth.iterface'
import { useAuthRedirect } from './useAuthRedirect'
import { useActions } from 'hooks/useActions'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()

	const [type, setType] = React.useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState,
	} = useForm<any>({
		mode: 'onChange',
	})

	const {login, register} = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthField
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>
					<div className={styles.button}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
