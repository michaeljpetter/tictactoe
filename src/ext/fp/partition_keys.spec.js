import { createFixture, expect } from '#/ext/jest';
const { subject, set, it } = createFixture();
import partitionKeys from './partition_keys';

subject(({ predicate, object }) => partitionKeys(predicate, object));

set('predicate', () => key => key.startsWith('a'));
set('object', { animal: 'snake', type: 'python', age: 6, location: 'home' });

it('splits the object keys by the predicate', () => expect.it.toStrictEqual([
  { animal: 'snake', age: 6 },
  { type: 'python', location: 'home' }
]));
