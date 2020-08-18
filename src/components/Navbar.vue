<template>
    <nav class="nav-extended indigo darken-2">
    <div class="nav-wrapper">
        <router-link :to="{name: 'Home'}">
            <span class="brand-logo">Ninja Smoothies</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
            <router-link :to="{name: 'AddSmoothie'}">
                <i class="material-icons">add</i>
            </router-link>
        </a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {

            }
        }
    }
</script>

<style>
    .brand-logo {
        padding: 0 20px !important;
    }
</style>