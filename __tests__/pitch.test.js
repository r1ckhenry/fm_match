import pitchReducer from "../src/reducers/pitch"
import { pitch, pitchWithPlayer } from "../__mocks__/pitch"
import { player } from "../__mocks__/player"

describe( "Football Pitch", () => {

  describe( "default", () => {
    test( "it returns initialState", () => {
      expect( pitchReducer() ).toBe( pitch );
    })
  })

  describe( "on REFRESH_PLAYER_POSITION", () => {
    test( "returns state with playerId in pitch position 4, 3", () => {
      const newState = pitchReducer( pitch, { type: "REFRESH_PLAYER_POSITION", player } )
      expect( newState.get( player.get('top') ).get( player.get('left') ) ).toBe( player.get( 'id' ) )
    })
  })

})
