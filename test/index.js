import test from 'ava';
import ofq from '../index.js';
import data from './data.json';
import expected from './expected.json';

test('simple', t => {
  const result = ofq.format(data.simple);
  t.deepEqual(expected.simple, result);
});

test('composite', t => {
  const result = ofq.format(data.composite);
  t.deepEqual(expected.composite, result);
});

test('multiple sibling', t => {
  const result = ofq.format(data.multiple_sibling);
  t.deepEqual(expected.multiple_sibling, result);
});

test('array', t => {
  const result = ofq.format(data.array);
  t.deepEqual(expected.array, result);
});

test('nested', t => {
  const result = ofq.format(data.nested);
  t.deepEqual(expected.nested, result);
});


