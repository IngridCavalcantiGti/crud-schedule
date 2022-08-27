<template>
  <a-button
    class="d-flex align-items-center btn-custom mx-auto"
    @click="(event) => $emit('click', { event })"
  >
    <img alt="Icone Plus" src="../assets/ic-plus.png" class="me-2" />
    Criar contato
  </a-button>
</template>

<style scoped>
.btn-custom,
.btn-custom:hover,
.btn-custom:active,
.btn-custom:focus {
  background-color: #dbff90;
  color: #fa7268;
  width: 9rem;
  height: 2rem;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  font-weight: 500;
  border: transparent;
}
</style>
