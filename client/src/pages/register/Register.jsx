import React from 'react'
import "../../styles.css"
import "../../media.css"

const Register = () => {
  return (
    <div className="pageWrapper">
          
  {/* style="background-image: url{'https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} ;" */}
      <div class="grid place-items-center h-screen" >
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6 w-80" action="#"/>
                <h3 class="text-xl font-medium text-gray-900 dark:text-white text-center">Create an Account</h3>
                <div>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your Username</label>
                    <input type="email" name="Username" id="Username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required=""/>
                </div>
                <div>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                </div>
                    <div>
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                    </div>
                         <button type="submit" class="w-full mt-5 text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-black font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>    
        </div>
        </div>

    </div>
  )
}

export default Register;
