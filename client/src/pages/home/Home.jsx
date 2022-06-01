import React from 'react'
import './home.scss';
// import SearchFilter from '../../components/search-filter/SearchFilter'
// import { useUser } from '../../components/context/UserContext'
import Menu from '../../components/menu/Menu'

const Home = () => {

  //Uncomment these to be able to read from context
  // const {user} = useUser();
  // console.log(user);
  return (
    <>

      {/* Handled by google maps implementation */}
      <div className="searchbox">
            <input type="search" className="search--width search--bg bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
                
      </div>
      {/* Handled by google maps implementation */}
    <section className="map">
        <div className="mapouter">
        <img className="home-placeholder" src={"https://www.reviewgeek.com/p/uploads/2020/04/fadc14dd.jpg?height=200p&trim=2,2,2,2"} alt=""  height={"100%"} width={"100%"} />
        
        </div>
    </section>
    
    {/* <Menu /> */}
    </>

  )
}

export default Home
