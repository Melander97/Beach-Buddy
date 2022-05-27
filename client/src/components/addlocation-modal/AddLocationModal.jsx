import React from 'react'
import './AddLocation-modal.scss'; 




const AddLocationModal = () => {
  return (

    <div className="addLocation-component w-full h-screen flex items-center justify-center my-3">
    <div className="bg-[#EDC891] w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center shadow-xl">
        <button className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-gray-100 transition mb-4">Title</button>
        <button className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-gray-100 transition mb-4">Address</button>
        <button className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-gray-100 transition mb-4">Directions</button>
        <button className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-gray-100 transition mb-4">Upload Image</button>
        <button className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4">Add Location</button>
    </div>
    </div>
 
  )
}

export default AddLocationModal;
