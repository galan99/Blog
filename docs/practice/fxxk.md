# 踩坑记录

## 深浅拷贝

建议用以下写法

```
let {age , info} = _.cloneDeep(obj)
```

原因：

```js
let obj = {
  name: "123",
  info: {
    age: 66,
  },
};
let { info } = obj;
info.age = 18;
console.log(info);
console.log(obj); // obj的info被改变
```

bug 场景：编辑某行数据的时候 rowdata 被改变

## JSON.parse()

> JSON.parse("");JSON.parse(undefined)会报错，需要用 try-catch 来捕捉异常，不阻塞后续代码

```js
safeJSONParse(value, defaultValue = {}) {
  if (value == null) return defaultValue;

  try {
    defaultValue = JSON.parse(value);
  } catch (e) {
    console.log(`JSON.parse(${value})异常：${e}`);
  }

  return defaultValue;
},
```

## 减少 bug 数量

- 用户点击取消时，注意清空数据
- axios 注意 catch 异常
- 注意兼容后端无返回值或为 null 的情况
- 更改 Object 类型数据用 this.$set()
- v-for 中 key 的写法

## Echarts

- canvas 自适应
  <!-- https://blog.csdn.net/tangyuan0217/article/details/104361528 -->

```js
myChart.setOption(option);
myChart.resize();
```

- 双 y 轴配置
  > 单 y 轴：yAxis 为一个对象  
  > 双 y 轴：yAxis 为一个对象数组， series 增加 yAxisIndex

```js
// 双Y轴刻度对齐
let max = Math.ceil(Math.max.apply(null,seriesData[index])/5)*5;
min: 0,
max: max,        // 计算最大值
interval: Math.ceil(max / 5),   //  平均分为5份
```

- tooltip内容过多
```js
tooltip: {
  position: function(point, params, dom, rect, size) {
    /* 设置Y轴上下固定，X左右跟随。*/
    return [point[0], 0]
  }
}
```

- y轴名称左对齐

```js
 grid: {
  left: -180, // 这里
  right: 10,
  bottom: -25,
  top: 5,
  containLabel: true
},
 yAxis: [
  {
    type: 'category',
    axisLabel: {
      color: '#ADAFC5',
      margin: 200,  // 这里
      textStyle: { 
        align: 'left'   // 这里
      }
    },
  }
 ]
```

