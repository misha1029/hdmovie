import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useQuery, useMutation} from "react-query";
import { toastr } from "react-redux-toastr";
import { UserService } from "services/user.service";
import { toastrError } from "utils/toastrError/toastrError";
import { IProfileInput } from "./profile.interface";

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) =>  {
    const { isLoading } = useQuery(
		'profile',
		() => UserService.getProfile(),
		{
			onSuccess: ({ data }) => {
                setValue('email', data.email)
			},
			onError: (error) => {
				toastrError(error, 'Get movie')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError: (error) => {
				toastrError(error, 'Get movie')
			},
			onSuccess() {
				toastr.success('Update movie', 'update was successfull')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

    return {onSubmit, isLoading}
}