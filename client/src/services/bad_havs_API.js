import axios from "axios";
import { BehaviorSubject } from "rxjs";

const url = 'https://badplatsen.havochvatten.se/badplatsen/api/feature';
const detailedURL = 'https://badplatsen.havochvatten.se/badplatsen/api/detail/'

export const swimLocation$ = new BehaviorSubject([]);
export const locationDetails$ = new BehaviorSubject({});

export const getAllBeaches = async () => {
    const res = await axios.get(url);
    swimLocation$.next(res.data.features.slice(0, 10));
    // console.log(swimLocation$);
}