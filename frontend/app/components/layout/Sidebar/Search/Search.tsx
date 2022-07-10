import { SearchField } from 'components/ui/search/SearchField'
import React, { FC } from 'react'

import { SeachList } from './SeachList/SeachList'
import { useSearch } from './SeachList/useSearch'
import styles from './Search.module.scss'

export const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
            <SearchField searchTerm = {searchTerm} handleSearch = {handleSearch}/>
			{isSuccess && <SeachList movies={data || []} />}
		</div>
	)
}
