import React from 'react'
import './User-menu.scss'; 



const UserMenu = () => {
  return (



    <section className="footer__menu">
      <a href="/profile"> <i className="icon--space fa-solid fa-user fa-2xl" aria-hidden="true"></i>  </a>
      <a href="/locations"> <i className="icon--space fa fa-map-marker fa-2xl" aria-hidden="true"></i> </a>
      <a href="/add-location"> <i className="icon--space fa-solid fa-circle-plus fa-2xl" aria-hidden="true"></i> </a>
      <a href="/sign-out"> <i className="icon--space fa-solid fa-right-from-bracket fa-2xl" aria-hidden="true"></i> </a>
     </section>
 


  )
}

export default UserMenu;
