<template>
  <q-page class="bg-accent">
    <!-- MAIN HEADER IF BROWSER IS IE -->
    <template v-if="$q.platform.is.name === 'ie'">
      <q-item ref="benefits" class="q-px-xl q-pt-none q-pb-xl bg-white">
        <!-- <q-item-section>
          <q-item-label header class="text-h3 text-bold text-primary q-px-none q-py-lg">
            Get Started with Docudad
          </q-item-label>
          <q-item-label class="row">
            <div class="col-7 column q-pl-none q-pr-xl">
              <div class="row text-h6 q-px-md q-pt-sm q-pb-md" style="max-width: 30em; border: 4px solid #F3A533;">
                <span class="text-bold">Benefits of DocuDad</span>
                <ul class="no-margin">
                  <li>
                    Initiate a guided co-parenting partnership with DocuDad.
                  </li>
                  <li>
                    Increase effective communication and parental engagement
                    through documented Parenting!
                  </li>
                </ul>
              </div>
              <div class="row text-h6 q-mt-xl q-px-md q-pt-sm q-pb-md" style="max-width: 40em; border: 4px solid #F3A533;">
                In many cases, the interests of the state and mother outweigh that of an
                unmarried biological father if he doesn't take action in a timely manner to establish
                and demonstrate a relationship with his child. Documentation of this is important!!!
                <br><br>
                Take action now!!! Download the DocuDad App today:
                <br>
                <q-btn class="q-mt-sm" color="secondary" label="Download" to="#" />
              </div>
            </div>
            <img alt="DocuDad" src="../../public/images/mainpic.jpg" class="col-5" style="max-height: 400px;" />
          </q-item-label>
        </q-item-section> -->
        <img alt="Samuels Baby Shower" src="../../public/images/mainpic.jpg" class="full-width" style="max-height: 750px;" />
        <div class="column absolute full-width">
          <div class="col q-pa-sm text-center" style="color: #F3A533;">
            <span class="text-bold text-h5">Jasmine Adriane Samuels Baby Shower</span><br>
            <span>
              Jun 26, 1:00 PM PDT <br>
              951 S Beach Blvd, La Habra, CA 90631, USA
            </span>
          </div>
        </div>
      </q-item>
    </template>
    <!-- MAIN HEADER -->
    <template v-else>
      <q-item ref="benefits" class="q-pa-none">
        <!-- HEADER IF PLATFORM IS MOBILE -->
        <template v-if="$q.platform.is.mobile">
          <q-item-section>
            <q-item-label>
              <div class="text-primary text-h5 text-bold q-pa-sm">Get Started with Docudad</div>
              <img alt="DocuDad" src="../../public/images/mainpic.jpg" class="full-width" style="max-height: 750px;" />
              <div class="q-pa-sm">
                Download the<span class="text-subtitle2 text-bold"> DocuDad App</span> today:
                <q-btn class="float-right vertical-top" color="secondary" label="Download" size="xs" to="#" />
              </div>
              <div :class="'column bg-white q-pa-sm'" style="border-top: 1px solid #F3A533; border-bottom: 1px solid #F3A533;">
                <div class="col text-subtitle1">
                  <span class="text-bold">Benefits of DocuDad</span>
                  <ul class="no-margin q-pl-lg text-body2">
                    <li>
                      <!-- Initiate a guided co-parenting partnership with DocuDad. -->
                      Help's to initiate a guided co-parenting partnership
                    </li>
                    <li>
                      Increase's effective communication and parental engagement
                      through documented Parenting!
                    </li>
                  </ul>
                </div>
                <div class="col text-subtitle2 q-mt-sm">
                  In many cases, the interests of the state and mother outweigh that of an
                  unmarried biological father if he doesn't take action in a timely manner to establish
                  and demonstrate a relationship with his child.
                  <span style="font-weight: 900;">DOCUMENTATION</span> of this is <span style="font-weight: 900;">IMPORTANT!!!</span>
                </div>
              </div>
            </q-item-label>
          </q-item-section>
        </template>
        <!-- HEADER IF PLATFORM IS DESKTOP -->
        <template v-else>
          <img alt="Samuels Baby Shower" src="../../public/images/mainpic.jpg" class="full-width" style="max-height: 750px;" />
          <div class="column absolute full-width">
            <div class="col q-pa-sm text-center" style="color: #F3A533;">
              <span class="text-bold text-h5">Jasmine Adriane Samuels Baby Shower</span><br>
              <span>
                Jun 26, 1:00 PM PDT <br>
                951 S Beach Blvd, La Habra, CA 90631, USA
              </span>
            </div>
          </div>
          <div class="q-ml-xl absolute-bottom">
            <div class="q-pa-sm" style="max-width: 20em; color: #F3A533;">
              <span class="text-bold text-h6">Links to Available Registry's</span><br>
              <q-list>
                <q-item clickable dense>
                  <q-item-section>
                    <q-item-label>Amazon</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable dense exact to="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended">
                  <q-item-section>
                    <q-item-label>Buy Buy Baby</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable dense>
                  <q-item-section>
                    <q-item-label>Target</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable dense to="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7/">
                  <q-item-section>
                    <q-item-label>Walmart</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </template>
      </q-item>
    </template>
  </q-page>
</template>

<script>

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  name: 'PageIndex',
  watch: {
    $route (val) {
      const hashId = val.hash.slice(1)
      const refKeys = Object.keys(this.$refs)
      if (refKeys.includes(hashId)) {
        const el = this.$refs[hashId].$el
        this.scrollToElement(el)
      }
    }
  },
  methods: {
    scrollToElement (el) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 500
      setScrollPosition(target, offset, duration)
    },
    goWalmart () {
      window.location = 'https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7/'
    }
  },
  mounted () {}
}
</script>
