import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'
import { AdminHeader } from '../AdminHeader/AdminHeader'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'
import { AdminTable } from '../AdminTable/AdminTable'
import { useUsers } from './useUsers'

export const UserList: FC = () => {
    const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useUsers()
  return (
    <Meta title = 'Users'>
        <AdminNavigation/>
        <Heading title = 'Users'/>
        <AdminHeader handleSearch = {handleSearch} searchTerm = {searchTerm}/>
        <AdminTable isLoading = {isLoading} removeHandler = {deleteAsync}
        headerItems = {['Email', 'Date register']} tableItem = {data || []}/>
    </Meta>
  )
}
