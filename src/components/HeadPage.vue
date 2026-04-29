<template>
  <div class="form">
    <input id="sid" placeholder="学号" v-model.trim="data.sid"/>
    <input id="name" placeholder="姓名" v-model.trim="data.name"/>
    <input id="gender" placeholder="性别" v-model.trim="data.gender"/>
    <input id="age" placeholder="年龄" v-model.trim="data.age"/>
    <input id="className" placeholder="班级" v-model.trim="data.className"/>
    <button class="add" @click="add" v-if="addLoading">添加</button>
    <!-- <div class="loading-box" v-else> -->
    <div class="spinner-border text-secondary" role="status" v-else>
      <span class="visually-hidden">Loading...</span>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        sid: '',
        name: '',
        gender: '',
        age: '',
        className: ''
      }
    }
  },
  props: {
    addLoading: {
      type: Boolean
    }
  },
  methods: {
    add () {
      this.$emit('add', { ...this.data })
      this.isShow = false
      this.data = {
        sid: '',
        name: '',
        gender: '',
        age: '',
        className: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
input {
  flex: 1;
  min-width: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.add {
  background: #1677ff;
  white-space:  nowrap;
  flex-shrink: 0;
}
</style>
