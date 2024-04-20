import React from 'react'

type ParamsProps = {
    title: string;
    children? : any;
}

const Wraper = ({ title, children } : ParamsProps):React.ReactElement => {
  return (
    <section className='container mx-auto px-4 '>
        <h1 className='text-center text-xl mb-8 font-bold'>{title}</h1>
        {children}
    </section>
  )
}

export default Wraper