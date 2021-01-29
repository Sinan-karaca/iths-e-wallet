<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h3>Are you sure you want to delete the card?</h3>
          </slot>
          <button type="button" @click="confirmDelete" aria-label="Close modal">
            Delete!
          </button>
          <button type="button" @click="close" aria-label="Close modal">
            Cancel
          </button>
        </header>
        <div class="modal-btn"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    confirmDelete() {
      this.$emit("confirmDelete");
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  width: 300px;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 250px;
  align-items: space-between;
  border-bottom: 1px solid #eeeeee;
  color: black;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
h3 {
  padding-left: 10px;
  padding-right: 10px;
}
button {
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 5px;
  width: 50%;
  height: 19%;
}
</style>
