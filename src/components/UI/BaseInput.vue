<template>
  <div class="form-group mb-4">
    <label :for="mark">{{ title }}</label>
    <input
      class="form-control"
      :type="typeInp"
      :id="mark"
      :placeholder="title"
      :value="value"
      @input="changeInp"
    />
  </div>
</template>

<script>
export default {
  props: {
    typeInp: {
      type: String,
      required: true,
    },
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

<style></style>
