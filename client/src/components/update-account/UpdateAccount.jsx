import React from 'react'
import './Update-account.scss'; 



const UpdateAccount = () => {
  return (
<div className="pageWrapper">

	{/* Component here */}
  
  <div className="tab w-full overflow-hidden border-t">
    <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
      <label className="block p-5 leading-normal cursor-pointer" for="tab-single-one"><i className="icon--space2 fa fa-cog" aria-hidden="true"></i> Uppdatera konto</label>
        <div className="tab-content overflow-hidden border-l-2 leading-normal">
          <input type="text"className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="Användarnamn"/>
          <input type="text"className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="E-mail"/>
          <input type="text"className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="Lösenord"/>
          <button className="button-31"> Uppdatera</button>
        </div>
  </div>

</div>
  )
}

export default UpdateAccount;
