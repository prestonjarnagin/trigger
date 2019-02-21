import index from '../../reducers/index'

describe('Reducers index test', () => {
  it('should return the array of reducers', () => {
    const expected = undefined 
    const result = index.combineReducers
    expect(result).toEqual(expected)
  })
})
