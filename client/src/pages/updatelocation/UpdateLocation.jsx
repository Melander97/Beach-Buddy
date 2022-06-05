import { useLocation } from "react-router-dom";
import UpdateLocationModal from "../../components/updatelocation-modal/UpdateLocationModal";

const UpdateLocation = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <div>
      {/* Component here */}

      <UpdateLocationModal />
    </div>
  );
};

export default UpdateLocation;
