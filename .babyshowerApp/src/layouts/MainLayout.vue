<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="$q.platform.is.mobile ? 'bg-accent shadow-1' : 'bg-accent shadow-3'">
      <q-toolbar class="q-px-none">
        <q-toolbar-title class="text-primary">
          <q-btn flat dense rounded to="/" label="samuels family" size="md" :class="$q.platform.is.mobile ? 'q-ml-sm' : 'q-ml-xl'" style="color: white;" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-accent q-py-md" reveal>
      <span class="invisible">testing</span>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      leftDrawerOpen: false,
      showMobileMenu: false
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
