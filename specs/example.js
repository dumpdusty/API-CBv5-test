import { expect } from 'chai'
import * as color from 'colors'

console.log('start reading spec file'.magenta.italic)

describe('first test', () => {
  before(() => {
    console.log('before hook'.bgYellow)
  })
  beforeEach(() => {
    console.log('beforeEach hook'.cyan)
  })

  it('check the sum', () => {
    expect(2 + 2).to.eq(4)
  })
  it('check the sum', () => {
    expect(3 + 3).to.eq(6)
  })
  it('check the sum', () => {
    expect(4 + 7).to.eq(11)
  })

  after(() => {
    console.log('after hook'.bgYellow)
  })
  afterEach(() => {
    console.log('afterEach hook'.cyan)
  })
})

console.log('stop reading spec file'.magenta.italic)
