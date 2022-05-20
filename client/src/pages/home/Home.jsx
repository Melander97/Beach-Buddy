import React from 'react'
import "../../styles.css"
import "../../media.css"
import SearchFilter from '../../components/search-filter/SearchFilter'

const Home = () => {
  return (
    <div className="pageWrapper">
      
      {/* 
      <div className="overlay">
        <img src="bb.png" alt="" />
      </div>
      */}
     
    
    
      {/* <section className="topBar">
          <img src={require("../../assets/bb-logo.png")} alt="" className="logo" />
      </section> */}
  

      {/* Handled by google maps implementation */}
      <div className="searchbox">
            <input type="search" className="search--width search--bg bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
                
      </div>
      {/* Handled by google maps implementation */}
    <section className="map">
        <div className="mapouter">
        <img src={"https://www.reviewgeek.com/p/uploads/2020/04/fadc14dd.jpg?height=200p&trim=2,2,2,2"} alt=""  height={"100%"} width={"100%"} />
        
        </div>
    </section>

    <SearchFilter />
    {/* <section className="filter">

        <i class="fas fa-arrow-up"></i>

        <div class="w-full md:w-2/3 shadow p-5 rounded-lg">
            <div class="relative">
              <div class="absolute flex items-center ml-2 h-full">
              </div>
            </div>
          
            <div>
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Havsbad</option>
                    <option value="for-rent">For Rent</option>
                    <option value="for-sale">For Sale</option>
                  </select>
          
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Strand</option>
                    <option value="fully-furnished">Fully Furnished</option>
                    <option value="partially-furnished">Partially Furnished</option>
                    <option value="not-furnished">Not Furnished</option>
                  </select>
          
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Klippor</option>
                    <option value="1000">RM 1000</option>
                    <option value="2000">RM 2000</option>
                    <option value="3000">RM 3000</option>
                    <option value="4000">RM 4000</option>
                  </select>
          
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Parkering</option>
                    <option value="200">200 sq.ft</option>
                    <option value="400">400 sq.ft</option>
                    <option value="600">600 sq.ft</option>
                    <option value="800 sq.ft">800</option>
                    <option value="1000 sq.ft">1000</option>
                    <option value="1200 sq.ft">1200</option>
                  </select>

                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Kiosk</option>
                    <option value="200">200 sq.ft</option>
                    <option value="400">400 sq.ft</option>
                    <option value="600">600 sq.ft</option>
                    <option value="800 sq.ft">800</option>
                    <option value="1000 sq.ft">1000</option>
                    <option value="1200 sq.ft">1200</option>
                  </select>
          
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Toalett</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2 bedrooms</option>
                    <option value="3">3 bedrooms</option>
                    <option value="4">4 bedrooms</option>
                    <option value="5">5 bedrooms</option>
                  </select>
          
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Ombytesrum</option>
                    <option value="1">1 bathroom</option>
                    <option value="2">2 bathrooms</option>
                    <option value="3">3 bathrooms</option>
                    <option value="4">4 bathrooms</option>
                    <option value="5">5 bathrooms</option>
                  </select>
          
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">Grillplats</option>
                    <option value="1">1 space</option>
                    <option value="2">2 space</option>
                    <option value="3">3 space</option>
                  </select>
                </div>
              </div>
            </div>
    </section> */}
 
     {/* <section className="footer">
         <p className="footer--text">© 2021 Copyright: BeachBuddy</p>
    </section> */}

    </div>
  )
}

export default Home
