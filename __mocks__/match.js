import { iList, iMap } from "./immutableApi"
import { pitch } from "./pitch"
import { team } from "./team"

export const match = iMap({
  pitch: pitch,
  home: team
})
