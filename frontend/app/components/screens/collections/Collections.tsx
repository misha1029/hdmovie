import { Description } from 'components/ui/heading/Description'
import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'
import { ICollection } from './collections.interface'
import styles from './Collections.module.scss'
import { CollectionsItem } from './CollectionsItem'

const title = 'Discovery'
const description = 'In this sections you will find all genres on our site'


export const Collections: FC<{collections: ICollection[]}> = ({ collections}) => {
  return (

    <Meta title = {title} description={description}>
        <Heading title = {title} className={styles.heading}/>
        <Description text = {description} className = {styles.description}/>
        
        <div className = {styles.collections}>
            {collections.map((c) => (
                <CollectionsItem key = {c._id} collection = {c}/>
            ))}
        </div>
    </Meta>
    
  )
}
