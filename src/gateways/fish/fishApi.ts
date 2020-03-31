import { http } from "../http-common";
import { Fish } from "./Fish";

export const getAllFish = () => http.get<Fish[]>("fish");
export const saveFish = (fish: Fish) => http.post<boolean>("fish", fish);
