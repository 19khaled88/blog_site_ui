import React from 'react'

const CategoryCreatePage = () => {
    return (
        <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row items-center">
                    <h2 className="font-semibold text-lg mr-auto">Category Create Page</h2>
                    <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div className="mt-5">
                    <div className="form">
                        <div className="mb-3 space-y-2 w-full text-xs"> 
                        </div>
                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                            <div className="w-full flex flex-col mb-3">
                                <label className="font-semibold text-gray-600 py-2 text-lg text-left">Company Address<abbr title="required">*</abbr></label>
                                <input 
                                placeholder="Category name" 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" 
                                type="text" name="integration[street_address]" id="integration_street_address" />
                            </div>
                        </div>
                        <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
                            asterisk <abbr title="Required field">*</abbr></p>
                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
                            <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCreatePage