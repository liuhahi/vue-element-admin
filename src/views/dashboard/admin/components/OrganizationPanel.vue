<template>
  <div>
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="40" :sm="40" :lg="40" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-button-wrapper">
            <el-button type="primary" @click="dialogFormVisible = true">{{ $t('organization.create') }}</el-button>
            <el-button type="primary" @click="dialogFormVisible = true">{{ $t('organization.join') }}</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="40" class="panel-group">
      <el-col v-for="org in orgList" :key='org._id'  :xs="40" :sm="40" :lg="40" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-button-wrapper">
            {{ org.name }}
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- create org -->
    <el-dialog :title="$t('organization.create')" :visible.sync="dialogFormVisible" width="600px">
      <el-form v-loading="dialogLoading" :model="form">
        <el-form-item :label="$t('organization.name')" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('cancel') }}</el-button>
        <el-button type="primary" :disabled="dialogLoading" @click="createOrgOnClick">{{ $t('confirm') }}</el-button>
      </div>
    </el-dialog>
    <!-- join organization -->
    <el-dialog :title="$t('organization.join')" :visible.sync="dialogFormVisible" width="600px">
      <el-form v-loading="dialogLoading" :model="form">
        <el-form-item :label="$t('organization.name')" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('cancel') }}</el-button>
        <el-button type="primary" :disabled="dialogLoading" @click="joinOrgOnClick">{{ $t('confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CountTo
  },
  data() {
    return {
      dialogFormVisible: false,
      joinFormVisible: false,
      form: {
        name: "",
        type: ""
      },
      formLabelWidth: '120px',
      dialogLoading: false,
    }
  },
  created(){
    this.getOrgs().then(()=>{
      console.log(this.orgList);
    });
  },
  methods: {
    ...mapActions(["createOrg", "joinOrg", "getOrgs"]),
    handleSetLineChartData(type) {
      this.$emit("handleSetLineChartData", type);
    },
    createOrgOnClick(){
      this.dialogLoading = true;
      this.createOrg(this.form).then(()=>{
        this.dialogFormVisible = false;
        this.dialogLoading = false;
      });

    },
    joinOrgOnClick(){
      this.dialogLoading = true;
      this.joinOrg(this.form).then(()=>{
        this.dialogFormVisible = false;
        this.dialogLoading = false;
      });
    },
    deleteOrgActionClick(id) {
      this.selectedOrgId = id;
      this.deleteFormVisible = true;
    },
    deleteOrgOnClick() {
      this.deleteFormVisible = false;
      // this.deleteOrg({id: this.selectedOrgId});
    },
    typeConvert(text) {
      if (text == "company.clean") return "organization.clean";
      if (text == "company.sales") return "organization.sales";
    }
  },
  computed: {
    ...mapGetters(["orgList"])
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-button-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
