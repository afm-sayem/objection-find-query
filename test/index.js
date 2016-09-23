import test from 'ava';
import ofq from '../index.js';
import data from './data.json';
import expected from './expected.json';

var prefix = 'where';

test('simple', t => {
  const result = ofq.format(data.simple, prefix);
  t.deepEqual(expected.simple, result);
});

test('composite', t => {
  const result = ofq.format(data.composite, prefix);
  t.deepEqual(expected.composite, result);
});

test('multiple sibling', t => {
  const result = ofq.format(data.multiple_sibling, prefix);
  t.deepEqual(expected.multiple_sibling, result);
});

test('array', t => {
  const result = ofq.format(data.array, prefix);
  t.deepEqual(expected.array, result);
});

test('nested', t => {
  const result = ofq.format(data.nested, prefix);
  t.deepEqual(expected.nested, result);
});

