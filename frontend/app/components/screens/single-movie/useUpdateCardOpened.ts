import { useEffect } from "react"
import { useMutation } from "react-query"
import { MovieService } from "services/movie.service"

export const useUpdateCardOpened = (slug: string) => {
    const { mutateAsync } = useMutation(
		'update count opened',
		() => MovieService.updateCountOpened(slug),
	)

    useEffect(() => {
        mutateAsync()

    }, [])
}