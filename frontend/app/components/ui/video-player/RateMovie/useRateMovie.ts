import { useState } from "react"
import { RatingService } from "services/rating.service"
import {useMutation, useQuery} from "react-query"
import { toastrError } from "utils/toastrError/toastrError"
import { toastr } from "react-redux-toastr"

export const useRateMovie = (movieId: string) => {

    const [rating, setRating] = useState(0)
    const [isSended, setIsSended] = useState(false)

    const { refetch } = useQuery(
		['rating movie', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess: ({ data }) => {
                setRating(data)
			},
			onError: (error) => {
				toastrError(error, 'Get rating')
			},
			enabled: !!movieId,
		}
	)

	const { mutateAsync } = useMutation(
		'set rating movie',
		({value}: {value: number}) => RatingService.setRating(movieId, value),
		{
			onError: (error) => {
				toastrError(error, 'Rate movie')
			},
			onSuccess() {
                setIsSended(true)
                refetch()

                setTimeout(() => {
                    setIsSended(false)
                }, 2400)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
        setRating(nextValue)
		await mutateAsync({value: nextValue})
	}

    return {handleClick, isSended, rating}
}