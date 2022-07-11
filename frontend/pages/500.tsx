import { Heading } from 'components/ui/heading/Heading'
import React from 'react'
import { Meta } from 'utils/meta/Meta'

export default function Error500 () {
  return (
    <Meta title = 'Page not fount'>
        <Heading title = '500 - Server-side error occurred'/>
    </Meta>
  )
}
