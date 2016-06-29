const expect = require('chai').expect

const isPalindrome = require('../src/palindrome-linked-list').isPalindrome
const LinkedList = require('../lib/linked-list').LinkedList


describe('palindrome linked list', () => {
  it('1', () => {
    const result = isPalindrome(new LinkedList().buildFromArray([1, 1, 2, 1]))
    expect(result).to.equal(false)
  })
  it('2', () => {
    const result = isPalindrome(new LinkedList().buildFromArray([1, 2, 1]))
    expect(result).to.equal(true)
  })
  it('3', () => {
    const result = isPalindrome(new LinkedList().buildFromArray([1, 2, 2, 1]))
    expect(result).to.equal(true)
  })
})
