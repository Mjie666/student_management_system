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
          <td>{{item.sid}}</td>
          <td>{{item.name}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.age}}</td>
          <td>{{item.className}}</td>
          <td>
            <button class="edit" @click="open(item.id)">修改</button>
            <button class="del" @click="del(item.id)">删除</button>
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

/* th,
td {
  border: 1px solid #ccc;
  padding: 10px;
} */

th {
  background: #f8f8f8;
}

.edit {
  background: #67c23a;
  margin-right: 5px;
}

.del {
  background: #f56c6c;
}

</style>
