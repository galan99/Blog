# Vue

## import 书写顺序

```js
// 存储
// 常量
// mixins
// 组件
```

## 分隔符

```js
// ---------------------前端校验--------------------------
```

## v-for 的 key

```js
:key="`combinatorial_list${index}`"
```

## props

```js
props: {
  view_type: String,
  media_account_id: {
    type: [String, Number],
    default: ''
  },
  audienceData: {
    type: Object,
    default: () => {},
  },
  audienceData: {
    type: Array,
    default: () => [],
  },
}
```

## watch

```js
watch: {
  audienceData: {
    handler(newV, oldV) {

    },
    immediate: true,
    deep: true,
  },
}
```

## filters 中调用 this

```html
{{ xxx | format(this) }}
```

```js
filters: {
  format(val, that) {
    const _this = that._self
  }
}
```

## provide/inject

```js
provide() {
  return {
    name: this.name,  // 静态数据
    info: () => this.info,  // 动态数据
    componentName: this  // 把整个组件传过去
  };
},
```

```js
inject: ["name"],
```

## 打开弹窗初始化数据

```js
Object.assign(this.$data, this.$options.data());
```

## element自定义参数
```js
@change="(val=>{changeStatus(val, index)})"

methods: {
  changeStatus(val, index) {
    
  }
}
```

## 防抖
```js
handleTabChange: _.debounce(function() {
  this.getLiveData()
}, 500)
```

## 路由

### 获取路由参数

```js
const { hideTitleMenu } = this.$route.query;
```

### router 打开新页面

```js
const { href } = this.$router.resolve({ name: "kuaishou_shop" });
window.open(href, "_blank");
```

### router 跳转

```js
this.$router.push({
  name: "letter-list",
  query: {
    isOpen: true,
  },
});
```

## Vue 指令

### v-html

```vue
<div v-html="msg"></div>
msg: '<h1>kyson<h1/>'
```

## Vue 全局 API

### \$set

```js
data{
  return {
    obj: {
      name: 'kyson'
    },
    arr: []
  }
}
this.$set(this.obj,'age',18)
this.$set(this.arr, 0, 18)
```

### \$attrs

ABC 三个父子孙组件，A -> C  
A.vue

```vue
<B :name="name" />
```

B.vue

```vue
<C v-bind="$attrs" /> // 继承所有父组件的属性，除了:class和:style inheritAttrs:
true,
```

C.vue

```vue
// 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性
inheritAttrs:false, props: { name: { type: String, default: '' } }
```

### \$listeners

ABC 三个父子孙组件，A 要监听 C 的事件  
A.vue

```vue
<B @change="handlechange" />
```

B.vue

```vue
<C v-on="$listeners" />
```

C.vue

```vue
this.$emit('change');
```

## 自定义指令 directives

main.js

```js
import "@/directives";
```

@/directives/index.js

```js
import "./permission";
```

@/directives/permission.js

```js
import Vue from "vue";
Vue.directive("permission", {
  bind: (el, binding, vnode) => {},
});
```

## element

### el-button 加“+”号

```html
<el-button class="w136" size="small" type="primary" icon="mg-icon-plus fs12"
  >新增规则</el-button
>
```

### 悬浮 1s 后出现完整内容的 tips

```html
<el-tooltip
  effect="light"
  placement="top"
  :open-delay="1000"
  :content="完整内容"
>
  <div></div>
</el-tooltip>
```

### el-form 前端校验

```html
<el-form ref="form" :model="form" :rules="formRules">
  <el-form-item prop="title"> </el-form-item>
</el-form>
```

```js
created() {
  this.formRules = {
    title: [
      { required: true, message: "请填写标题", trigger: "change" },
      {
        trigger: 'blur',
        validator: (rule, value, callback) => {
          if (value && this.$utils.getCnBytes(value) > 25) {
            callback('最多25个字')
          } else {
            callback()
          }
        }
      }
    ],
  }
}
checkForm(){
  let flag = false;
  this.$refs.form.validate((valid) => {
    flag = valid ? true : false;
    });
  return flag;
}
submit() {
  if (!this.checkForm()) return;
}
```

### el-input 带搜索 icon

```html
<el-input
  v-model.trim="keyword"
  @keyup.enter.native="handleSearch"
  @clear="handleSearch"
  placeholder="请输入关键词"
>
  <i
    slot="prefix"
    class="el-icon-search el-input__icon"
    @click="handleSearch"
  ></i>
</el-input>
```

### el-input 里加个 suffix

```html
<div class="input-group">
  <el-input v-model="price" placeholder="请输入"></el-input>
  <span class="input-suffix">元</span>
</div>
```

```css
.input-group {
  position: relative;
  display: inline;

  ::v-deep {
    .el-input__inner {
      padding-right: 45px;
    }
  }

  .input-suffix {
    position: absolute;
    margin-top: 0;
    line-height: 32px;
    color: #dcdee2;
  }
}
```

### 阻止 el-input 回车提交

```js
<el-form
  :model="form"
  ref='form'
  @submit.native.prevent
>
</el-form>
```

### 多选下拉框

```html
<div class="select_area multiple_select">
  <el-select
    v-model="form.aweme_fan_behaviors"
    multiple
    collapse-tags
    size="small"
    class="w130"
    placeholder="请选择"
  >
    <el-option
      v-for="item in behaviors"
      :label="item.label"
      :key="item.id"
      :value="item.id"
    ></el-option>
  </el-select>
</div>
```

### el-dialog 组件

```js
import MaterialSetting  from "./MaterialSetting";
components: {
  MaterialSetting,
},
<BatchUpdatePriceDialog
  :visible.sync="showSettingDialog"
  @cancel="showSettingDialog = false"
  @ok="handleBatchPriceChange"
>
</BatchUpdatePriceDialog>
```

```js
<el-dialog
  :visible="visible"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  title="批量修改"
  width="900px"
  custom-class="batch_budget"
  @close="handleCancel"
>
  <span slot="footer" class="dialog-footer">
    <el-button @click="handleCancel" size="small">取消</el-button>
    <el-button @click="handleSubmit" type="primary" size="small">确 定</el-button>
  </span>
</el-dialog>

export default {
  name: "MaterialSetting",
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    // rowData: {
    //   type: Array,
    //   required: true,
    //   default: function () {
    //     return [];
    //   },
    // },
  },
  watch: {
    visible(value) {
      if (value) {
      }
    },
  },
  data() {
    return {

    }
  },
  methods: {
    handleCancel() {
      this.$emit("cancel");
    },
    handleSubmit() {

    },

  },
}
```

### el-message 多条提醒

```js
let errorList = [];
// 不合法移除素材提示
if (material_remove?.length) {
  errorList.push(`${material_remove?.length}个素材无法使用，已自动移除`);
}
if (errorList.length) {
  let msg = errorList.join("<br />");
  this.$message({
    type: "warning",
    dangerouslyUseHTMLString: true,
    message: msg,
  });
}
```

### 解决 el-message 在弹窗后面

```js
setTimeout(() => {
  this.$message({
    message: "数据加载中",
    type: "warning",
  });
}, 0);
```

### 手动关闭 el-message

```js
this.loadingTip = this.$message({
  showClose: true,
  message: "数据加载中",
  type: "warning",
  duration: 0,
});

this.loadingTip.close();
```

### el-pagination 分页器
```html
<el-pagination
  layout="total, sizes,prev, pager, next, jumper"
  :current-page="pageInfo.page"
  :page-size="pageInfo.page_size"
  :page-sizes="[10, 20, 50]"
  :total="pageInfo.total_count"
  @current-change="handleCurrentChange"
  @size-change="handleSizeChange"
>
</el-pagination>
```
```js
pageInfo: {
  total_count: 0,
  page_size: 10,
  page: 1
}

handleCurrentChange(page) {
  this.pageInfo.page = page
  this.getDYAuthList()
},
handleSizeChange(size) {
  this.pageInfo.page = 1
  this.pageInfo.page_size = size
  this.getDYAuthList()
},

const params = {
  page: this.pageInfo.page,
  page_size: this.pageInfo.page_size
}
.then((res) => {
  this.pageInfo = res.page_info
})

注意切换的时候清空page数据

```

### el-table
```html
<el-table
  ref="table"
  v-loading="loading"
  element-loading-background="#232f4d"
  class="table custom-table-1 margin-top-1xs"
  size="small"
  height="460"
  highlight-current-row
  :data="tableData"
  @sort-change="handleSortChange"
>
  <el-table-column prop="anchor_name" label="主播" width="160" show-overflow-tooltip>
    <template slot-scope="{ row }">
      <div class="text-overflow-hidden" style="width: 160px">
        {{ row.anchor_name }}
      </div>
    </template>
  </el-table-column>
  <!-- 按排班 -->
    <el-table-column prop="schedule_time" label="轮班时间" width="200">
      <template v-if="reportRadio == '1'" slot-scope="{ row }">
        <div><span class="text-placeholder">上播时间：</span>{{ row.schedule_time }}</div>
        <div><span class="text-placeholder">下播时间：</span>{{ row.finish_time }}</div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="128" align="center">
      <template slot-scope="{ row }">
        <el-button type="text" size="small" @click="handleGoDetail(row)"> 详情 </el-button>
        <el-button type="text" size="small" @click="handleGoReplay(row)"> 复盘 </el-button>
      </template>
    </el-table-column>
  <el-table-column prop="schedule_period" label="时长" sortable="custom" min-width="120">
    <template slot-scope="{ row }">
      <div>{{ $utils.transferSeconds(row.schedule_period) }}</div>
    </template>
  </el-table-column>
  <!-- 自定义指标 -->
  <el-table-column
    v-for="item in tableColumns"
    :key="item.prop"
    :prop="item.prop"
    :label="item.label"
    :align="item.align || 'left'"
    :sortable="item.sortable || false"
    :formatter="fmtColumn"
    min-width="120"
    show-overflow-tooltip
  />
</el-table>
<!-- 自定义指标弹窗 -->
<NewOverviewKpiDialog
  :visible.sync="overviewKpiShow"
  :check-list-ori="checkList"
  :showTargets="showTargets"
  @ok="handleSetKpi"
  @cancel="overviewKpiShow = false"
/>
```
```js
// 常量
import { activeTargetKeys, defaultTargetKeys, getCheckTargetList } from '@/const/filter4KPI'
// api
import { getScheduleReport, getAnchorReport } from '@/api/anchorMgt'
// 组件
import NewOverviewKpiDialog from '@/components/live/NewOverviewKpiDialog'

const showTargets = [1001, 1002]
const checkList = [1001, 1009, 1005, 3001, 3009, 3010]

export default {
  name: 'Table',
  components: {
    NewOverviewKpiDialog
  },
  data() {
    return {
      loading: false,

      tableData: [], // 表格数据
      tableColumns: [], // 表格列

      sort_field: '', // 排序字段
      sort_direction: '', // 排序方式

      
      overviewKpiShow: false, // 自定义指标弹窗
      showTargets: activeTargetKeys(showTargets), // 显示的KPI
      checkList: defaultTargetKeys(checkList) // 默认勾选的指标
    }
  },
  created() {
    this.setColumn()
  },
  methods: {
    // ---------------------异步请求--------------------------
    getReport(isExport = false) {
      if (!this.media_account_id) return
      let sendRequest = getScheduleReport
      if (this.reportRadio == '2') {
        sendRequest = getAnchorReport
      }

      this.loading = true
      const params = {
        media_account_id: this.media_account_id,
        kpis: this.checkList,
        start_date: this.selectDate[0],
        end_date: this.selectDate[1],
        sort_field: this.sort_field,
        sort_direction: this.sort_direction,
        data_type: isExport ? 'export' : 'list'
      }
      sendRequest(params)
        .then((res) => {
          if (isExport) {
            window.open(res.url, '_blank')
          } else {
            this.tableData = res
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    // ---------------------功能函数--------------------------
    getRowKey(row) {
      return row.anchor_id
    },
    // 更新表格列
    setColumn() {
      const sortable = ['pay_in_live_gmv', 'pay_in_live_gmv_hour', 'watch_uv', 'pay_in_live_uv_value']
      this.tableColumns = getCheckTargetList(this.checkList).map((item) => {
        return {
          prop: item.prop,
          label: item.label,
          sortable: sortable.includes(item.prop) ? 'custom' : false
        }
      })
      // 表格重新布局
      this.$nextTick(() => {
        this.$refs.table.doLayout()
      })
    },
    // 格式化表格值
    fmtColumn(row, column, cellValue, index) {
      if (column.label.indexOf('率') > -1) return this.$utils.transferRatio(cellValue)
      return cellValue
    },
    // ---------------------事件处理--------------------------
    handleSetKpi(check) {
      this.checkList = check
      this.overviewKpiShow = false
      this.setColumn()
    }
  }
}

```

## axios

### cancelToken

```js
// mixins
import axios from "axios";

export default {
  data() {
    return {
      requestCancelTokenList: [],
    };
  },
  methods: {
    createCancelToken() {
      let cancel;
      let promise = new axios.CancelToken(function executor(c) {
        cancel = c;
      });

      this.requestCancelTokenList.push({ promise, cancel });

      return promise;
    },
    requestCancel(cancelToken) {
      let requestCancelToken = this.requestCancelTokenList.find(
        (request) => request.promise === cancelToken
      );

      if (
        requestCancelToken &&
        typeof requestCancelToken.cancel === "function"
      ) {
        requestCancelToken.cancel("主动取消请求");
      }

      this.requestCancelTokenList = this.requestCancelTokenList.filter(
        (request) => request !== requestCancelToken
      );
    },
  },
};
```

使用

```js
import RequestCancel from "@/mixins/requestCancel";
mixins: [RequestCancel],

getList() {
    this.requestCancel(this.cancelToken);
    const cancelToken = this.createCancelToken();
    this.cancelToken = cancelToken;

    this.$axios
        .post("/Material/Manage/lists", params, { cancelToken })
}
```

## loading

```js
v-loading = "true"
v-loading = "loading"
element-loading-background = "#334066"
loading: false
this.loading = true
.finally(() => {
  this.loading = false
});
```

## 自动滚动到底部

```js
const el = this.$el.getElementsByClassName("format_form")[0];
this.$nextTick(() => {
  el.scrollIntoView({ behavior: "smooth", block: "end" });
});
```

## 滚动到未验证处

::: tip 提示
sourcelink 为未验证成功的对象的类名
:::

```js
this.$refs.adForm.validate((valid) => {
  let { sourceLink } = this.checkConig();
  this.submitLoading = false;

  // 滚动到未验证成功处
  let dom = this.$el.getElementsByClassName(sourceLink)[0];
  if (dom) {
    this.$nextTick(() => {
      dom.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  if (result != "") return;
  let submitObj = this.filterAdConfig();
  this.$emit("ok", submitObj, this);
});
```

## 字符时间串比较大小

```js
let time1 = "2021-04-13 20:09:45.809";
let time2 = "2021-04-13 20:08:20.476";
console.log(
  Date.parse(time1.replace(/-/g, "/")) - Date.parse(time2.replace(/-/g, "/"))
);
```

## 正则表达式

```js
大于0小于999999  /^([1-9][0-9]{0,5})$/，
大于0整数        /^[1-9]\d*$/
```

## 对象数组先按属性一排序,再按属性二排序

::: tip 提示
以下代码先按 num1 从小到大排序，再按 num2 从大到小
:::

```js
let arr = [
  { num1: 12, num2: 1 },
  { num1: 8, num2: 2 },
  { num1: 8, num2: 12 },
];
let sort_func = (prev, next) => {
  // 简写版
  return prev.num1 - next.num1 === 0
    ? next.num2 - prev.num2
    : prev.num1 - next.num1;
  // 全写版
  if (prev.num1 - next.num1 < 0) {
    return -1;
  } else if (prev.num1 - next.num1 > 0) {
    return 1;
  } else {
    return next.num2 - prev.num2;
  }
};
console.log(arr.sort(sort_func));
```

## 点击之后自动复制内容到粘贴板,如点击报错信息

```html
<div class="copy-error-info" :data-clipboard-text="`复制内容`"></div>
```

```js
import Clipboard from "clipboard";
mounted() {
  let clipboard = new Clipboard(".copy-error-info");
  clipboard.on("success", (e) => {
      this.$message({
        message: "复制报错成功",
        type: "success",
      });
      e.clearSelection();
  });
  clipboard.on("error", (e) => {
      this.$message.error(e);
  });
  this.clipboard = clipboard;
},
destroyed() {
  this.clipboard && this.clipboard.destroy();
},
```

## CSS 选择器

```css
div:not() {
}
div:first-child {
}
div:not(:first-child) {
}
div:nth-of-type(1) {
}
```

## 超出宽度部分以...显示

```css
.box {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## inline-block 宽度不够不换行

```css
.parent {
  white-space: nowrap;
}
```

## 先关弹窗再跳转

```js
let { href } = this.$router.resolve({
  name: this.routeName,
  query: {
    marketing_goal: this.curMarketingGoal,
    promotion_way: this.curPromotionWay,
  },
});
this.dialogShow = false;
// 宏任务  弹框关闭动画结束后 跳转
setTimeout(() => {
  window.open(href, "_blank");
}, 350);
```

## eventBus

```js
import { bus } from "@/utils/index";
mounted() {
  bus.$off("changeRuleStatus");
  bus.$on("changeRuleStatus", (value) => {

  });
},
```

```js
import { bus } from "@/utils/index";

bus.$emit("changeRuleStatus", "123");
```

## 获取账户角色

```js
import { mapState } from "vuex";
computed: {
  ...mapState("clad/user", ["info"]),
},

this.info.group_name
```

## 解决视频资源 403 的问题

```js
import Referrer from "@/mixins/referrer";

mixins: [Referrer],
```

```js
// referrer.js
export default {
  mounted() {
    let findMeta = document.querySelector("#meta-referrer");

    if (findMeta === null) {
      setTimeout(() => {
        let meta = document.createElement("meta");
        meta.id = "meta-referrer";
        meta.name = "referrer";
        meta.content = "no-referrer";
        document.head.appendChild(meta);
      }, 10 * 1000);
    }
  },
  beforeDestroy() {
    let meta = document.querySelector("#meta-referrer");
    meta && document.head.removeChild(meta);
  },
};
```

## 获取 DOM 元素宽高

```js
let height = window.getComputedStyle(this.$refs.init).height;
```

## 滚动条样式

```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar:horizontal {
  height: 8px;
}

::-webkit-scrollbar-button:end:increment,
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-thumb {
  background-color: #dcdee2;
  border-radius: 4px;

  &:hover {
    background-color: #999;
  }
}

::-webkit-scrollbar-button:end:increment,
::-webkit-scrollbar-button:start:decrement {
  display: none;
}

::-webkit-scrollbar-track-piece {
  background-color: #f8f8f9;
  border-radius: 4px;
}

::-webkit-scrollbar-corner {
  background-color: #334066;
}
```

## jsx

```js
component: {
  render: (h, row) => {
    if (row.product_img) {
      return (
        <span
          onclick={this.showPreview.bind(this, row)}
          style="color: #197afb; cursor: pointer"
        >预览</span>
      );
    }

    return <div style="font-size: 12px;">未知商品</div>;
  },
},

component: {
  render: (h, row) => {
    return row.material_name ? <div>{row.material_name}</div> : <div>--</div>
  },
},

import empty_img from "@/assets/image/qianchuan/home/empty_img.svg"
<img src={row.product_img} alt="" />
```

## 正常 选中 悬浮 禁用 四种状态

```js
<div
  class="temp-item-main"
  v-for="(item, index) in sceneList"
  :key="`scene_list_${index}`"
>
  <div
    :class="[
      'scene',
      curScene == item.value ? 'scene_selected' : '',
      isDetailMode? 'scene_disabled' : '',
    ]"
    @click="handleSceneChange(item.value)"
  >
    <img :src="item.iconUrl" />
    <div class="scene__desc">
      <p class="scene__desc__title"> {{item.type}} </p>
      <p> {{item.desc}} </p>
    </div>
  </div>
</div>
```

```js
created() {
  this.sceneList = [
    {
      value: "stop_loss",
      type: "广告止损",
      desc: "自动暂停成本超出预期的广告，减少测试浪费",
      iconUrl: require("@/assets/image/qianchuan/stop_loss.svg"),
    },
    {
      value: "ad_clean",
      type: "广告清理",
      desc: "自动清理不起量的广告，保障账户健康度",
      iconUrl: require("@/assets/image/qianchuan/ad_clean.svg"),
    },
  ]
)
```

```css
.scene_selected {
  border: 1px solid #197afb;
}
.scene_disabled {
  cursor: not-allowed;
}
```

## 离开页面提醒
监听刷新
```js
mounted() {
  window.addEventListener('beforeunload', this.handleRefresh)
},
destroyed() {
  window.removeEventListener('beforeunload', this.handleRefresh)
},
```
```js
// 页面刷新处理
handleRefresh(e) {
  e = e || window.event
  if (e) {
    e.returnValue = '关闭提示'
  }
  return '关闭提示'
}
```
路由守卫
```js
beforeRouteLeave(to, from, next) {
  next(false)
  this.$confirm('确定离开当前页面吗？离开后信息将不会保存', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    customClass: 'custom-message-box-1',
    type: 'warning'
  })
    .then(() => {
      next()
    })
    .catch(() => {
      next(false)
    })
},
```
## utils

### 获取字节数

```js
// 获取英文字节数
getBytes(str) {
  return str ? str.replace(/[^\u0000-\u00ff]/g, "aa").length : 0;
},
// 获取中文字节数
getCnBytes(str = "") {
  let emojisList = str.match(/\[([^[)]*)\]/g);
  let emojiLen = emojisList ? emojisList.length : 0;
  let emojiImgStr = str.replace(/\[([^[)]*)\]/g, "");
  let strLen = Math.round(emojiImgStr.replace(/[^\u0000-\u00ff]/g, "aa").length / 2);
  let totalLen = emojiImgStr ? strLen + emojiLen : +emojiLen;
  return totalLen;
},
```

### 对象数组按某个属性进行分组

```js
groupBy(objectArray = [], property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
},
```
