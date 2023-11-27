import { editors_pict } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'

const EditorPage = () => {

  const editorsPicture = (data: any) => {
    let array: any = []
    data.map((item: any, index: number) => {
      array.push(
        <div key={index} className='p-2'>
          <Image style={{ width: '100%', height: '100%', paddingBottom: '10px' }} src={item.image} alt='No image' width={500} height={500} />
          <h1>{item.title}</h1>
        </div>
      )
    })
    return array
  }
  return (
    <div className='bg-gradient-to-tr from-violet-500 to-orange-300 grid grid-cols-3 gap-3 p-5'>
      <div className='flex flex-col py-5 col-span-2'>
        <span className='flex flex-row justify-between items-center px-2 '>

          <h1 className='text-2xl font-semibold text-white'>
            Editors Pick
          </h1>
          <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
          <p className='hover:translate-x-2 transition duration-500'> 
            View All
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </span>
        <div className='flex flex-row pb-5'>
          {editorsPicture(editors_pict)}
        </div>
      </div>
      <div className='flex flex-col gap-3 mt-5 p-5' style={{ boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px' }}>
        <h1 className='text-3xl text-white font-semibold'>Subscribe to Our Newsletter</h1>
        <p className='text-gray-700 font-semibold'>gravida aliquet vulputate faucibus tristique odio.</p>
        <div className="w-72 gap-5">
          <div>

            <div className="relative mt-2 rounded-md shadow-sm">

              <input type="text"
                name="email" id="email"
                className=" w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Email Address" />

            </div>
          </div>
          <button
            className="transform hover:scale-110 transition duration-500 ease-in-out bg-indigo-500 text-white font-bold px-5 py-2 mt-5 rounded-full">
            Subscribe
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default EditorPage