/**
 * 单元测试
 */

 import {exist} from "./index"
 import { pathExistEy } from './solution.ey'
 import { pathExistJz } from './soultion.jz'

 test('if path exist', ()=> {
     expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true)
     expect(exist([["a","b"],["c","d"]], "abcd")).toBe(false)
 })

 test('if path exist1', ()=> {
    expect(pathExistEy([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true)
    expect(pathExistEy([["a","b"],["c","d"]], "abcd")).toBe(false)
})

test('if path exist2', ()=> {
    expect(pathExistJz([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true)
    expect(pathExistJz([["a","b"],["c","d"]], "abcd")).toBe(false)
})
