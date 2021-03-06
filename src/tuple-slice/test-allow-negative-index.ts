import { Equal, Expect } from '@type-challenges/utils'
import { Slice } from './allow-negative-index'

type Arr = [1, 2, 3, 4, 5]

type Tests = [
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,
  Expect<Equal<Slice<Arr, -2>, [4, 5]>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,
  Expect<Equal<Slice<Arr, 1, -2>, [2, 3]>>,
  Expect<Equal<Slice<Arr, -4, -2>, [2, 3]>>,
]
