<template>
  <div>
    <Header class="mb-2" @click="showModal" :isAddContactVisible="hasData" />
    <Table
      :data="data"
      v-if="hasData"
      @clickEdit="showModal"
      @clickDelete="showModalDelete"
      :rowClassName="
        (record, index) =>
          isActive && index === data.length - 1 ? 'active' : ''
      "
    />

    <EmptyData v-else @click="showModal" />
    <a-modal
      v-model="visible"
      :ok-button-props="{ props: { disabled: isDisabled } }"
      :title="titleModal"
      @ok="handleAdd"
      @cancel="clear"
      cancelText="Cancelar"
      okText="Salvar"
      width="27rem"
      :closable="false"
    >
      <span class="d-block">Nome</span>
      <a-input v-model="name" class="input-modal" />
      <span class="d-block mt-2">E-mail</span>
      <a-input v-model="email" class="input-modal" />
      <span class="d-block mt-2">Telefone</span>
      <a-input
        v-model="phone"
        v-mask="'(##) #########'"
        class="input-modal-phone"
      />
    </a-modal>
    <a-modal
      v-model="visibleDelete"
      title="Excluir contato"
      @ok="handleDelete"
      cancelText="Cancelar"
      okText="Excluir"
      :closable="false"
      width="27rem"
    >
      <span>Deseja realmente excluir o contato?</span>
    </a-modal>
  </div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";
import EmptyData from "@/components/EmptyData.vue";

export default {
  name: "Home",
  components: {
    Header,
    Table,
    EmptyData,
  },

  setup() {
    const isActive = ref(false);
    const visible = ref(false);
    const visibleDelete = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const isEdit = ref(false);
    const currentKey = ref(null);
    const titleModal = computed(() => (isEdit.value ? "Editar contato" : "Criar novo contato"));
    const showModal = ({ edit = false }) => {
      visible.value = true;
      isEdit.value = Boolean(edit);
      if (isEdit.value) {
        currentKey.value = edit.key;
        name.value = edit.name;
        email.value = edit.email;
        phone.value = edit.phone;
      }
    };

    const keyToDelete = ref();
    const showModalDelete = ({ key }) => {
      keyToDelete.value = key;
      visibleDelete.value = true;
    };

    const data = ref([]);

    const clear = () => {
      name.value = "";
      email.value = "";
      phone.value = "";
      currentKey.value = null;
    };

    const handleAdd = () => {
      let newKey = 1;
      if (data.value.length) {
        // eslint-disable-next-line max-len
        const item = data.value
          .map((dataItem) => dataItem.key)
          .reduce((oldValue, currentValue) => Math.max(oldValue, currentValue));
        newKey = item + 1;
      }
      const newData = {
        key: currentKey.value ?? newKey,
        avatar: `${name.value.substr(0, 1)} `,
        name: `${name.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
      };

      if (isEdit.value) {
        const position = data.value.map((item) => item.key).indexOf(currentKey.value);
        data.value.splice(position, 1, newData);
      } else {
        data.value.push(newData);
        isActive.value = true;
      }
      setTimeout(() => {
        isActive.value = false;
      }, 10000);

      visible.value = false;
      clear();
    };

    const hasData = computed(() => data.value.length > 0);

    const handleDelete = () => {
      const position = data.value.map((item) => item.key).indexOf(keyToDelete.value);
      data.value.splice(position, 1);
      keyToDelete.value = null;
      visibleDelete.value = false;
    };

    const isDisabled = computed(
      () => !name.value.length && !email.value.length && !phone.value.length,
    );

    return {
      visible,
      name,
      email,
      phone,
      showModal,
      handleAdd,
      data,
      titleModal,
      hasData,
      visibleDelete,
      showModalDelete,
      handleDelete,
      isDisabled,
      clear,
      isActive,
    };
  },
};
</script>

<style>
@import "../views/Home.css";
</style>
