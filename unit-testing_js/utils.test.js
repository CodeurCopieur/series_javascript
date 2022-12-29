import { test, describe, expect, beforeEach } from 'vitest'
import { getAllIds } from './utils'

describe('getAllIds()', ()=> {

  beforeEach(context => {
    context.items = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
    ]
  })

  test('devrait renvoyer les propriétés d\'identification', ({items})=> {

  // Arrange
  // const items = [
  //   {id: 0},
  //   {id: 1},
  //   {id: 2},
  //   {id: 3},
  //   {id: 4},
  // ]
  // Act
  const res = getAllIds(items)
  // Assert
  expect(res).toEqual([0, 1, 2, 3, 4])
  })

  test('devrait gérer le mauvais format d\'élément', ({items})=> {
    items[2] = null
    // Arrange
    // const items = [
    //   {id: 0},
    //   {id: 1},
    //   null,
    //   {id: 3},
    //   {id: 4},
    // ]
    // Act
    const res = getAllIds(items)
    // Assert
    expect(res).toEqual([0, 1, null, 3, 4])
  })

  test('devrait lancer une erreur s\'il ne reçoit pas un tableau', ()=> {

    // Arrange
    const items = 'not-an-array'
    // Act
    const resMethod = ()=> getAllIds(items)
    // Assert
    expect(resMethod).toThrowError('items.map is not a function')
  })
})
