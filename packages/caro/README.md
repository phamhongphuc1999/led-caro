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
  style={{ width: '300px' }}
  gridProps={{
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
    },
  }}
  rows={10}
  columns={10}
  squares={{
    'odd-5': { style: { backgroundColor: 'black' } },
    'even-3': { style: { backgroundColor: 'orange' } },
  }}
/>;
```
