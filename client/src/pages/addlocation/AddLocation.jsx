import React from "react";
import { useLocation } from "react-router-dom";

import AddLocationModal from "../../components/addlocation-modal/AddLocationModal";

const AddLocation = () => {
  const location = useLocation();
  const { from } = location.state;

  return <AddLocationModal coords={from} />;
};

export default AddLocation;
