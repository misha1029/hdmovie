import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'
import { AdminHeader } from '../AdminHeader/AdminHeader'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'
import { AdminTable } from '../AdminTable/AdminTable'
import { useMovies } from './useMovie'

export const MovieList: FC = () => {
    const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useMovies()
  return (
    <Meta title = 'Movies'>
        <AdminNavigation/>
        <Heading title = 'Movies'/>
        <AdminHeader handleSearch = {handleSearch} searchTerm = {searchTerm}/>
        <AdminTable isLoading = {isLoading} removeHandler = {deleteAsync}
        headerItems = {['Title', 'Genre', 'Rating']} tableItem = {data || []}/>
    </Meta>
  )
}
