import './home.scss';

const Home = () => {

  return (
    <>
      <div className="searchbox">
          <input type="search" className="search--width search--bg bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />   
      </div>
      <section className="map">
        <div className="mapouter">
          <img className="home-placeholder" src={"https://www.reviewgeek.com/p/uploads/2020/04/fadc14dd.jpg?height=200p&trim=2,2,2,2"} alt=""  height={"100%"} width={"100%"} />
        </div>
      </section>
    </>
  )
}

export default Home
