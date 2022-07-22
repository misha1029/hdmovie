import { array } from 'yup'

export const getGenresEach = (index: number, length: number, name: string) =>
	index + 1 === length ? name : name + ', '

interface IArrayItem {
	name: string
}

export const getGenresList = (array: IArrayItem[]) =>
	array.map((i) => i.name).join(', ')
