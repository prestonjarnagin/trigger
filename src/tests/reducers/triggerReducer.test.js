import { FETCH_TRIGGERS,
         FETCH_CURRENT_TRIGGER,
         INCREMENT_CURRENT_TRIGGER,
         DECREMENT_CURRENT_TRIGGER } from '../../actions/types'

 import triggersReducer from '../../reducers/triggerReducer'

describe('Triggers Reducer test', () => {
  it('should have and initial state', () => {
    const expected = {
      triggers: [],
      currentTrigger: 0,
      name: '',
      items: [],
      occurrences: {}
    }
    const result = triggersReducer(undefined, {type:" "})
    expect(result).toEqual(expected)

  })

  const triggers = [
    {id:'1',type:'reaction',attributes:{name:'Headache'}},
    {id:'2',type:'reaction',attributes:{name:'Stomach Ache'}},
    {id:'3',type:'reaction',attributes:{name:'Drowzy'}}
  ]

  const items = [
   {id:5,name:'Milk',frequency:0.8},
   {id:1,name:'Hot Dog',frequency:0.67},
   {id:10,name:'Bread',frequency:0.2},
   {id:11,name:'Hot Sauce',frequency:0.13},
   {id:2,name:'Coffee',frequency:0.13}
    ]

  const occurrences = {
    last_7_days:2,
    last_15_days:4,
    last_30_days:6,
    last_31_to_60_days:2
  }

  const stateTriggers = {
    type: FETCH_TRIGGERS,
    payload: triggers
  }

  it('should fetch all the triggers', () => {
    const expected = {
      triggers: triggers,
      currentTrigger: 0,
      name: '',
      items: [],
      occurrences: {}
    }

    const result = triggersReducer(undefined, stateTriggers)
    expect(result).toEqual(expected)

  })

  it('should fetch current Trigger', () => {
    const expected = {
      triggers: triggers,
      currentTrigger: 0,
      name: 'Headache',
      items: items,
      occurrences: occurrences,
    }

    const action = {
      type: FETCH_CURRENT_TRIGGER,
      payload: {
        name: triggers[0].attributes.name ,
        foods: items,
        occurrences: occurrences
        }
      }

    const state = triggersReducer(undefined, stateTriggers)

    const result = triggersReducer(state, action)

    expect(result).toEqual(expected)

  })

  it('should increment the current Trigger', () => {
    const expected = {
      triggers: triggers,
      currentTrigger: "1",
      name: "Headache",
      items: items,
      occurrences: occurrences,
    }

    const action_1 = {
      type: FETCH_CURRENT_TRIGGER,
      payload: {
        name: triggers[0].attributes.name ,
        foods: items,
        occurrences: occurrences
        }
      }

      const action = {
        type: INCREMENT_CURRENT_TRIGGER,
        payload: {
          currentTrigger: triggers[0].id
          }
        }
    const state = triggersReducer(undefined, stateTriggers)

    const current = triggersReducer(state, action_1)

    const result = triggersReducer(current, action)


    expect(result).toEqual(expected)

  })

  it('should decrement the current Trigger', () => {
    const expected = {
      triggers: triggers,
      currentTrigger: "1",
      name: "Headache",
      items: items,
      occurrences: occurrences,
    }

    const action_1 = {
      type: FETCH_CURRENT_TRIGGER,
      payload: {
        name: triggers[0].attributes.name ,
        foods: items,
        occurrences: occurrences
        }
      }

      const action = {
        type: DECREMENT_CURRENT_TRIGGER,
        payload: {
          currentTrigger: triggers[0].id
          }
        }
    const state = triggersReducer(undefined, stateTriggers)

    const current = triggersReducer(state, action_1)

    const result = triggersReducer(current, action)


    expect(result).toEqual(expected)

  })
})
