# r-button

## 基本用法

```html
<r-button types="primary">按 钮</r-button>
<r-button types="success">按 钮</r-button>
<r-button types="primary" plain>按 钮</r-button>
<r-button types="success" plain>按 钮</r-button>
<r-button types="warn" plain>按 钮</r-button>
<r-button types="error" plain>按 钮</r-button>
<r-button size="mini">按 钮</r-button>
<r-button types="success" size="large" plain round>按 钮</r-button>
<r-button types="primary" round>按 钮</r-button>
<r-button types="warn" size="mini" round>按 钮</r-button>
```

## API
## 属性/方法
### r-button Props
| 属性名        |    类型       |  默认值| 说明                                     |
| ------------- | :-----------: | ----: | :------------------------------:        | 
| col 3 is      | right-aligned | $1600 |    是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色                                   |
| col 2 is      |   centered    |   $12 |    ww                                    |
| zebra stripes |   are neat    |    $1 |         ee                                 |

### r-button Events

|事件名	|事件说明			|返回参数	|
|:-:	|:-:				|:-:		|
|@click	|点击 Badge 触发事件| -			|


## 示例

<div class="example-box">

```html
<template>
  <r-button types="primary">按 钮</r-button>
  <r-button types="success">按 钮</r-button>
  <r-button types="warn">按 钮</r-button>
  <r-button types="error">按 钮</r-button>
  <r-button types="primary" plain>按 钮</r-button>
  <r-button types="success" plain>按 钮</r-button>
  <r-button types="warn" plain>按 钮</r-button>
  <r-button types="error" plain>按 钮</r-button>
  <r-button>按 钮</r-button>
  <r-button types="success" size="large">按 钮</r-button>
  <r-button types="success" size="large" plain>按 钮</r-button>
  <r-button types="warn" plain size="mini">按 钮</r-button>
  <r-button types="error" plain size="mini">按 钮</r-button>
  <r-button size="mini">按 钮</r-button>
  <r-button types="success" size="large" plain round>按 钮</r-button>
  <r-button types="primary" round>按 钮</r-button>
  <r-button types="warn" size="mini" round>按 钮</r-button>
</template>
```

<iframe id="iframeCon" src="http://localhost:3995/" width="379px" height="812px" class="iframeCon-box"></iframe>

</div>
