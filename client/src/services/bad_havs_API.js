import axios from "axios";
import { BehaviorSubject } from "rxjs";

const url = 'https://badplatsen.havochvatten.se/badplatsen/api/feature';
const detailedURL = 'https://badplatsen.havochvatten.se/badplatsen/api/detail/'

export const swimLocation$ = new BehaviorSubject([]);
export const locationDetails$ = new BehaviorSubject({});