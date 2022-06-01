import React, { useEffect, useState } from "react";
import { locationDetails$, getBeachInfo } from "../../services/bad_havs_API";
import LocationModal from "../../components/location-modal/LocationModal";
import { useParams } from "react-router-dom";
import "./locationid.scss";

const LocationId = () => {
  const [beach, setBeach] = useState();

  let { id } = useParams();
  // console.log(id);
  useEffect(() => {
    if (id.startsWith("SE")) {
      getBeachInfo(id);
    } else {
      console.log("something else");
    }
    locationDetails$.subscribe((data) => {
      setBeach(data);
    });
  }, []);

  console.log(beach);
  return <LocationModal beach={beach} />;
};

export default LocationId;
