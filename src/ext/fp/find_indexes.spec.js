import { createFixture, expect } from '#/ext/jest';
const { subject, set, it } = createFixture();
import findIndexes from './find_indexes';

subject(({ predicate, array }) => findIndexes(predicate, array));

set('predicate', () => s => s.startsWith('Ja'));
set('array', ['Jay', 'Steve', '', 'Jason', 'Aaron']);

it('yields the indexes of elements matching the predicate', () => expect.it.toEqual([0, 3]));
