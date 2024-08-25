<script setup lang="ts">
import { ref } from "vue";

const dataTheme = ref("");

const dataThemeChange = () => {};

const title = ref("");

const ruleForm = ref({
  username: "",
  password: "",
});

const loginRules = [{}];

const onLogin = () => {};
</script>

<template>
  <div class="select-none">
    <img src="" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <el-switch
        v-model="dataTheme"
        inline-prompt
        active-icon="dayIcon"
        inactive-icon="darkIcon"
        @change="dataThemeChange"
      />
    </div>
    <div class="login-container">
      <div class="img">
        <!-- <component is="toRaw(illustration)" /> -->
      </div>
      <div class="login-box">
        <div class="login-form">
          <!-- <avatar class="avatar" /> -->
          <!-- <Motion>
            <h2 class="outline-none">{{ title }}</h2>
          </Motion> -->

          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
          >
            <!-- <Motion :delay="100"> -->
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入账号',
                  trigger: 'blur',
                },
              ]"
              prop="username"
            >
              <el-input
                v-model="ruleForm.username"
                clearable
                placeholder="账号"
              />
            </el-form-item>
            <!-- </Motion> -->

            <!-- <Motion :delay="150"> -->
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                clearable
                show-password
                placeholder="密码"
              />
            </el-form-item>
            <!-- </Motion> -->

            <!-- <Motion :delay="250"> -->
            <el-button
              class="w-full mt-4"
              size="default"
              type="primary"
              @click="onLogin"
            >
              登录
            </el-button>
            <!-- </Motion> -->
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/styles/login.css");
</style>
<style lang="scss" scoped></style>
