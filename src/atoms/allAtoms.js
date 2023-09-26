import { atom } from "jotai";

export const displaySidebar = atom(false);

const skeleton = {
  title: "",
  img: "",
  date: "",
  rating: "",
};
export const loadingMovies = [];
for (let i = 0; i < 20; i += 1) {
  loadingMovies.push({
    id: i,
    ...skeleton,
  });
}
export const movies = atom(loadingMovies);

export const openPanel = atom({ sort: false, watch: false, filter: false });

export const fitlers = atom({});
