 <template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="false"
      :rowClassName="rowClassName"
    >
      <template slot="avatar" slot-scope="text, record">
        <span class="avatar"> {{ record.avatar }}</span>
      </template>
      <template slot="action" slot-scope="text, record">
        <div class="d-flex justify-content-end">
          <button
            @click="(event) => $emit('clickEdit', { event, edit: record })"
            class="btn-custom me-2"
          >
            <i class="bi bi-pencil"></i>
          </button>
          <button
            @click="(event) => $emit('clickDelete', { event, key: record.key })"
            class="btn-custom"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Array, required: true },
    rowClassName: { type: Function },
  },
  setup() {
    const columns = [
      {
        dataIndex: "avatar",
        key: "avatar",
        width: "5%",
        scopedSlots: { customRender: "avatar" },
      },
      {
        dataIndex: "name",
        name: "name",
        title: "Contatos",
        key: "name",
        width: "25%",
      },
      {
        title: "E-mail",
        dataIndex: "email",
        key: "email",
        width: "25%",
      },
      {
        title: "Telefone",
        dataIndex: "phone",
        key: "phone",
        width: "25%",
      },
      {
        key: "action",
        width: "20%",
        dataIndex: "action",
        scopedSlots: { customRender: "action" },
      },
    ];

    return {
      columns,
    };
  },
};
</script>

<style scoped>
@import "../components/Table.css";
</style>
