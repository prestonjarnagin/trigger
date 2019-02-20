import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import { fetchFoods, destroyFood, updateFoodEntry } from '../../actions/foodActions';
import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD, UPDATE_FOOD_ENTRY } from '../../actions/types';
import foodReducer from '../../actions/foodActions'


describe('Food actions test', () => {
  describe('fetchFoods test ',() =>{

    // it('it call the fetch when we are gettin the summary', ()=>{
    //   const summary = fetchFoods(1550030400)
    //   const expected= {}
    //   expect(summary).toEqual(expected)
    // })
    it('reset the state', ()=>{

    })
    // it('it call the callback', ()=>{
    //
    // })

  })
})
