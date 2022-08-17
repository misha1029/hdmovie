import { useAuth } from 'hooks/useAuth'
import { useQuery } from 'react-query'
import { UserService } from 'services/user.service'

export const useFavorites = () => {
	const { user } = useAuth()

	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery('favorites movies', () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user
	})

	return { isLoading, favoriteMovies, refetch }
}
