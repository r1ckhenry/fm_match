import { match } from "../../__mocks__/match.js";

export default function matchReducer( state = match, action ) {

  if (!action) { return state }

  switch ( action.type ) {
    case "RECEIVE_POSSESSION":
      const index = state.get( 'home' ).findIndex( (player) => { return player.get( 'id' ) === action.playerId } )
      return state.setIn( ['home', index, 'possession' ], true )
    case "LOSE_POSSESSION":
      const playerIndex = state.get( 'home' ).toJS().findIndex( ( player ) => { return player.possession === true } )
      return state.setIn( [ 'home', playerIndex, 'possession' ], false )
    default:
      return state
  }

}
