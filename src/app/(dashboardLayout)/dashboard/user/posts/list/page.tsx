'use client'
import { gql, useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import { useEffect, useState, CSSProperties } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast as toastify } from 'react-toastify';
import { MdModeEdit } from "react-icons/md";
import GridLoader from "react-spinners/GridLoader";
import Delete_Modal from "@/components/modal/delete_modal";
const POSTS = gql`
        query Posts{
            posts {
                id,title,content,avatar,published,createdAt,cate_id,user {
                  id,name,email,createdAt
                },category {
                  id,name
                }
              }
        }
    `;

const POST_DELETE = gql`
    mutation DeletePost($postId: ID!){
        post_delete(postId: $postId) {
        message,status,result {
            id,title,content
        }
        }
    }
`;


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const ListPage = () => {
    const [posts, setPosts] = useState([])
    const { data, loading, error } = useQuery(POSTS)
    const [deletePost, { loading: postLoading, error: postError }] = useMutation(POST_DELETE)
    const [popUp, setPopUp] = useState(false)
    let [color, setColor] = useState("#163020");


    useEffect(() => {
        if (data) {

            setPosts(data.posts)
        }
    }, [data])

    const handleDelete = async (id: string) => {
        console.log(id)
        const res = await deletePost({
            variables: {
                "postId": Number(id)
            }
        })

        if (res.data.post_delete.status === 200) {
            toastify.success(res.data.post_delete.message)
        } else if (res.data.post_delete.status === 400) {
            toastify.warn(res.data.post_delete.message)
        }
    }

    const showPost = (data: any) => {
        let array: any = []
        data.map((item: any, index: number) => {
            array.push(
                <tr key={index} className="border-b border-blue-gray-50">
                    <td >
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.id}</p>

                            </div>
                        </div>
                    </td>
                    <td >
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.category.name}</p>

                            </div>
                        </div>
                    </td>
                    <td className="w-fit">
                        <div className="flex flex-col w-fit">
                            <Image src={item.avatar}
                                style={{ height: '50px', width: '50px' }}
                                width={1500}
                                height={1500}
                                alt="No Image"
                                className=""
                            />
                            <div className="flex items-center w-fit">
                                <p className="w-fit block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{`${(item.title).substr(0,15)}...`}</p>
                            </div>
                        </div>
                    </td>
                    <td >
                        <div className="flex flex-col">

                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{`${(item.content).substr(0,25)}...`}</p>
                        </div>
                    </td>
                    <td >
                        <div className="w-max">
                            <div className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${item.published === false ? 'bg-pink-500/20' : 'bg-green-500/20'}  text-green-600 py-1 px-2 text-xs rounded-md`} style={{ opacity: 1 }}>
                                <span className="">{item.published === false ? 'Unpublished' : 'Published'}</span>
                            </div>
                        </div>
                    </td>
                    <td >
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.createdAt}</p>
                    </td>
                    <td >
                        <div className="h-full flex items-center justify-center gap-5">
                            <button onClick={() => handleDelete(item.id)}> <RiDeleteBin6Fill className="cursor-pointer h-full" /></button>
                            {popUp && <Delete_Modal setPopUp={setPopUp} />}
                            <button><MdModeEdit className="cursor-pointer h-full" /></button>
                        </div>
                    </td>
                </tr>
            )
        })

        return array
    }

    if (loading) {
        return <div className="h-screen flex items-center justify-center">

            <GridLoader
                color={color}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    }
    return <div className="p-6 overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">ID
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Category
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Title
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Content
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Status
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">CreatedAt
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Actions</p>
                    </th>
                </tr>
            </thead>
            <tbody>

                {

                    showPost(posts)
                }

                {/* <tr>
              <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Angular Project</p>
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                      </div>
                  </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                      <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg" alt="Alexa Liras" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                      <div className="flex flex-col">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Alexa Liras</p>
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">alexa@creative-tim.com</p>
                      </div>
                  </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Programator</p>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Developer</p>
                  </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                      <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-purple-500/20 text-purple-600 py-1 px-2 text-xs rounded-md" style={{opacity: 1}}>
                          <span className="">active</span>
                      </div>
                  </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                  <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                      <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                          </svg>
                      </span>
                  </button>
              </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Tailwind Project</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Laurent Perrier" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Laurent Perrier</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">laurent@creative-tim.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Executive</p>
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Projects</p>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="w-max">
                                <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md" style={{opacity: 1}}>
                                    <span className="">Scheduled
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">19/09/17</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                    </svg>
                                </span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Laravel Project</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt="Michael Levi" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Michael Levi</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">michael@creative-tim.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Programator</p>
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Developer</p>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="w-max">
                                <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md" style={{opacity: 1}}>
                                    <span className="">Completed</span>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24/12/08</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                    </svg>
                                </span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Astro Project</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4">
                            <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg" alt="Richard Gran" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md" />
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Richard Gran</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">richard@creative-tim.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4">
                            <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Manager</p>
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Executive</p>
                            </div>
                        </td>
                        <td className="p-4">
                            <div className="w-max">
                                <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md" style={{opacity: 1}}>
                                    <span className="">Pending</span>
                                </div>
                            </div>
                        </td>
                        <td className="p-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">04/10/21</p>
                        </td>
                        <td className="p-4">
                            <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                    </svg>
                                </span>
                            </button>
                        </td>
                    </tr> */}
            </tbody>
        </table>
    </div>
};

export default ListPage;
