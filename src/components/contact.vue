<template>
  <div class="container">
    <md-field>
      <label>Name</label>
      <md-input v-model="name" type="name" placeholder=" your name"></md-input>
    </md-field>

    <md-field>
      <label>Email</label>
      <md-input v-model="email" type="email" placeholder=" your@email.com"></md-input>
    </md-field>

    <md-field>
      <label>Message</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
    <md-button class="md-dense md-raised md-primary">Send</md-button>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data: () => ({
     
  })
}
</script>
<style>
#container {
  margin: 50px;
}
</style>
