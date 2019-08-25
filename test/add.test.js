import add from '../src/add'

test('add() => 0', () => {
  expect(add()).toEqual(0)
})

test('add(2)() => 2', () => {
  expect(add(2)()).toEqual(2)
})

test('add(2)(4)() => 6', () => {
  expect(add(2)(4)()).toEqual(6)
})

test('add(2)(4)(0)() => 6', () => {
  expect(add(2)(4)(0)()).toEqual(6)
})

test('add(2)(4)(0)(-1)() => 5', () => {
  expect(add(2)(4)(0)(-1)()).toEqual(5)
})
