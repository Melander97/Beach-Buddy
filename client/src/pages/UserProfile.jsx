import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useUser } from '../components/context/UserContext'
import "../styles.css";
import "../media.css";
import "../variables.css";
import "../menu.css";
import "../account.css";
import "../helpers/toggle-accordion";


const UserProfile = () => {
  
  const user = useUser();
  console.log(user);
  return (
    <div className="pageWrapper">
      {/* Profile */}
      <div className="profile">
      <img className="inline-block h-10 w-10 rounded-full" src="user.png" alt="" />
      <h1>{user.user.name}</h1>
      </div>

     {/* Accordion */}

      <div className="w-full md:w-3/5 mx-auto p-8">
      <div className="shadow-md">
         <div className="tab w-full overflow-hidden border-t">
            <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
            <label className="block p-5 leading-normal cursor-pointer" for="tab-single-one"><i className="icon--space2 fa fa-cog" aria-hidden="true"></i> Uppdatera konto</label>
            <div className="tab-content overflow-hidden border-l-2 leading-normal">
              <input type="text"className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="Användarnamn"/>
              <input type="text"className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="E-mail"/>
              <input type="text"className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="Lösenord"/>
              <button className="button-31" role="button"> Uppdatera</button>
            </div>
         </div>
         <div className="tab w-full overflow-hidden border-t">
            <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2" />
            <label className="block p-5 leading-normal cursor-pointer" for="tab-single-two"><i className="icon--size icon--space2 fas fa-swimmer"></i> Trosa havsbad</label>
            <div className="tab-content overflow-hidden border-l-2 leading-normal">
              <button className="button-31" role="button"> Se plats</button>
              <button className="button-31" role="button"> Ta bort</button>
            </div>
         </div>
         <div className="tab w-full overflow-hidden border-t">
            <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2" />
            <label className="block p-5 leading-normal cursor-pointer" for="tab-single-three"><i className="icon--size icon--space2 fas fa-swimmer"></i> Någon badplats</label>
            <div className="tab-content overflow-hidden border-l-2 leading-normal">
              <button className="button-31" role="button"> Se plats</button>
              <button className="button-31" role="button"> Ta bort</button>
            </div>
         </div>
      </div>
   </div>

    {/* Footer menu */}  
    <section className="footer__menu">
      <a href="/profile"> <i className="icon--space fa-solid fa-user fa-2xl" aria-hidden="true"></i>  </a>
      <a href="/locations"> <i className="icon--space fa fa-map-marker fa-2xl" aria-hidden="true"></i> </a>
      <a href="/add-location"> <i className="icon--space fa-solid fa-circle-plus fa-2xl" aria-hidden="true"></i> </a>
      <a href="/sign-out"> <i className="icon--space fa-solid fa-right-from-bracket fa-2xl" aria-hidden="true"></i> </a>
     </section>

</div>

  )
}

export default UserProfile
