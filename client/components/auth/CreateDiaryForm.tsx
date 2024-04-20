import { createDiaryAction } from '@/actions/createDiaryAction'
import React from 'react'

function CreateDiaryForm():React.ReactElement {

  return (
    <form action={createDiaryAction} className='flex flex-col gap-4 max-w-xl mx-auto '>
        <textarea 
        placeholder='isi diarymu'
        className='h-52 p-4 text-lg rounded placeholder:opacity-30'
        name='content'/>

        <button 
        className='btn btn-primary' type='submit'>Create Now</button>
      </form>
  )
}

export default CreateDiaryForm