<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="text-primary">{{ title }}</h2>
          <button-badge @click="close(type)"><close-icon /></button-badge>
        </div>
        <div class="modal-body">
          <slot name="body"> </slot>
        </div>
        <div class="modal-footer">
          <slot name="btn"
            ><base-button @click="close(type)" class="modal-default-button"
              >Продолжить выбирать
            </base-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./buttons/BaseButton.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import ButtonBadge from "./buttons/ButtonBadge.vue";
import { mapActions } from "vuex";
export default {
  components: {
    ButtonBadge,
    CloseIcon,
    BaseButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("modalStore", ["close"]),
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  max-width: 700px;
  padding: 20px 30px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
