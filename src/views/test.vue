<template>
    <div class="input-box">
      <van-cell-group>
        <van-field
          v-model="sms"
          center
          clearable
          label="验证码"
          placeholder="请输入短信验证码"
          @clear="sms = ''"
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
      return {
      value: '',
      sms: ''
    } 
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>

</style>