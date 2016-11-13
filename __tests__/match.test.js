import matchReducer from "../src/reducers/match.js"
import { match } from "../__mocks__/match.js"

describe( "Football Match", () => {

  describe( "default", () => {
    test( "it returns the initial state", () => {
      expect( matchReducer() ).toBe( match )
    })
  })

})
