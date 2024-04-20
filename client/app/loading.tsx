import Wraper from '@/components/global/Wraper'
import React from 'react'

function loading():React.ReactElement {
  return (
    <Wraper title='Please Wait...'>
        <div className='flex justify-center items-center'>
        <span className="loading loading-infinity loading-lg"></span>
        </div>
    </Wraper>
  )
}

export default loading