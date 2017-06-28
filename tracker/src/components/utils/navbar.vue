<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <!--<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">-->
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Dashboard</a>
        <a class="nav-item is-tab is-hidden-mobile">Matches</a>
        <a class="nav-item is-tab is-hidden-mobile">Formations</a>
        <a class="nav-item is-tab is-hidden-mobile">Custom Tactics</a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet is-active">Dashboard</a>
        <a class="nav-item is-tab is-hidden-tablet">Matches</a>
        <a class="nav-item is-tab is-hidden-tablet">Formations</a>
        <a class="nav-item is-tab is-hidden-tablet">Custom Tactics</a>
        <a class="nav-item is-tab">
          Profile
        </a>
        <a class="nav-item is-tab">Log out</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
