import React from 'react'
import Wraper from '@/components/global/Wraper'
import { AuthUser } from '@supabase/supabase-js'
function page():React.ReactElement {
  
  return (
    <Wraper title='INI Diary Mu ' >
        <p>INI KUMPULAN DIARY</p>
    </Wraper>
  )
}

export default page