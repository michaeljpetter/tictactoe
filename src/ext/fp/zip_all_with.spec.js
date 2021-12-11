import { createFixture, expect } from '#/ext/jest';
const { subject, set, it } = createFixture();
import zipAllWith from './zip_all_with';

subject(({ iteratee, arrays }) => zipAllWith(iteratee, arrays));

set('iteratee', () => Math.max);
set('arrays', [[1, 5], [4, 8], [7, 2]]);

it('zips with the iteratee', () => expect.it.toEqual([7, 8]));
