<template>
  <div class="flex">
    <div class="container">
      <div class="w-full mt-1">123</div>
      <ion-icon name="heart"></ion-icon>

      <div class="arrow-up"></div>
      <div class="arrow-down"></div>
      <div class="arrow-left"></div>
      <div class="arrow-right"></div>
    </div>
    <Button />
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { ToggleDarkMode } from '/@/components/Advance'
import Button from '/@/components/Test/Button'
export default defineComponent({
  name: 'Index',
  components: {
    ToggleDarkMode,
    Button,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #f00;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 160px solid green;
  transform: rotate(90deg);
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid blue;
}
</style>
