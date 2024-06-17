<template>
  <div class="container">
    <Navbar />
    <div class="box">
      <!-- //跳转链接 -->
      <div class="link">
        <el-link
          :icon="Edit"
          @click="
            isOrder = false;
            isLog = false;
          "
          :underline="false"
          >My Order</el-link
        >
        <el-link
          :underline="false"
          @click="
            isLog = true;
            isOrder = false;
          "
        >
          <el-icon><Postcard /></el-icon> Log Record
        </el-link>
        <el-link
          @click="
            isOrder = true;
            isLog = false;
          "
          :underline="false"
        >
          <el-icon><UserFilled /></el-icon> Account Information
        </el-link>
      </div>
      <div class="verify">
        <!-- 基本信息 -->
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
          v-if="isOrder && isLog === false"
        >
          <el-form-item label="Password" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
              value="**********"
            />
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
              value="**********"
            />
          </el-form-item>
          <el-form-item label="FirstName" prop="FirstName">
            <el-input v-model.number="ruleForm.FirstName" value="j2ee" />
          </el-form-item>

          <el-form-item label="LastName" prop="LastName" >
            <el-input
              v-model="ruleForm.LastName"
              type="text"
              autocomplete="off"
              value="j2ee"
            />
          </el-form-item>
          <el-form-item label="Email" prop="email"  >
            <el-input
              v-model="ruleForm.email"
              type="text"
              autocomplete="off"
              value="2743057396@qq.com"
            />
          </el-form-item>
          <el-form-item label="Phone" prop="Phone" >
            <el-input
              v-model="ruleForm.Phone"
              type="text"
              autocomplete="off"
              value="88488888"
            />
          </el-form-item>
          <el-form-item label="Address1" prop="Address1">
            <el-input
              v-model="ruleForm.Address1"
              type="text"
              autocomplete="off"
              value="CSU railway campus"
            />
          </el-form-item>
          <el-form-item label="Address2" prop="Address2">
            <el-input
              v-model="ruleForm.Address2"
              type="text"
              autocomplete="off"
              value="a faraway place"
            />
          </el-form-item>
          <el-form-item label="City" prop="City">
            <el-input
              v-model="ruleForm.City"
              type="text"
              autocomplete="off"
              value="Changsha"
            />
          </el-form-item>
          <el-form-item label="State" prop="State">
            <el-input
              v-model="ruleForm.State"
              type="text"
              autocomplete="off"
              value="Hunan"
            />
          </el-form-item>
          <el-form-item label="Zip" prop="Zip">
            <el-input
              v-model="ruleForm.Zip"
              type="text"
              autocomplete="off"
              value="366300"
            />
          </el-form-item>
          <el-form-item label="Country" prop="Country">
            <el-input
              v-model="ruleForm.Country"
              type="text"
              autocomplete="off"
              value="China"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              Submit
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
        <!-- 基本信息结束 -->
        <!-- 订单显示 -->

        <el-descriptions
          title="My Order"
          direction="vertical"
          :column="4"
          :size="size"
          border
          v-else-if="isOrder === false && isLog === false"
        >
          <el-descriptions-item label="Username"
            >j2ee</el-descriptions-item
          >
          <el-descriptions-item label="Telephone"
            >18250147393</el-descriptions-item
          >
          <el-descriptions-item label="Address" :span="2"
            >Changsha railway campus</el-descriptions-item
          >
          <el-descriptions-item label="OrderId">
            <el-tag size="small">1001</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Date">
            <el-tag size="small">2024.5.1</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="TotalPrice"> $24 </el-descriptions-item>
          
        </el-descriptions>
        <!-- 订单结束 -->
        <!-- 日志记录 -->
        <el-table
          :data="tableData"
          :default-sort="{ prop: 'date', order: 'descending' }"
          style="width: 100%"
          v-else-if="isLog === true && isOrder === false"
        >
          <el-table-column prop="date" label="Date" sortable width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column
            prop="address"
            label="Records"
            :formatter="formatter"
          />
        </el-table>
        <!-- 日志结束 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/component/Navbar.vue";
import { reactive, ref } from "vue";
// 导入图标和链接
import { Edit, Postcard, UserFilled } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const checkValue = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("请输入"));
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
//确认密码
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("输入密码不符"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  FirstName: "",
  LastName: "",
  email: "",
  Phone: "",
  Zip: "",
  State: "",
  City: "",
  Country: "",
  Address1: "",
  Address2: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  FirstName: [{ validator: checkValue, trigger: "blur" }],
  LastName: [{ validator: checkValue, trigger: "blur" }],
  email: [{ validator: checkValue, trigger: "blur" }],
  Phone: [{ validator: checkValue, trigger: "blur" }],
  Zip: [{ validator: checkValue, trigger: "blur" }],
  State: [{ validator: checkValue, trigger: "blur" }],
  City: [{ validator: checkValue, trigger: "blur" }],
  Country: [{ validator: checkValue, trigger: "blur" }],
  Address1: [{ validator: checkValue, trigger: "blur" }],
  Address2: [{ validator: checkValue, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
//控制订单的显示， 默认显示用户信息
const isOrder = ref(true);
//订单
import type { ComponentSize } from "element-plus";

const size = ref<ComponentSize>("large");

//日志相关
import type { TableColumnCtx } from "element-plus";

interface User {
  date: string;
  name: string;
  address: string;
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address;
};

const tableData: User[] = [
  {
    date: "2024-05-03",
    name: "j2ee",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2024-05-02",
    name: "j2ee",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2024-05-04",
    name: "j2ee",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2024-06-15",
    name: "j2ee",
    address: "check Goldfish",
  },
  {
    date: "2024-06-16",
    name: "j2ee",
    address: "check Tiger Shark",
  },
];
const isLog = ref(false);
</script>

<style lang="scss" scoped>
.box {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 在容器内部平均分配剩余空间，设置左右间距 */
}

.verify {
  margin-top: 100px;
  flex: 3;
}

.link {
  margin-top: 100px;
  display: flex;
  flex-direction: column; /* 设置为垂直方向排列 */
  flex: 2; /* 填充剩余空间，使得 .link 撑开左侧空间 */
}

.el-link {
  margin-bottom: 20px; /* 设置链接之间的垂直间距 */
  margin-right: 8px; /* 设置链接之间的水平间距 */
}
.el-descriptions {
  margin-top: 20px;
}
</style>
