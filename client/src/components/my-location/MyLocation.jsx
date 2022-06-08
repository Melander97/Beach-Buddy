import "./My-location.scss";
import userLocationService from "../../services/userLocationService"


const MyLocations = () => {


  return (
    <div class="Map-component w-full h-5/6 flex items-center justify-center my-3">
      <div class="w-full md:w-1/3 mx-auto">
        <div class="flex flex-col p-5 rounded-lg shadow bg-[#EDC891]">
          <div class="flex flex-col items-center text-center">
            <h2 class="mt-2 font-semibold text-gray-800">Namn på platsen</h2>
          </div>
          <div class="flex items-center mt-3">
            <button className="button-31">Se plats</button>

            <div>
            <button className="bg-red-400 text-white px-2 py-1">Radera plats</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLocations;
