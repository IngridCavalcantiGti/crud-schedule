<template>
  <div class="d-flex justify-content-center">
    <div>
      <img alt="Icone Plus" src="../assets/ic-book.png" class="me-2 d-block" />
      <span class="d-block mt-4 mb-4 text-center text-dark">
        Nenhum contato foi criado ainda
      </span>
      <Button @click="(event) => $emit('click', { event })" />
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
