<template>
 <div class="menu">
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=719292378935d0f9168f11f9ad00558d&auto=format&fit=crop&w=500&q=60" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">Kryptonite Cheese-Burger</h2>
        </md-card-header>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-list md-horizontal-line">
            <md-list-item>5:30PM</md-list-item>
            <md-list-item>7:30PM</md-list-item>
            <md-list-item>9:00PM</md-list-item>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>
 </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      title: 'menu'
    }
  }
}
</script>
<style scoped>
</style>
