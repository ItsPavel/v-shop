<template>
  <div class="container">
    <section class="row justify-content-center">
      <div class="d-flex justify-content-center pt-5 text-uppercase">
        <h3>
          <small class="text-muted">5 причин</small>
          заказать прямо сейчас
        </h3>
      </div>
      <card-item-section v-for="(card, i) in cards" :key="i" :card="card"
        ><i class="fs-2 text-primary" :class="card.iconClass"></i
      ></card-item-section>
    </section>
  </div>
</template>

<script>
import CardItemSection from "./CardItemSection.vue";
export default {
  components: {
    CardItemSection,
  },
  data() {
    return {
      cards: [
        {
          title: "Надежная Упаковка",
          description:
            "Способна уберечь заказ от повреждений! Картонные коробки, воздушно-пузырьковая пленка, пенопласт.",
          iconClass: "bi bi-box2",
        },
        {
          title: "Удобный способ оплаты",
          description: "Можете оплатить товар любым удобным для вас способом.",
          iconClass: "bi bi-credit-card",
        },
        {
          title: "Быстрая доставка",
          description: "от 5 дней(зависит от региона).",
          iconClass: "bi bi-truck",
        },
        {
          title: "Доставим в любой город",
          description:
            "Мы федеральный клиент почты России. Доставка во все города и села РФ быстрее и дешевле.",
          iconClass: "bi bi-geo-alt",
        },
        {
          title: "Гарантия",
          description:
            "100% гарантия возврата денег, если товар не устроил Вас.",
          iconClass: "bi bi-shield-check",
        },
      ],
    };
  },
};
</script>

<style></style>
