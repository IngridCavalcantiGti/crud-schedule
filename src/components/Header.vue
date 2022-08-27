<template>
  <div class="p-4 d-flex gap-4">
    <img alt="logo" src="../assets/ic-logo.png" />
    <Button
      @click="(event) => $emit('click', { event })"
      v-if="isAddContactVisible"
    />
    <div class="flex-grow-1">
      <a-input placeholder="Buscar...">
        <template #suffix>
          <button
            @click="(event) => $emit('clickSearch', { event })"
            class="btn-custom"
          >
            <i class="bi bi-search"></i>
          </button>
        </template>
      </a-input>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  props: { isAddContactVisible: { type: Boolean } },
};
</script>

<style>
@import "../components/Header.css";
</style>
