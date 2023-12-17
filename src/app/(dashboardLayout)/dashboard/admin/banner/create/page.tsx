"use client";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { toast as toastify } from 'react-toastify';
import styles from "../../../../../../css/image_upload.module.css";
import Image from "next/image";

const UPLOAD_IMAGE = gql`
mutation CreateBanner($imageUrl: String!, $title: String!){
  create_banner(imageUrl: $imageUrl, title: $title) {
    message,status,result {
      id,userId,imageUrl
    }
  }
}
`;

const BanerPage = () => {
  const [imageUrl, setFile] = useState<File | any>("");
  const [inputs, setInputs] = useState({
    title: ""
  })
  const [createObjectURL, setCreateObjectURL] = useState<string>("");
  const [imageUpload, { loading, error }] = useMutation(UPLOAD_IMAGE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));

    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setCreateObjectURL(URL.createObjectURL(e.target.files[0]));
    }

  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setCreateObjectURL("");
    setFile("");
  };

  const handleUpload = async () => {
    if (!imageUrl) {
      console.error("No file selected.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", imageUrl);
      formData.append("upload_preset", "daamw3ao");

      const fetched = await fetch('https://api.cloudinary.com/v1_1/be-fresh-ltd/image/upload', {
        method: 'POST',
        body: formData
      }).then((response) => response.json()).catch(error => error.json())

      if (fetched && !fetched.error) {
        const result = await imageUpload({
          variables: { ...inputs, imageUrl: fetched.secure_url }
        });
        if (result.data.create_banner.status === 200) {
          toastify.success(result.data.create_banner.message)
        } else if (result.data.create_banner.status === 400) {
          toastify.warn(result.data.create_banner.message)
         
        }
      }
    } catch (error: any) {
      toastify.error(error.message);
     
    }
  };

  return (
    <div className="flex flex-col justify-center w-96">
      <h1 className="py-5 bg-orange-100 w-full text-left pl-2 text-2xl">Create New Banner</h1>
      <div className="flex items-center gap-2">
        <label>Banner Title</label>
        <input onChange={handleChange} type="text" name="title" placeholder="Enter banner title" className="block flex-1 border my-2 border-green-600 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <input
          className="py-5"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        {createObjectURL != "" ? (
          <Image
            src={createObjectURL}
            className={`${styles.image}`}
            alt="Thumb"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="bg-green-300 px-3 py-1 rounded-md "
          onClick={handleUpload}
        >
          Upload Image
        </button>
        <button
          onClick={removeSelectedImage}
          className={`${styles.delete} rounded-md`}
        >
          Remove Image
        </button>
      </div>
    </div>
  );
};

export default BanerPage;
