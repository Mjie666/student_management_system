<template>
  <div>
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade d-block" :class="{ show: isShow }">
      <div class="modal-dialog modal-lg mt-10">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <h5 class="modal-title fw-bold fs-4">修改学生信息</h5>
          </div>

          <div class="modal-body px-4 py-3">
            <div class="row g-3">
              <div class="col text-center">
                <label class="form-label text-secondary fw-semibold">学号</label>
                <input class="form-control text-center" v-model="form.sid" placeholder="请输入学号" />
              </div>
              <div class="col text-center">
                <label class="form-label text-secondary fw-semibold">姓名</label>
                <input class="form-control text-center" v-model="form.name" placeholder="请输入姓名" />
              </div>
              <div class="col text-center">
                <label class="form-label text-secondary fw-semibold">性别</label>
                <input class="form-control text-center" v-model="form.gender" placeholder="请输入性别" />
              </div>
              <div class="col text-center">
                <label class="form-label text-secondary fw-semibold">年龄</label>
                <input class="form-control text-center" v-model="form.age" placeholder="请输入年龄" />
              </div>
              <div class="col text-center">
                <label class="form-label text-secondary fw-semibold">班级</label>
                <input class="form-control text-center" v-model="form.className" placeholder="请输入班级" />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="close">取消</button>
            <button class="btn btn-primary" @click="save">保存</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      isShow: false
    }
  },
  props: {
    stuObj: {
      type: Object
    }
  },
  watch: {
    stuObj: {
      immediate: true,
      handler (value) {
        document.body.classList.add('modal-open')
        this.form = { ...value }
      }
    }
  },
  methods: {
    save () {
      this.$emit('save', { ...this.form })
      this.isShow = false
      setTimeout(() => {
        this.$emit('close', false)
      }, 300)
      this.form = {}
    },
    close () {
      this.isShow = false
      setTimeout(() => {
        this.$emit('close', false)
      }, 300)
      this.form = {}
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = true
    }, 50)
  }
}
</script>
