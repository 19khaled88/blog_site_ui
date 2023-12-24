import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import truncate from '@/lib/text-truncate';
import ContentLoader from 'react-content-loader'
const EditorPage = ({ post }: { post: any }) => {

  const [editorPics, setEditorPics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (post && post[0] != undefined) {
      const { posts } = (post[0])
      setEditorPics(posts)
      setLoading(false)
    }
  }, [post]);

  

  const editorsPicture = (data: any) => {
    let array: any = []
    data.map((item: any, index: number) => {
      const source = item.title
      array.push(
        <div key={index} className='p-2 grid grid-cols-2 md:grid-cols-1 items-center gap-3'>
          <Image className={`
            w-full 
            h-full 
            pb-3
          `} src={item.avatar} alt='No image' width={500} height={500} />
          <h1 className=''>{truncate({ source, size: 25 })}</h1>
        </div>
      )
    })
    return array
  }

  return (
    <div className='bg-gradient-to-tr from-violet-500 to-orange-300 grid md:grid-cols-1 lg:grid-cols-3 gap-3 p-5'>
      <div className='flex flex-col pt-5 lg:col-span-2'>
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
        <div className='grid md:grid-cols-3 pb-5'>
          {
            loading ?
              <>
                <ContentLoader
                  speed={2}
                  className='w-fit h-fit'
                  
                  viewBox="0 0 450 300"
                  backgroundColor="#f5f5f5"
                  foregroundColor="#dbdbdb"
                >
                  <rect x="12" y="35" rx="0" ry="0" width="6" height="246" />
                  <rect x="14" y="34" rx="0" ry="0" width="408" height="6" />
                  <rect x="416" y="34" rx="0" ry="0" width="6" height="246" />
                  <rect x="12" y="276" rx="0" ry="0" width="408" height="6" />
                  <rect x="150" y="53" rx="6" ry="6" width="127" height="15" />
                  <rect x="37" y="77" rx="7" ry="7" width="361" height="139" />
                  <rect x="58" y="225" rx="0" ry="0" width="316" height="8" />
                  <rect x="86" y="238" rx="0" ry="0" width="267" height="8" />
                  <rect x="58" y="252" rx="0" ry="0" width="316" height="8" />
                </ContentLoader>
                <ContentLoader
                  speed={2}
                  className='w-fit h-fit'
                  
                  viewBox="0 0 450 300"
                  backgroundColor="#f5f5f5"
                  foregroundColor="#dbdbdb"
                >
                  <rect x="12" y="35" rx="0" ry="0" width="6" height="246" />
                  <rect x="14" y="34" rx="0" ry="0" width="408" height="6" />
                  <rect x="416" y="34" rx="0" ry="0" width="6" height="246" />
                  <rect x="12" y="276" rx="0" ry="0" width="408" height="6" />
                  <rect x="150" y="53" rx="6" ry="6" width="127" height="15" />
                  <rect x="37" y="77" rx="7" ry="7" width="361" height="139" />
                  <rect x="58" y="225" rx="0" ry="0" width="316" height="8" />
                  <rect x="86" y="238" rx="0" ry="0" width="267" height="8" />
                  <rect x="58" y="252" rx="0" ry="0" width="316" height="8" />
                </ContentLoader>
                <ContentLoader
                  speed={2}
                  className='w-fit h-fit'
                  
                  viewBox="0 0 450 300"
                  backgroundColor="#f5f5f5"
                  foregroundColor="#dbdbdb"
                >
                  <rect x="12" y="35" rx="0" ry="0" width="6" height="246" />
                  <rect x="14" y="34" rx="0" ry="0" width="408" height="6" />
                  <rect x="416" y="34" rx="0" ry="0" width="6" height="246" />
                  <rect x="12" y="276" rx="0" ry="0" width="408" height="6" />
                  <rect x="150" y="53" rx="6" ry="6" width="127" height="15" />
                  <rect x="37" y="77" rx="7" ry="7" width="361" height="139" />
                  <rect x="58" y="225" rx="0" ry="0" width="316" height="8" />
                  <rect x="86" y="238" rx="0" ry="0" width="267" height="8" />
                  <rect x="58" y="252" rx="0" ry="0" width="316" height="8" />
                </ContentLoader>
              </>


              :
              editorsPicture(editorPics)
          }

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