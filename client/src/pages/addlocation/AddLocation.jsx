import React from 'react'

const AddLocation = () => {
  return (
<div className="pageWrapper">

	{/* Component here */}
  <div class="w-full h-screen flex items-center justify-center bg-[#EDC891]">
    <div class="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <button class="w-full h-12 rounded-lg bg-yellow-500 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Login</button>
        <button class="w-full h-12 rounded-lg bg-orange-500 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Login</button>
        <button class="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Sign with Google</button>
        <button class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Sign with Facebook</button>
        <button class="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-4">Sign with Github</button>
    </div>
</div>

</div>
  )
}

export default AddLocation