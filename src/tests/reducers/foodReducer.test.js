import foodReducer from '../../reducers/foodReducer'

describe('Food Reducer test', () => {
  it('should have a default value', ()=> {
    expect(foodReducer(undefined, {type: 'unknown'})).toEqual({
        items: [],
        item: {},
        changedItem: {}
    })
  })
})
