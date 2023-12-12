'use client'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const get_categories = gql`
        query Categories{
            categories {
            id,name
            }
        }
    `;
const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const { data, loading, error } = useQuery(get_categories);
    
   

    useEffect(() => {
        if (data) {
            setCategories(data.categories)
        }
    }, [data])

    const showCategories = (categories: any) => {
        let array: any = []
        categories.map((category: any, index: number) => {
            array.push(
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-table-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-table-1" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {category.name}
                    </td>

                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap flex justify-center">
                        <Link
                            href={category.id}
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Edit
                        </Link>
                    </td>
                </tr>
            )
        })
        return array
    }

    if (loading) {
        return (
            <div className="grid  gap-8 grid-cols-1">
                <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row items-center">
                        <h2 className="font-semibold text-lg mr-auto">Category List Page</h2>
                        <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-all"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label htmlFor="checkbox-all" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium text-center tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Category Name
                                            </th>

                                            <th scope="col" className="p-4 text-center">
                                                Edit
                                            </th>
                                        </tr>
                                    </thead>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row items-center">
                    <h2 className="font-semibold text-lg mr-auto">Category List Page</h2>
                    <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor="checkbox-all" className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium text-center tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Category Name
                                        </th>

                                        <th scope="col" className="p-4 text-center">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {showCategories(categories)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
