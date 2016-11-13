import { match } from "../../__mocks__/match.js";

export default function matchReducer( state = match, action ) {

  if (!action) { return state }

  switch ( action.type ) {
    default:
      return state
  }

}
