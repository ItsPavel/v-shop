<template>
  <div class="container">
    <div class="row vh-100 pt-5">
      <div class="col">
        <h2 class="text-primary">Адрес</h2>
        <yandex-map class="pt-2"></yandex-map>
        <p>Площадь Максима Горького, г. Нижний Новгород, Нижегородская обл.</p>
        <small class="form-text text-muted"><p>Телефон: +79999999999</p></small>
        <small class="form-text text-muted"><p>Email: email@em.org</p></small>
      </div>
      <div class="col">
        <h2 class="text-primary">Обратная связь</h2>
        <form-contacts :formInput="inp" :formTextarea="txtarea">
        </form-contacts>
      </div>
    </div>
  </div>
</template>

<script>
import FormContacts from "./FormContacts.vue";
import YandexMap from "./UI/YandexMap.vue";
export default {
  components: { YandexMap, FormContacts },
};
</script>
