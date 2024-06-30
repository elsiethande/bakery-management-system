import React from 'react'
import SectionHeaders from './SectionHeaders'

export default function ContactUs() {
  return (
    <section className='items-center my-8'>
        <SectionHeaders
         subHeader={'Dont hesitate'}
         mainHeader={'Contact Us'}
         />
         <div className='mt-8 items-center'>
         <a className='text-4xl' href='tel: +254 715532758'>
            +254 715 532 758
         </a>
         </div>
    </section>
  )
}

