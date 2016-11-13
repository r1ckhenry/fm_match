import matchReducer from "../src/reducers/match.js"
import { match } from "../__mocks__/match.js"

describe( "Football Match", () => {

  describe( "default", () => {
    test( "it returns the initial state", () => {
      expect( matchReducer() ).toBe( match )
    })
  })

  describe( "on LOSE_POSSESSION", () => {
    test( "player loses possession", () => {
      const newState = matchReducer( match, { type: "LOSE_POSSESSION" } );
      expect( newState.getIn( ['home', 0, 'possession'] ) ).toBe( false );
    })
  })

  describe( "on RECEIVE_POSSESSION", () => {

    test( "player receives possession", () => {
      const matchState = matchReducer( match, { type: "LOSE_POSSESSION" } );
      const newState = matchReducer( matchState, { type: "RECEIVE_POSSESSION", playerId: 2 } )
      expect( newState.getIn( ['home', 1, 'possession'] ) ).toBe( true );
    })

  })

})
