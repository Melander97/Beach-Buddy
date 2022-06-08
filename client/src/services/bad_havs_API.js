import axios from "axios";
import { BehaviorSubject } from "rxjs";

const url = "https://badplatsen.havochvatten.se/badplatsen/api/feature";
const detailedURL = "https://badplatsen.havochvatten.se/badplatsen/api/detail/";

export const swimLocation$ = new BehaviorSubject([]);
export const locationDetails$ = new BehaviorSubject({});

export const coords$ = new BehaviorSubject({});

export const getAllBeaches = async () => {
  const res = await axios.get(url);
  swimLocation$.next(res.data.features.slice(0, 100));
};

export async function getLocation() {
  // let coord;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((location) => {
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      coords$.next({
        lat: lat,
        lng: long,
      });
    });
  }
  // console.log(coords$);
}

export const getBeachInfo = async (nutCode) => {
  const res = await axios.get(`${detailedURL}${nutCode}`);
  // console.log(res);
  let resObj = {
    Algea: res.data.algalText,
    bathInfo: res.data.bathInformation,
    locationArea: res.data.locationArea,
    locationName: res.data.locationName,
    nutsCode: res.data.nutsCode,
    euMotive: res.data.euMotive,
    contactMail: res.data.contactMail,
    contactUrl: res.data.contactUrl,
  };
  locationDetails$.next(resObj);
};
