<template>
  <q-page style="max-height: 400px;">
    <!-- MAIN HEADER IF BROWSER IS IE -->
    <template v-if="$q.platform.is.name === 'ie'">
      <q-item ref="benefits" class="q-px-xl q-pt-none q-pb-xl bg-white">
          <q-item-section class="bg-white">
            <div class="full-width">
              <div class="q-pa-sm text-center" style="color: #F3A533;">
                <span class="text-bold text-h5">Jasmine Adriane Samuels Baby Shower</span><br>
                <span>
                  Jun 26, 1:00 PM PDT <br>
                  951 S Beach Blvd, La Habra, CA 90631, USA
                </span><br>
                <span class="text-bold">
                  *** Diaper Raffle: The person that donates the most diapers has more of a chance to win a $50 giftcard ***
                </span>
              </div>
            </div>
            <img alt="Samuels Baby Shower" src="../../public/images/mainpic.jpg" class="full-width" style="max-height: 750px;" />
            <div class="q-ml-xl">
              <div class="q-pa-sm" style="max-width: 20em; color: #F3A533;">
                <span class="text-bold text-h6">Links to Available Registry's</span><br>
                <q-list>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.amazon.com/baby-reg/glorita-samuels-justin-samuels-july-2021-lahabra/29F89IY94PV7O"
                          target="https://www.amazon.com/baby-reg/glorita-samuels-justin-samuels-july-2021-lahabra/29F89IY94PV7O">
                          Amazon
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended"
                          target="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended">
                          Buy Buy Baby
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.target.com/gift-registry/giftgiver?registryId=4d88e7749711453e90e2d63e81675145&type=BABY"
                          target="https://www.target.com/gift-registry/giftgiver?registryId=4d88e7749711453e90e2d63e81675145&type=BABY">
                          Target
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7"
                          target="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7">
                          Walmart
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-item-section>
      </q-item>
    </template>
    <!-- MAIN HEADER -->
    <template v-else>
      <q-item ref="benefits" class="q-pa-none">
        <!-- HEADER IF PLATFORM IS MOBILE -->
        <template v-if="$q.platform.is.mobile">
          <q-item-section class="bg-white">
            <div class="column full-width q-mt-md">
              <div class="col q-pa-sm text-center" style="color: #F3A533;">
                <p class="text-bold text-h4">Jasmine Adriane Samuels Baby Shower</p>
                <p class="text-subtitle1">
                  Jun 26, 1:00 PM PDT <br>
                  951 S Beach Blvd, La Habra, CA 90631, USA
                </p>
                <p class="text-bold text-subtitle1">
                  *** Diaper Raffle: The person that donates the most diapers has more of a chance to win a $50 giftcard ***
                </p>
              </div>
            </div>
            <img alt="DocuDad" src="../../public/images/mainpic.jpg" class="full-width q-px-md" style="max-height: 750px;" />
            <div class="full-width text-center">
              <div class="q-pa-sm text-center" style="color: #F3A533;">
                <span class="text-bold text-h5 text-center">Links to Available Registry's</span><br>
                <q-list>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.amazon.com/baby-reg/glorita-samuels-justin-samuels-july-2021-lahabra/29F89IY94PV7O"
                          target="https://www.amazon.com/baby-reg/glorita-samuels-justin-samuels-july-2021-lahabra/29F89IY94PV7O">
                          Amazon
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended"
                          target="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended">
                          Buy Buy Baby
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.target.com/gift-registry/giftgiver?registryId=4d88e7749711453e90e2d63e81675145&type=BABY"
                          target="https://www.target.com/gift-registry/giftgiver?registryId=4d88e7749711453e90e2d63e81675145&type=BABY">
                          Target
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7"
                          target="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7">
                          Walmart
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-item-section>
        </template>
        <!-- HEADER IF PLATFORM IS DESKTOP -->
        <template v-else>
          <q-item-section class="bg-white q-px-xl">
            <div class="column full-width">
              <div class="col q-pa-sm text-center" style="color: #F3A533;">
                <span class="text-bold text-h5">Jasmine Adriane Samuels Baby Shower</span><br>
                <span>
                  Jun 26, 1:00 PM PDT <br>
                  951 S Beach Blvd, La Habra, CA 90631, USA
                </span><br>
                <span class="text-bold">
                  *** Diaper Raffle: The person that donates the most diapers has more of a chance to win a $50 giftcard ***
                </span>
              </div>
            </div>
            <img alt="Samuels Baby Shower" src="../../public/images/mainpic.jpg" class="full-width" style="max-height: 550px;" /><br>
            <div class="absolute-bottom q-ml-lg">
              <div class="q-ml-md q-pa-sm" style="max-width: 20em; color: #F3A533;">
                <span class="text-bold text-h6">Links to Available Registry's</span><br>
                <q-list>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.amazon.com/baby-reg/glorita-samuels-justin-samuels-july-2021-lahabra/29F89IY94PV7O"
                          target="https://www.amazon.com/baby-reg/glorita-samuels-justin-samuels-july-2021-lahabra/29F89IY94PV7O">
                          Amazon
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended"
                          target="https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550053155?selectedRLVFilters=_recommended">
                          Buy Buy Baby
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.target.com/gift-registry/giftgiver?registryId=4d88e7749711453e90e2d63e81675145&type=BABY"
                          target="https://www.target.com/gift-registry/giftgiver?registryId=4d88e7749711453e90e2d63e81675145&type=BABY">
                          Target
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable dense>
                    <q-item-section>
                      <q-item-label>
                        <a href="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7"
                          target="https://www.walmart.com/registry/baby/5316bd5c-010d-4304-8375-e1b9a87a0fd7">
                          Walmart
                        </a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-item-section>
        </template>
      </q-item>
    </template>
  </q-page>
</template>

<script>

import { openURL, scroll } from 'quasar'
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
    goToLink (val) {
      openURL(val)
    }
  },
  mounted () {}
}
</script>
