import React from 'react'
import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'
import {useForm} from 'react-hook-form'
import contactImage from "../assets/contact-image.jpeg"
export default function Cotact() {
    const {register,trigger,formState:{errors}} = useForm()

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault()
        }
    }
  return (
    <section className="py-48" id="contact">
        <motion.div
        initial="hidden"
        whileInView={`visible`}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, scale:0.8 },
            visible: { opacity: 1, scale:1 },
          }}
      >
        <div>
        <p className="font-playfair font-semibold text-4xl">
          <span className='text-yellow'>CONTACT ME</span> TO GET STARTED
        </p>
        <div className='flex md:justify-end my-5'>
        <LineGradient width="mx-auto w-2/5" />
        </div>
        </div>
      </motion.div>


      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
        className='basis-1/2 flex justify-center'
         initial="hidden"
         whileInView={`visible`}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
             hidden: { opacity: 0, y:50 },
             visible: { opacity: 1, y:0 },
           }}
        >
            <img src={contactImage} alt="contact image" />


        </motion.div>


      <motion.div
      className='basis-1/2 mt-10 md:mt-0'
       initial="hidden"
       whileInView={`visible`}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
           hidden: { opacity: 0, scale:0.8 },
           visible: { opacity: 1, scale:1 },
         }}
      >
        <form action="https://formsubmit.co/lukashinjikashvili84@gmail.com"
        target='_blank'
        onSubmit={onSubmit}
        method='POST'
        >
            <input type="text" className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
            placeholder='NAME'
            {...register("name",
            {
                required:true,
                maxLength:100,
            })}
            />
            {errors.name && (
                <p className='text-red mt-1'>
                    {errors.name.type === 'required' && 'This field is Required'}
                    {errors.name.type === 'maxLength' && 'Max length is 100 characters'}
                </p>
            )}
            <input type="text" 
            className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
            placeholder='EMAIL'
            {...register("email",{
                required:true,
                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            />
          {errors.email && (
              <p className='text-red mt-1'>
              {errors.email.type === 'required' && 'This field is Required'}
                      {errors.email.type === 'pattern' && 'Invlid email adress'}
              </p>
          )}

<textarea type="text" 
            className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
            placeholder='MESSAGE'
            rows="4"
            columns="50"
            {...register("message",{
                required:true,
                maxLength:2000,
            })}
            />
          {errors.message && (
              <p className='text-red mt-1'>
              {errors.message.type === 'required' && 'This field is Required'}
                      {errors.message.type === 'maxLength' && 'Max Length is 2000 char.'}
              </p>
          )}

          <button className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
          hover:text-white transition duration-500
          
          '>
            SEND ME A MESSAGE
          </button>
        </form>
      </motion.div>
      </div>
    </section>
  )
}
