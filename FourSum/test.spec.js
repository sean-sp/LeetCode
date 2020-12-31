import { fourSumJZ } from './solution.jz'

test('四数之和', () => {
  expect(fourSumJZ([1,0,-1,0,-2,2],0)).toBe([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
  expect(fourSumJZ([-3,-2,-1,0,0,1,2,3],0)).toBe([[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
})