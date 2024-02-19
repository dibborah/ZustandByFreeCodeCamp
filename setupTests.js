import {expects, afterEach} from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/types/matchers';
import '@testing-library/jest-dom';

expects.extend(matchers);

afterEach(cleanup);
