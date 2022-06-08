import { useLocation } from "react-router-dom";
import UpdateLocationModal from "../../components/updatelocation-modal/UpdateLocationModal";

const UpdateLocation = () => {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div>
      <UpdateLocationModal location={from} />
    </div>
  );
};

export default UpdateLocation;
