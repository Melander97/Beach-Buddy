import React from "react";
import { useLocation } from "react-router-dom";

import AddLocationModal from "../../components/addlocation-modal/AddLocationModal";

const AddLocation = () => {
  const location = useLocation();
  const { from } = location.state;
  // const { marker = "defaultValue" } = location.state || {};
  // console.log(from);
  return <AddLocationModal coords={from} />;
};

export default AddLocation;
