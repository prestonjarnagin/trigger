import { FETCH_TRIGGER } from './types';

export const fetchTrigger = () => dispatch =>  {
  fetch('https://trigger-backend.herokuapp.com/api/v1/reactions/1') //remember to add the variable to change the reaction
    .then(response => response.json())
    .then(triggers => dispatch({
      type:FETCH_TRIGGER,
      payload: triggers
    })
    )
}
