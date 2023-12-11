<template>
  <div>
    <content-block></content-block>
    <section-cards></section-cards>
  </div>
</template>

<script>
import SectionCards from "@/components/CardsSection.vue";
import ContentBlock from "@/components/ContentBlock.vue";
export default {
  components: {
    ContentBlock,
    SectionCards,
  },
};
</script>
