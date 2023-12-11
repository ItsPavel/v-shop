<template>
  <div class="form-group mb-4">
    <label :for="mark">{{ title }}</label>
    <textarea
      class="form-control textarea"
      rows="5"
      :id="mark"
      :value="value"
      @input="changeInp"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    mark: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeInp(e) {
      this.$emit("updValue", e.target.value);
    },
  },
};
</script>

<style>
.textarea {
  resize: none;
}
</style>
