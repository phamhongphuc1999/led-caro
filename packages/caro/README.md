<h1>@peter-present/led-caro</h1>

Simple <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Lady%20Beetle.png" alt="Lady Beetle" width="25" height="25" /> caro.

### Installation <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bug.png" alt="Bug" width="25" height="25" />

- Using npm

```shell
npm install @peter-present/led-caro
```

- Using yarn

```shell
yarn add @peter-present/led-caro
```

- Using bun

```shell
bun add @peter-present/led-caro
```

### Usage

- Basic caro

```js
import '@peter-present/led-caro/dist/assets/style.css';

<BasicCaro rows={5} columns={5} />;
```

- Grid caro

```js
import '@peter-present/led-caro/dist/assets/style.css';

<GridCaro
  stickColor="black"
  stickSize={1}
  style={{ width: '500px' }}
  gridProps={(i, j) => ({
    children: <p style={{ fontSize: '8px' }}>{`${i}-${j}`}</p>,
    style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  })}
  rows={15}
  columns={15}
  squares={[
    {
      xAxis: { $gte: 9, $lte: 12 },
      yAxis: { $gte: 1, $lte: 3 },
      $or: [
        { xAxis: { $gte: 1, $lte: 3 }, yAxis: { $gte: 6, $lte: 9 } },
        { xAxis: { $mod: [3, 2] }, yAxis: { $gte: 10, $lte: 15 } },
      ],
      props: { className: 'grid-item1' },
    },
    {
      xAxis: { $or: [{ $eq: 1 }, { $eq: 4 }, { $eq: 11 }] },
      yAxis: { $in: [0, 1, 3, 6, 9] },
      props: { className: 'grid-item2' },
    },
    {
      xAxis: { $regex: /1{1}/ },
      yAxis: { $mod: [2, 1] },
      props: { className: 'grid-item3' },
    },
  ]}
/>;
```

- Animation caro

```js
import '@peter-present/led-caro/dist/assets/style.css';

<AnimationCaro
  stickColor="black"
  stickSize={1}
  style={{ width: '500px' }}
  gridProps={(i, j) => ({
    children: <p style={{ fontSize: '8px' }}>{`${i}-${j}`}</p>,
    style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  })}
  rows={15}
  columns={15}
  squares={[
    {
      props: [
        {
          xAxis: { $gte: 9, $lte: 12 },
          yAxis: { $gte: 1, $lte: 3 },
          $or: [
            { xAxis: { $gte: 1, $lte: 3 }, yAxis: { $gte: 6, $lte: 9 } },
            { xAxis: { $mod: [3, 2] }, yAxis: { $gte: 10, $lte: 15 } },
          ],
          props: { className: 'grid-item1' },
        },
      ],
    },
    {
      span: 2,
      props: [
        {
          xAxis: { $or: [{ $eq: 1 }, { $eq: 4 }, { $eq: 11 }] },
          yAxis: { $in: [0, 1, 3, 6, 9] },
          props: { className: 'grid-item2' },
        },
      ],
    },
    {
      props: [
        {
          xAxis: { $regex: /1{1}/ },
          yAxis: { $mod: [2, 1] },
          props: { className: 'grid-item3' },
        },
      ],
    },
  ]}
/>;
```
