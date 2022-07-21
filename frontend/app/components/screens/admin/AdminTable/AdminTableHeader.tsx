import React, { FC } from 'react'
import cn from 'classnames'
import styles from './AdminTable.module.scss'

export const AdminTableHeader: FC<{headerItems:string[]}> = ({ headerItems}) => {
  return (
    <div className = {cn(styles.item, styles.itemHeader)}>
        {headerItems.map((value) => (
            <div key = {value}>{value}</div>
        ))}
        <div>
            Actions
        </div>
    </div>
  )
}
