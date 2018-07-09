<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-menu" md-label="Menu" to="/">
      </md-tab>

      <md-tab id="tab-reservations" md-label="Reservations" to="/reservations">
        Reservations tab
      </md-tab>

      <md-tab id="tab-contact" md-label="Contact" to="/contact">
        Contact Us tab
      </md-tab>

      <md-tab id="tab-faqs" md-label="FAQs" to="/faqs">
        FAQs tab
      </md-tab>
    </md-tabs>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
