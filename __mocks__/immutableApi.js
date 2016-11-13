import Immutable from 'immutable';

export function iList( array ) {
  return Immutable.List( array )
}

export function iMap( hash ) {
  return Immutable.Map( hash )
}
