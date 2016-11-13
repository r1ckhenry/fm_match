const createStore = require('redux').createStore
const match = require( "./reducer.js" )

const store = createStore( match )

store.getState().get( 'homeTeam' ).forEach( function( player ) {
  store.dispatch( { type: "REFRESH_PLAYER_POSITION", player: player } )
})

// function prettyPitch() {
//   store.getState().get( 'pitch' ).map( function(row) {
//     console.log( row.toJS() )
//   })
// }
//
// prettyPitch();
