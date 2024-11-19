const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const assert = require('assert');

const graph1 = {
    A: { B: 1, C: 4 },
    B: { C: 2, D: 6 },
    C: { D: 3 },
    D: {},
};
const expected1 = {
    A: 0,
    B: 1,
    C: 3,
    D: 6,
};
assert(JSON.stringify(dijkstra(graph1, 'A').dist) === JSON.stringify(expected1));

const graph2 = {
    A: { B: 5, C: 1 },
    B: { D: 2 },
    C: { B: 2, D: 4 },
    D: {},
};
const expected2 = {
    A: 0,
    B: 3,
    C: 1,
    D: 5,
};
assert(JSON.stringify(dijkstra(graph2, 'A').dist) === JSON.stringify(expected2));

const graph3 = {
    X: { Y: 2 },
    Y: { Z: 2 },
    Z: { X: 2 },
};
const expected3 = {
    X: 0,
    Y: 2,
    Z: 4,
};
assert(JSON.stringify(dijkstra(graph3, 'X').dist) === JSON.stringify(expected3));

const graph4 = {
    A: {},
    B: { A: 1 },
    C: { B: 2 },
};
const expected4 = {
    A: 0,
    B: Infinity,
    C: Infinity,
};
assert(JSON.stringify(dijkstra(graph4, 'A').dist) === JSON.stringify(expected4));

const graph5 = { A: {} };
const expected5 = { A: 0 };
assert(JSON.stringify(dijkstra(graph5, 'A').dist) === JSON.stringify(expected5));

const graph6 = {};
const expected6 = {};
assert(JSON.stringify(dijkstra(graph6, 'A').dist) === JSON.stringify(expected6));


