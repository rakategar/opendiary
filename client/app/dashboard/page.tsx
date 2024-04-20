import CreateDiaryForm from '@/components/auth/CreateDiaryForm'
import Wraper from '@/components/global/Wraper'
import React from 'react'

const page = ():React.ReactElement => {
  return (
    <Wraper title='Dash Board'>
      <CreateDiaryForm/>
    </Wraper>
    
  )
}

export default page