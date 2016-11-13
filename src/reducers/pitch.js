import { pitch } from "../../__mocks__/pitch.js";

export default function pitchReducer( state = pitch, action ) {

  if (!action) { return state }

  switch ( action.type ) {
    case "REFRESH_PLAYER_POSITION":
      return state.setIn([
        action.player.get( 'top' ),
        action.player.get( 'left' ) ],
        action.player.get( 'id' ) )
    default:
      return state
  }

}
