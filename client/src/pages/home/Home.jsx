import React from 'react'
import "../../styles.css"
import "../../media.css"
import './home.scss';
import GoogleMaps from '../../components/google-maps/GoogleMaps'
// import SearchFilter from '../../components/search-filter/SearchFilter'

const Home = () => {

  //Uncomment these to be able to read from context
  // const {user} = useUser();
  // console.log(user);
  return (
    <div className="pageWrapper">
      
      {/* Handled by google maps implementation */}
      {/* <div className="searchbox">
            <input type="search" className="search--width search--bg bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
                
      </div> */}
      {/* Handled by google maps implementation */}
    <section className="map">
        {/* <div className="mapouter"> */}
          <GoogleMaps/>
        {/* <img src={"https://www.reviewgeek.com/p/uploads/2020/04/fadc14dd.jpg?height=200p&trim=2,2,2,2"} alt=""  height={"100%"} width={"100%"} /> */}
        
        {/* </div> */}
    </section>

    {/* <SearchFilter /> */}
    
    </div>
  )
}

export default Home;
