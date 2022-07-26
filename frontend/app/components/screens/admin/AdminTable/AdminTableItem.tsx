import React, { FC } from 'react'
import { AdminActions } from './AdminActions/AdminActions'
import { IAdminTable } from './adminTable.interface'
import styles from './AdminTable.module.scss'

export const AdminTableItem: FC<IAdminTable>= ({removeHandler, tableItem}) => {
  return (
    <div className = {styles.item}>
        {tableItem.items.map((value)=> (
            <div key = {value}>{value}</div>
        ))}
        <AdminActions editUrl = {tableItem.editUrl} removeHandler = {removeHandler}/>
    </div>
  )
}
