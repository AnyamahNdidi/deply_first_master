import { actionType } from "./actionType"

export const addtoWatchList = (WatchId) => {
  return {
    type: actionType.ADD_TO_WATCHLIST,
    payload: {
      id: WatchId
    }
  }
}

export const removeFromWatchList = (WatchId) => {
  return {
    type: actionType.REMOVE_MOVIE,
    payload: {
      id: WatchId
    }
  }
}

export const adjustFromWatchList = (WatchId, value) => {
  return {
    type: actionType.ADJUST_MOVIE_QTY,
    payload: {
      id: WatchId,
      qty: value
    }
  }
}

export const addMovie = (WatchId) => {
  return {
    type: actionType.ADD_MOVIE,
    payload: WatchId

  }
}

export const viewMovie = (watch) => {
  return {
    type: actionType.VIEW_SINGLE_MOVIE,
    payload: watch,
  };
};



