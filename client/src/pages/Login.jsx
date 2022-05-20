import React from 'react'
import "../styles.css"
import "../media.css"

const Home = () => {
  return (
    <div className="pageWrapper">
          
      <section class="topBar">
          <img src={require("../assets/bb-logo.png")} alt="" class="logo" />
      </section>
  
      <div class="grid place-items-center h-screen w-full shadow-lg" style={"background-image: url{'https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} ;"}>
	<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
		<form class="space-y-6 w-80" action="#">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white text-center">Sign in</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
            </div>
				<div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
					<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                </div>
					<div class="flex items-start">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 accent-yellow-500" required=""/>
                            </div>
								<div class="text-sm ml-3">
									<label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
								</div>
							</div>
							
						</div>
						<button type="submit" class="w-full text-blackS bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <a href="createaccount.html" class="text-black hover:underline dark:text-gray-700">Create
								account</a>
						</div>
		</form>
	</div>
</div>


     <section class="footer">
         <p class="footer--text">© 2021 Copyright: BeachBuddy</p>
    </section>

    </div>
  )
}

export default Home
