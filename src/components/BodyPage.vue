<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <!-- <th>ID</th> -->
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>班级</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="list">
      <template>
        <tr v-for="item in stusObj" :key="item.id">
          <!-- <td>{{item.id}}</td> -->
          <td>{{ item.sid }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.className }}</td>
          <td class="btn-td">
            <button class="edit btn-box" :class="{loading: editID === item.id}" @click="open(item.id)">
              <span class="edit btn-text" v-if="editID !== item.id">
                修改
              </span>
              <div class="spinner-border text-success btn-loading" role="status" v-else>
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
            <button class="del btn-box" :class="{loading: delID === item.id}" @click="del(item.id)">
              <span class="del btn-text" v-if="delID !== item.id">
                删除
              </span>
              <div class="spinner-border text-danger btn-loading" role="status" v-else>
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    stusObj: {
      type: Array
    },
    delID: {
      type: [Number, String, null]
    },
    editID: {
      type: [Number, String, null]
    }
  },
  methods: {
    del (id) {
      this.$emit('del', id)
    },
    open (id) {
      this.$emit('open', id)
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.btn-td {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

/* th,
td {
  border: 1px solid #ccc;
  padding: 10px;
} */

th {
  background: #f8f8f8;
}

.btn-box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s ease;
}

.btn-box.loading {
  transform: scale(1.08);
  z-index: 10;
  opacity: 0.85;
  cursor: not-allowed;
}

.btn-box:active {
  transform: scale(1.08);
  z-index: 10;
}

.btn-box .spinner-border {
  width: 16px;
  height: 16px;
  border-width: 2px;
}

/* .btn-loading {
  width: 16px;
  height: 16px;
  border-width: 2px;
} */

.btn-text {
  transition: opacity 0.2s ease;
}

.edit {
  background: #67c23a;
}

.del {
  background: #f56c6c;
}

.spinner-border {
  transition: 0.5
}
</style>
