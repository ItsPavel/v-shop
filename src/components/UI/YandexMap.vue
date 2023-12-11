<template>
  <yandex-map
    :coords="settingsMap.coords"
    :zoom="settingsMap.zoom"
    :map-type="settingsMap.mapType"
    style="width: 500px; height: 500px"
  >
    <ymap-marker
      :coords="settingsMarker.coords"
      :marker-type="settingsMarker.markerType"
      :markerId="settingsMarker.markerId"
    ></ymap-marker>
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      settingsMap: {
        coords: [56.314132, 43.991497],
        zoom: 13,
        mapType: "map",
      },
      settingsMarker: {
        coords: [56.314132, 43.991497],
        markerType: "Placemark",
        markerId: "placemark",
      },
    };
  },
};
</script>

<style></style>
