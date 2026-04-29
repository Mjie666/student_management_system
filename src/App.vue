<template>
  <div class="container">
    <h2>学生管理系统（前后端完整版）</h2>
    <EditPage
    v-if="isShow"
    :stuObj="editObj"
    @save="handleEdit"
    @close="handleClose">
    </EditPage>
    <HeadPage
    :addLoading="addLoading"
    @add="handleAdd">
    </HeadPage>
    <BodyPage
    :editID="editID"
    :delID="delID"
    :stusObj="studentsObj"
    @del="handleDel"
    @open="handleOpen">
    </BodyPage>
  </div>
</template>

<script>
import HeadPage from './components/HeadPage.vue'
import BodyPage from './components/BodyPage.vue'
import EditPage from './components/EditPage.vue'
import { getStudent, addStudent, delStudent, editStudent } from '@/api/student.js'

/*
  axios.get("http://192.168.1.146:8080/api/student")    Get

  axios.post("http://192.168.1.146:8080/api/student", data)     Add   data:{ sid,name,gender,age,className}

  axios.delete("http://192.168.1.146:8080/api/student/" + id)     Del   id

  axios.put("http://192.168.1.146:8080/api/student", { id, name, gender, age, className })    Edit    { id, name, gender, age, className }
*/

export default {
  components: {
    HeadPage,
    BodyPage,
    EditPage
  },
  created () {
    this.get()
  },
  data () {
    return {
      addLoading: true,
      delID: null,
      editID: null,
      indexID: null,
      isShow: false,
      editObj: {},
      studentsObj: [
        /* {
          id: '',
          sid: '',
          name: '',
          gender: '',
          age: '',
          className: ''
        } */
      ]
    }
  },
  methods: {
    async get () {
      const res = await getStudent()
      this.studentsObj = res.data
    },
    async handleAdd (data) {
      try {
        this.addLoading = false
        /* console.log('1. handleAdd 触发，data =', data) */
        await addStudent(data)
        /* console.log('2. addStudent 完成') */
        await this.get()
        /* console.log('3. get 完成，studentsObj =', this.studentsObj) */
      } finally {
        this.addLoading = true
      }
    },
    async handleDel (id) {
      try {
        this.delID = id
        /* console.log('1. handleDel 触发，id =', id) */
        await delStudent(id)
        /* console.log('2. delStudent 完成') */
        await this.get()
        /* console.log('3. get 完成，studentsObj =', this.studentsObj) */
      } finally {
        this.delID = null
      }
    },
    async handleEdit (data) {
      try {
        this.editID = data.id
        await editStudent(data)
        await this.get()
      } finally {
        this.editID = null
      }
    },
    handleOpen (id) {
      try {
        this.indexID = id
        this.editObj = this.studentsObj.find((item) => item.id === id)
        console.log(this.editObj)
        this.isShow = true
      } finally {
        this.indexID = null
      }
    },
    handleClose (value) {
      this.isShow = value
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
