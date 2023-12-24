"use client";
import { gql, useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useState,useRef } from "react";
import { toast as toastify } from 'react-toastify';

const CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($post: PostData!) {
    post_create(post: $post) {
      message
      status
      result {
        title
        avatar
        content
        cate_id
      }
    }
  }
`;

const CreatePage = () => {
  const [categories, setCategories] = useState([]);
  let selectCate = useRef<HTMLSelectElement>(null);

  //grqphql endpoint
  const { data, loading, error } = useQuery(CATEGORIES);
  const [post_insert, { loading: post_create_loading, error: category_error }] =
    useMutation(CREATE_POST);

  const [inputs, setInputs] = useState({
    title: "",
    short_name: "",
    content: "",
    cate_id: "",
  });
  const [image, setImage] = useState<File | string>("");
  const [createObjectURL, setCreateObjectURL] = useState<string>("");

  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "daamw3ao");

      const fetched = await fetch('https://api.cloudinary.com/v1_1/be-fresh-ltd/image/upload', {
        method: 'POST',
        body: formData
      }).then((response) => response.json()).catch(error => error.json())

      if (fetched && !fetched.error) {
        const newCate = Number(inputs.cate_id);
        const post = { ...inputs, cate_id: newCate, avatar: fetched.secure_url };

        const result = await post_insert({ variables: { post: post } });
        if (result.data.post_create.status === 200) {
          toastify.success(result.data.post_create.message)
          for(let i in inputs){
            setInputs((values)=>({...values,[i]:""}))
          };
          setCreateObjectURL("");
          if(selectCate.current != null){
            selectCate.current.value = "Select an option ..."
          }
          
        } else if (result.data.post_create.status === 400) {
          toastify.success(result.data.post_create.message)
        }
      }

    } catch (error) {
      toastify.success('Something wrong!')
    }
  };

  const changeHandler = (event: any) => {
    const name = event.target.name;

    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));

    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const showCategories = (categories: any) => {
    let array: any = [];
    categories.map((category: any, index: number) => {
      array.push(
        <option key={index} value={category.id}>
          {category.name}
        </option>
      );
    });
    return array;
  };

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  

  return (
    <div>
      <h2 className=" font-semibold leading-7 text-start text-2xl text-gray-900">
        Post Create Page
      </h2>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="space-y-6">
          <div className="">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
              <div className="col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-start text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      name="title"
                      onChange={changeHandler}
                      id="title"
                      value={inputs.title}
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter post title"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-start text-gray-900"
                >
                  Short Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      name="short_name"
                      onChange={changeHandler}
                      id="short_name"
                      value={inputs.short_name}
                      autoComplete="short_name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Short Name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-4">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-start text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    id="content"
                    name="content"
                    onChange={changeHandler}
                    rows={4}
                    value={inputs.content}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-4">
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium leading-6 text-start text-gray-900"
                >
                  Avatar
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    Select Avatar
                    {
                      createObjectURL === "" ?
                        <svg
                          className="mx-auto h-12 w-12 text-gray-300"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        : <Image src={createObjectURL} width={200} height={200} alt="No Image" />

                    }

                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="avatar"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="avatar"
                          name="avatar"
                          type="file"
                          // onChange={uploadToClient}
                          onChange={changeHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className=" pb-12">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="cate_id"
                  className="block text-sm font-medium leading-6 text-start text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="cate_id"
                    name="cate_id"
                    autoComplete="cate_id"
                    onChange={changeHandler}
                    ref={selectCate}
                    defaultValue={'DEFAULT'}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  >
                    <option value="DEFAULT" disabled>Select an option ...</option>
                    {loading ? (
                      <option
                        disabled
                        className="flex gap-4 flex-wrap justify-center"
                      >
                        Loading...
                      </option>
                    ) : (

                      showCategories(categories)
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-row items-center justify-start gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 px-6 py-1.5 border border-gray-500 hover:bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 border border-indigo-600 hover:border-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
