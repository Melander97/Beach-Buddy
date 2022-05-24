import React from 'react'
import sass from '../addlocation/AddLocation.scss'

const AddLocation = () => {
  return (
<div className="pageWrapper">

	{/* Component here */}

  <div class="w-full h-screen flex items-center justify-center my-3 ">
    <div class="bg-[#EDC891] w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <button class="w-full h-12 rounded-lg bg-yellow-500 text-gray-200 uppercase font-semibold hover:bg-blue-700 transition mb-4">Title</button>
        <button class="w-full h-12 rounded-lg bg-orange-500 text-gray-200 uppercase font-semibold hover:bg-blue-700 transition mb-4">Address</button>
        <button class="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 transition mb-4">Directions</button>
        <button class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 transition mb-4">Upload Image</button>
        <button class="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-4">Add Location</button>
    </div>
</div>


</div>
  )
}

export default AddLocation