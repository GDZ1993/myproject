<template>
    <div>
      <Button type="warning" icon="md-add" @click="add_modal = !add_modal">添加菜单</Button>
      <Modal v-model="add_modal" width="480" @on-cancel="add_modal_cancel">
        <p slot="header" style="text-align:center">
          <span>添加菜单</span>
        </p>
        <Form ref="one_levelForm" :model="one_levelForm" :rules="ruleOne_levelForm" :label-width="80">
          <FormItem label="菜单名称" prop="name">
            <Input v-model="one_levelForm.name" placeholder="请输入菜单名称"></Input>
          </FormItem>
          <FormItem label="菜单路径" prop="url">
            <Input v-model="one_levelForm.url" placeholder="如:/view/home/home"></Input>
          </FormItem>
          <FormItem label="菜单备注" prop="remarks">
            <Input v-model="one_levelForm.remarks" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="备注:"></Input>
          </FormItem>
        </Form>
        <div slot="footer" style="text-align: center">
          <Button @click="add_modal_cancel">取消</Button>
          <Button type="primary" @click="add_modal_click" :loading="add_modal_loading_but">确定</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
export default {
  name: 'MenuManage',
  data () {
    return {
      add_modal: false,
      add_modal_loading_but: false,
      one_levelForm: {
        name: '', // 菜单名称
        url: '', // 菜单路径
        parentcode: '', // 父级菜单id
        remarks: '' // 菜单备注
      },
      ruleOne_levelForm: {
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入菜单路径', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    add_modal_cancel () {
      this.$refs['one_levelForm'].resetFields()
      this.add_modal = false
    },
    add_modal_click () {
      this.$refs['one_levelForm'].validate((valid) => {
        if (valid) {
          this.addMenuRequest()
        } else {
          this.$Notice.warning({title: '警告', desc: '请认真完善内容'})
        }
      })
    },
    addMenuRequest () { // POST /user/menu
      this.add_modal_loading_but = true
      this.$ajax.post('/user/menu', this.one_levelForm).then(res => {
        console.log(res)
        this.add_modal_loading_but = false
      }).catch((e) => {
        console.log(e, '/user/menu')
        this.add_modal_loading_but = false
        this.$Notice.warning({title: '警告', desc: '接口错误,请与系统管理员联系,/user/menu'})
      })
    }
  },
  beforeMount () {
  }
}
</script>
<style scoped></style>
