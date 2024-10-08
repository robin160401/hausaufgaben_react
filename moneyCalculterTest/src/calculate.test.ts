import { calculate } from "./caluculate"
import {test, expect} from 'vitest'

test("values calculated", () => {
    expect(calculate(20, 2, 10)).toEqual({fee: 2.00, sum: 22, each: 11})
}) 