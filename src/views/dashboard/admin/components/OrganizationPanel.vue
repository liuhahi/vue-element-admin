<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t('organization.manage')}}</span>
      </div>
      <div class="component-item">
        <el-button type="primary" @click="dialogFormVisible = true">{{ $t('organization.create') }}</el-button>
      </div>
      <el-table
        v-loading="orgListLoading"
        :data="orgs"
        row-key="_id"
        border
        fit
        highlight-current-row
        style="width: 100%;margin-top:20px"
      >
        <el-table-column min-width="300px" :label="$t('organization.name')">
          <template slot-scope="scope">
            <router-link
              :to="{ path: `/org/${scope.row._id}` }"
              class="link-style"
            >{{ scope.row.name }}</router-link>
          </template>
        </el-table-column>

        <el-table-column width="110px" align="center" :label="$t('organization.type')">
          <template slot-scope="scope">
            <span>{{ $t(typeConvert(scope.row.type.path)) }}</span>
          </template>
        </el-table-column>
        <el-table-column width="110px" align="center" :label="$t('action')">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click="deleteOrgActionClick(scope.row._id)"
            >{{ $t('delete')}}</el-button>
            <!-- <el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">Edit</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- <create-org-dialog :dialogFormVisible="dialogFormVisible"></create-org-dialog> -->
    <el-dialog :title="$t('organization.create')" :visible.sync="dialogFormVisible" width="600px">
      <el-form v-loading="createOrgLoading" :model="form">
        <el-form-item :label="$t('organization.name')" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="$t('organization.name')" :label-width="formLabelWidth">
          <el-select v-model="form.type" :placeholder="$t('organization.select_type')">
            <el-option :label="$t('organization.clean')" value="company.clean"></el-option>
            <el-option :label="$t('organization.sales')" value="company.sales"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('cancel') }}</el-button>
        <el-button
          type="primary"
          :disabled="createOrgLoading"
          @click="createOrgOnClick"
        >{{ $t('confirm') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('organization.create')" :visible.sync="deleteFormVisible" width="600px">
      <div>{{$t('organization.delete_text')}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteFormVisible = false">{{ $t('cancel') }}</el-button>
        <el-button
          type="primary"
          :disabled="createOrgLoading"
          @click="deleteOrgOnClick"
        >{{ $t('confirm') }}</el-button>
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
      deleteFormVisible: false,
      selectedOrgId: "",
      form: {
        name: "",
        type: ""
      },
      formLabelWidth: "120px",
      createOrgLoading: false,
      orgListLoading: false
    };
  },
  created() {
    this.userHome();
  },
  methods: {
    ...mapActions(["createOrg", "userHome"]),
    handleSetLineChartData(type) {
      this.$emit("handleSetLineChartData", type);
    },
    createOrgOnClick() {
      this.createOrgLoading = true;
      this.orgListLoading = true;
      this.createOrg(this.form).then(() => {
        this.dialogFormVisible = false;
        this.createOrgLoading = false;
        this.userHome().then(() => {
          this.orgListLoading = false;
        });
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
    ...mapGetters(["orgs"])
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
