<template>
  <div class="block">
    <p>Awesome Flight Booking</p>
    <el-date-picker
      v-model="flightDay"
      type="date"
      placeholder="Pick a day"
    />
    <div>
      <p v-if="!flightDay">
        Day is not chosen yet 😑
      </p>
      <p v-else-if="flightDay < today">
        Sales already finished 🤥
      </p>
      <p v-else-if="flightDay < sevenDaysAfter">
        No free places 😬
      </p>
      <p v-else>
        There are some flights 🤫
      </p>
    </div>
  </div>
</template>

<script>
const today = new Date();

export default {
  data() {
    return {
      today,
      flightDay: null,
      sevenDaysAfter: (new Date()).setDate(today.getDate() + 7)
    };
  }
};
</script>
