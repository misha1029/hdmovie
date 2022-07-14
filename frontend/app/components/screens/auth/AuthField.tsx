import Field from 'components/ui/form-elements/Field'
import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { validEmail } from 'shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

export const AuthField: FC<any> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Plese enter a valid email address',
					},
				})}
				placeholder="E-mail"
                error = {errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbol',
								},
						  }
						: {}
				)}
				placeholder="password"
				type="password"
                error = {errors.password}
			/>
		</>
	)
}
