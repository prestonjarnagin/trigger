import { FETCH_TRIGGERS, 
         FETCH_CURRENT_TRIGGER,
         INCREMENT_CURRENT_TRIGGER,
         DECREMENT_CURRENT_TRIGGER } from './types';

export const fetchTriggers = () => dispatch => {
  return fetch("https://trigger-backend.herokuapp.com/api/v1/reactions")
    .then(response => response.json())
    .then(triggers => dispatch({
      type: FETCH_TRIGGERS,
      payload: triggers.data
    }))
}

export const fetchCurrentTrigger = (id) => dispatch => {
  return fetch(`https://trigger-backend.herokuapp.com/api/v1/reactions/${id}`)
    .then(response => response.json())
    .then(trigger => dispatch({
      type: FETCH_CURRENT_TRIGGER,
      payload: trigger
    }))
}

export const incrementCurrentTrigger = (triggerIndex, triggersLength) => dispatch => {
  dispatch({
    type: INCREMENT_CURRENT_TRIGGER,
    payload: {
      currentTrigger: triggerIndex === triggersLength - 1 ? 0 : triggerIndex + 1
    }
  })
}

export const decrementCurrentTrigger = (triggerIndex, triggersLength) => dispatch => {
    dispatch({
    type: DECREMENT_CURRENT_TRIGGER,
    payload: {
      currentTrigger: triggerIndex === 0 ? triggersLength - 1 : triggerIndex - 1
    }
  })
}
