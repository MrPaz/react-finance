/*
 * action types
 */
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

export function exampleAction(change){
  return { type: EXAMPLE_ACTION, change }
}

// export const SET_MATCHED_SYMBOLS = 'SET_MATCHED_SYMBOLS';

// export function setMatchedSymbols(symbols){
//     return { type: SET_MATCHED_SYMBOLS, symbols }
// }

export const LOAD_ALL_SYMBOLS = 'LOAD_ALL_SYMBOLS';

export function loadAllSymbols(symbols){
    return {type: LOAD_ALL_SYMBOLS, symbols}
}