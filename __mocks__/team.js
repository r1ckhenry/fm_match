import { iList, iMap } from "./immutableApi"

export const team = iList([
  iMap({
    id: 1,
    name: "Lionel Messi",
    top: 1,
    left: 3,
    passing: 84,
    possession: true
  }),
  iMap({
    id: 2,
    name: "John McGinn",
    top: 4,
    left: 3,
    passing: 44,
    possession: false
  }),
])
