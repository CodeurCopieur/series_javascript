import { test, expect } from 'vitest'
import { getAllIds } from './utils'

test('devrait renvoyer les propriétés d\'identification', ()=> {

  // Arrange
  const items = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  ]
  // Act
  const res = getAllIds(items)
  // Assert
  expect(res).toEqual([0, 1, 2, 3, 4])
})