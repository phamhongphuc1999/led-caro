import { SquareStyleType } from 'lib/type';

const ball1: SquareStyleType = {
  xAxis: 0,
  yAxis: 7,
  props: { className: 'grid-item4' },
};
const prop1: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 0, $lte: 4 }, props: { className: 'grid-item1' } },
  ball1,
];
const prop2: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 1, $lte: 5 }, props: { className: 'grid-item1' } },
  ball1,
];
const prop3: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 2, $lte: 6 }, props: { className: 'grid-item1' } },
  ball1,
];
const ball2: SquareStyleType = {
  xAxis: 6,
  yAxis: 4,
  props: { className: 'grid-item3' },
};
const prop4: Array<SquareStyleType> = [
  { xAxis: 0, yAxis: { $gte: 2, $lte: 7 }, props: { className: 'grid-item4' } },
  ball2,
];
const prop5: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $gte: 3, $lte: 7 } },
      { xAxis: 1, yAxis: 7 },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop6: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $gte: 4, $lte: 7 } },
      { xAxis: { $in: [1, 2] }, yAxis: 7 },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop7: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $gte: 5, $lte: 7 } },
      { xAxis: { $in: [1, 2, 3] }, yAxis: 7 },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop8: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $gte: 6, $lte: 7 } },
      { xAxis: { $in: [1, 2, 3, 4] }, yAxis: 7 },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop9: Array<SquareStyleType> = [
  {
    xAxis: { $in: [0, 1, 2, 3, 4, 5] },
    yAxis: 7,
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop10: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [1, 2, 3, 4, 5] }, yAxis: 7 },
      { xAxis: 5, yAxis: 6 },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop11: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [2, 3, 4, 5] }, yAxis: 7 },
      { xAxis: 5, yAxis: { $in: [5, 6] } },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const prop12: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [3, 4, 5] }, yAxis: 7 },
      { xAxis: 5, yAxis: { $in: [5, 6] } },
      { xAxis: 6, yAxis: 5 },
    ],
    props: { className: 'grid-item4' },
  },
  ball2,
];
const ball3: SquareStyleType = {
  xAxis: 5,
  yAxis: 2,
  props: { className: 'grid-item2' },
};
const prop13: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [3, 4, 5] }, yAxis: 7 },
      { xAxis: 5, yAxis: { $in: [5, 6] } },
      { xAxis: 6, yAxis: { $in: [4, 5] } },
    ],
    props: { className: 'grid-item3' },
  },
  ball3,
];
const prop14: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [4, 5] }, yAxis: 7 },
      { xAxis: 5, yAxis: { $in: [5, 6] } },
      { xAxis: 6, yAxis: { $in: [3, 4, 5] } },
    ],
    props: { className: 'grid-item3' },
  },
  ball3,
];
const prop15: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [5, 6, 7] } },
      { xAxis: 6, yAxis: { $in: [2, 3, 4, 5] } },
    ],
    props: { className: 'grid-item3' },
  },
  ball3,
];
const ball4: SquareStyleType = {
  xAxis: 2,
  yAxis: 2,
  props: { className: 'grid-item4' },
};
const prop16: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 5, yAxis: { $in: [2, 5, 6, 7] } },
      { xAxis: 6, yAxis: { $in: [2, 3, 4, 5] } },
    ],
    props: { className: 'grid-item2' },
  },
  ball4,
];
const prop17: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 4, yAxis: 2 },
      { xAxis: 5, yAxis: { $in: [2, 5, 6] } },
      { xAxis: 6, yAxis: { $in: [2, 3, 4, 5] } },
    ],
    props: { className: 'grid-item2' },
  },
  ball4,
];
const prop18: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [3, 4] }, yAxis: 2 },
      { xAxis: 5, yAxis: { $in: [2, 5] } },
      { xAxis: 6, yAxis: { $in: [2, 3, 4, 5] } },
    ],
    props: { className: 'grid-item2' },
  },
  ball4,
];
const ball5: SquareStyleType = {
  xAxis: 0,
  yAxis: 0,
  props: { className: 'grid-item2' },
};
const prop19: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [2, 3, 4] }, yAxis: 2 },
      { xAxis: 5, yAxis: { $in: [2, 5] } },
      { xAxis: 6, yAxis: { $in: [2, 3, 4, 5] } },
    ],
    props: { className: 'grid-item4' },
  },
  ball5,
];
const prop20: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 2, yAxis: 1 },
      { xAxis: { $in: [2, 3, 4, 5] }, yAxis: 2 },
      { xAxis: 6, yAxis: { $in: [2, 3, 4, 5] } },
    ],
    props: { className: 'grid-item4' },
  },
  ball5,
];
const prop21: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 2, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [2, 3, 4, 5] }, yAxis: 2 },
      { xAxis: 6, yAxis: { $in: [2, 3, 4] } },
    ],
    props: { className: 'grid-item4' },
  },
  ball5,
];
const prop22: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 1, yAxis: 0 },
      { xAxis: 2, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [2, 3, 4, 5] }, yAxis: 2 },
      { xAxis: 6, yAxis: { $in: [2, 3] } },
    ],
    props: { className: 'grid-item4' },
  },
  ball5,
];
const ball6: SquareStyleType = {
  xAxis: 0,
  yAxis: 4,
  props: { className: 'grid-item1' },
};
const prop23: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: { $in: [0, 1] }, yAxis: 0 },
      { xAxis: 2, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [2, 3, 4, 5] }, yAxis: 2 },
      { xAxis: 6, yAxis: { $in: [2, 3] } },
    ],
    props: { className: 'grid-item2' },
  },
  ball6,
];
const prop24: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: 1 },
      { xAxis: { $in: [0, 1] }, yAxis: 0 },
      { xAxis: 2, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [2, 3, 4, 5, 6] }, yAxis: 2 },
    ],
    props: { className: 'grid-item2' },
  },
  ball6,
];
const prop25: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $in: [1, 2] } },
      { xAxis: { $in: [0, 1] }, yAxis: 0 },
      { xAxis: 2, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [2, 3, 4, 5] }, yAxis: 2 },
    ],
    props: { className: 'grid-item2' },
  },
  ball6,
];
const prop26: Array<SquareStyleType> = [
  {
    $or: [
      { xAxis: 0, yAxis: { $in: [1, 2, 3] } },
      { xAxis: { $in: [0, 1] }, yAxis: 0 },
      { xAxis: 2, yAxis: { $in: [0, 1] } },
      { xAxis: { $in: [2, 3, 4] }, yAxis: 2 },
    ],
    props: { className: 'grid-item2' },
  },
  ball6,
];

export const squares = [
  { props: prop1 },
  { props: prop2 },
  { props: prop3 },
  { props: prop4 },
  { props: prop5 },
  { props: prop6 },
  { props: prop7 },
  { props: prop8 },
  { props: prop9 },
  { props: prop10 },
  { props: prop11 },
  { props: prop12 },
  { props: prop13 },
  { props: prop14 },
  { props: prop15 },
  { props: prop16 },
  { props: prop17 },
  { props: prop18 },
  { props: prop19 },
  { props: prop20 },
  { props: prop21 },
  { props: prop22 },
  { props: prop23 },
  { props: prop24 },
  { props: prop25 },
  { props: prop26 },
];
