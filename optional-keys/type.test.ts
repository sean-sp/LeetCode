import { Equal } from '@type-challenges/utils';
import { Expect } from '@type-challenges/utils';

type cases = [
  Expect<
    Equal<import('./index').OptionalKeys<{ name; age?; gn? }>, 'age' | 'gn'>
  >
];
