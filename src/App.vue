<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-menu" md-label="Menu" to="/">
      </md-tab>

      <md-tab id="tab-records" md-label="Records" to="/records">
        records tab
      </md-tab>

      <md-tab id="tab-contact" md-label="Contact" to="/contact">
        Send Us a Message
      </md-tab>

      <md-tab id="tab-faqs" md-label="FAQs" to="/faqs">
        Frequently Asked Questions
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
