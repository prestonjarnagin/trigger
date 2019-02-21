import * as numberHelper from '../../helpers/number';

describe('Number Helper test', () => {
  it('should return a percentage by giving a number', () => {
    const expected = "50%"
    const result = numberHelper.toPercentage(0.5)
    expect(result).toEqual(expected)
  })
})
