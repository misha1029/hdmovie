import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'
import { AdminHeader } from '../AdminHeader/AdminHeader'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'
import { AdminTable } from '../AdminTable/AdminTable'
import { useGenres } from './useGenres'

export const GenreList: FC = () => {
    const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useGenres()
  return (
    <Meta title = 'Genres'>
        <AdminNavigation/>
        <Heading title = 'Genres'/>
        <AdminHeader handleSearch = {handleSearch} searchTerm = {searchTerm}/>
        <AdminTable isLoading = {isLoading} removeHandler = {deleteAsync}
        headerItems = {['Name', 'Slug']} tableItem = {data || []}/>
    </Meta>
  )
}
