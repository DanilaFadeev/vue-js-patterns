<template>
  <div>
    <h1>Coffe Machine</h1>
    <div>
      <p>Coffee machine capacity: {{ capacity }}</p>
      <p>Available space: {{ availableSpace }}</p>
    </div>
    <div>
      <el-input-number v-model="coffeeHolder" size="small" />
      <el-button size="small" @click="putCoffee">
        Add to machine
      </el-button>
    </div>
    <p v-if="makingCoffee">
      Wait until you get a tasty coffee..
    </p>
    <el-button class="mt-20" :disabled="makingCoffee" @click="makeCoffee">
      Make coffee
    </el-button>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
class CoffeeMachine extends Vue {
  capacity = 100
  makingCoffee = false
  coffeeInMachine = 0;
  coffeeHolder = 0

  putCoffee() {
    if (this.coffeeInMachine + this.coffeeHolder >= this.capacity) {
      this.coffeeInMachine = this.capacity;
      this.$message({
        message: 'Coffee machine is full!',
        type: 'error'
      });
    } else {
      this.coffeeInMachine += this.coffeeHolder;
    }

    this.coffeeHolder = 0;
  }

  async makeCoffee() {
    if (this.coffeeInMachine < 20) {
      this.$message({
        message: 'To make a coffee you need at least 20 coffee units!',
        type: 'error'
      });
      return;
    }
    this.makingCoffee = true;
    await new Promise((resolve) => {
      setTimeout(() => {
        this.finishCoffeeMaking();
        resolve();
      }, 5000);
    });
  }

  finishCoffeeMaking() {
    this.coffeeInMachine = 0;
    this.makingCoffee = false;
    this.$message({
      message: 'Your coffee is ready',
      type: 'success'
    });
  }

  get availableSpace() {
    return this.capacity - this.coffeeInMachine;
  }
}

export default CoffeeMachine;
</script>

<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
