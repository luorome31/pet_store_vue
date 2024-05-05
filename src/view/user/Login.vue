<template>
  <div class="container">
    <Navbar />
    <div class="form-container">
      <el-row class="login-page">
        <el-col :span="7" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form">
          <!-- 注册表单 -->
          <el-form
            ref="form"
            size="large"
            autocomplete="off"
            v-if="isRegister"
            :model="registerForm"
            :rules="rules"
          >
            <el-form-item>
              <h1>注册</h1>
            </el-form-item>
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                placeholder="请输入用户名"
                v-model="LoginData.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :prefix-icon="Lock"
                type="password"
                placeholder="请输入密码"
                v-model="LoginData.password"
              ></el-input>
            </el-form-item>
            <el-form-item prop="repassword">
              <el-input
                :prefix-icon="Lock"
                type="password"
                placeholder="请再次输入密码"
                v-model="LoginData.repassword"
              ></el-input>
            </el-form-item>
            <!-- 弹出框按钮 -->
            <el-button
              plain
              @click="dialogFormVisible = true"
              class="register-btn1"
            >
              详细信息
            </el-button>
            <!-- 弹出框表单 -->
            <el-dialog
              v-model="dialogFormVisible"
              title="Account Information"
              width="500"
            >
              <el-form :model="registerForm">
                <el-form-item label="First name" :label-width="formLabelWidth">
                  <el-input
                    v-model="registerForm.FirstName"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Last name" :label-width="formLabelWidth">
                  <el-input
                    v-model="registerForm.LastName"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Email" :label-width="formLabelWidth">
                  <el-input v-model="registerForm.email" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Phone" :label-width="formLabelWidth">
                  <el-input v-model="registerForm.Phone" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Address1" :label-width="formLabelWidth">
                  <el-input
                    v-model="registerForm.Address1"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Address2" :label-width="formLabelWidth">
                  <el-input
                    v-model="registerForm.Address2"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="City" :label-width="formLabelWidth">
                  <el-input v-model="registerForm.City" autocomplete="off" />
                </el-form-item>
                <el-form-item label="State" :label-width="formLabelWidth">
                  <el-input v-model="registerForm.State" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zip" :label-width="formLabelWidth">
                  <el-input v-model="registerForm.Zip" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Country" :label-width="formLabelWidth">
                  <el-input v-model="registerForm.Country" autocomplete="off" />
                </el-form-item>
              </el-form>
              <template #footer>
                <div class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >Cancel</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                  </el-button>
                </div>
              </template>
            </el-dialog>
            <!-- 注册按钮 -->
            <el-form-item>
              <el-button
                class="button"
                type="primary"
                auto-insert-space
                @click="register"
              >
                注册
              </el-button>
            </el-form-item>
            <!-- 返回按钮 -->
            <el-form-item class="flex">
              <el-link
                type="info"
                :underline="false"
                @click="
                  isRegister = false;
                  clearLoginData();
                "
              >
                ← 返回
              </el-link>
            </el-form-item>
            <!-- 返回按钮结束 -->
          </el-form>
          <!-- 登录表单 -->
          <el-form
            ref="form"
            size="large"
            autocomplete="off"
            v-else
            :model="LoginData"
            :rules="rules"
          >
            <el-form-item>
              <h1>登录</h1>
            </el-form-item>
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                placeholder="请输入用户名"
                v-model="LoginData.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                name="password"
                :prefix-icon="Lock"
                type="password"
                placeholder="请输入密码"
                v-model="LoginData.password"
              ></el-input>
            </el-form-item>
            <el-form-item class="flex">
              <div class="flex">
                <el-checkbox>记住用户名</el-checkbox>
                <el-link type="primary" :underline="false">忘记密码？</el-link>
              </div>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item>
              <el-button
                class="button"
                type="primary"
                auto-insert-space
                @click="login"
                >登录</el-button
              >
            </el-form-item>
            <el-form-item class="flex">
              <el-link
                type="info"
                :underline="false"
                @click="
                  isRegister = true;
                  clearLoginData();
                "
              >
                注册 →
              </el-link>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import Navbar from "@/component/Navbar.vue";
import { reactive, ref } from "vue";
import axios from "axios";
//控制弹出框的显示
const dialogFormVisible = ref(false);
import { User, Lock, Phone } from "@element-plus/icons-vue";
//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false);
const formLabelWidth = "140px";
// 详细注册信息数据模型
const registerForm = reactive({
  username: "",
  password: "",
  repassword: "",
  FirstName: "",
  LastName: "",
  email: "",
  Phone: false,
  Zip: [],
  State: "",
  City: "",
  Country: "",
  Address1: "",
  Address2: "",
});

//登录数据模型
const LoginData = ref({
  username: "",
  password: "",
  repassword: "",
});
// 校验密码的函数
const checkRepassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次确认密码"));
  } else if (value !== LoginData.value.password) {
    callback(new Error("请确保再次输入的密码一样"));
  } else {
    callback();
  }
};
// 定义表单校检规则
const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 5,
      max: 16,
      message: "用户名长度为5—16为非空字符",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 5,
      max: 16,
      message: "密码长度为5—16为非空字符",
      trigger: "blur",
    },
  ],
  repassword: [
    {
      validator: checkRepassword,
      trigger: "blur",
    },
  ],
};
//调用后台接口，完成注册请求
import { userRegisterService, userLoginService } from "@/api/user.js";
const register = async () => {
  let result = await userRegisterService(LoginData.value);
  //根据接口写处理
};
//登录函数
import { useTokenStore } from "@/stores/token.js";
import { useRouter } from "vue-router";
const router = useRouter();
const tokenStore = useTokenStore();
const login = async () => {
  let result = await userLoginService(LoginData.value);
  //根据接口写处理
  tokenStore.setToken(result.data);
};
//清空数据模型
const clearLoginData = () => {
  LoginData.value = {
    username: "",
    password: "",
    repassword: "",
  };
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex .el-checkbox {
  margin-right: 10px;
  /* 调整复选框右侧的间距 */
}

.form-container {
  margin-top: 70px;
  /* 根据需要调整垂直距离 */
}

.button {
  display: flex;
  justify-content: center;
}

.register-btn1 {
  margin-bottom: 20px;
}
</style>
