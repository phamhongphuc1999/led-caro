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
  style={{ width: '700px' }}
  gridProps={(i, j) => ({
    children: <p style={{ fontSize: '10px' }}>{`${i}-${j}`}</p>,
    style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  })}
  rows={15}
  columns={15}
  squares={[
    {
      xAxis: { $gt: 9, $lte: 12 },
      yAxis: { $gte: 10, $lte: 13 },
      props: { className: 'grid-item1' },
    },
    {
      xAxis: { $or: [{ $e: 1 }, { $e: 4 }, { $e: 11 }] },
      yAxis: { even: true },
      props: { className: 'grid-item2' },
    },
    { xAxis: { $regex: /1{1}/ }, yAxis: { odd: true }, props: { className: 'grid-item3' } },
  ]}
/>;
```
