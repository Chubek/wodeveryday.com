<template>
  <v-content>
    <navbar />
    <breadcrumb />
    <v-row align="center" justify="center" style="flex-direction: column;">
      <h1 class="ma-4">
        Find a Gym Anywhere
      </h1>
      <geography-search-bar :item-list="itemList" />
      <h1 v-if="itemTitle" class="mt-4 text-capitalize">
        {{ $route.params[itemTitle] }}
      </h1>
    </v-row>
    <v-row v-if="listOfItemLists" justify="center" class="flex-nowrap">
      <v-col
        v-for="(subList, index) in listOfItemLists"
        :key="index"
        :style="`width: ${columnWidth}%;`"
      >
        <v-list v-for="(subItems, item) in subList" :key="item" class="ma-4">
          <v-list-item-group color="primary">
            <v-list-item @click="selectItem(item)">
              <v-list-item-content>
                <v-list-item-title
                  class="headline font-weight-bold"
                  v-text="item"
                />
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="(subItem, i) in subItems"
              :key="i"
              @click="selectSubitemPrefetch(item, subItem)"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-if="typeof subItem === 'string'"
                  v-text="subItem"
                />
                <v-list-item-title
                  v-if="subItem && typeof subItem !== 'string'"
                  v-text="subItem[0]"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Navbar from "~/components/global/Navbar.vue"
import Breadcrumb from "~/components/global/Breadcrumb.vue"
import _ from "lodash"
import GeographySearchBar from "~/components/navigation/GeographySearchBar.vue"

export default {
  name: "GeographySearchPage",
  components: {
    Navbar,
    Breadcrumb,
    GeographySearchBar,
  },
  props: {
    itemTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    itemList: {
      type: Object,
      required: false,
      default: Object,
    },
    selectItem: {
      type: Function,
      default: () => {},
    },
    selectSubitem: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      selectedItem: undefined,
      windowInnerWidth: 0,
      listOfItemLists: [],
      columnWidth: 0,
      breadcrumbNames: undefined,
    }
  },
  watch: {
    itemList: function () {
      this.listOfItemLists = this.divideObjectIntoListOfObjects(this.itemList)
    },
  },
  mounted() {
    this.handleResize()
  },
  created() {
    if (process.client) window.addEventListener("resize", this.handleResize)
    this.handleResize()
  },
  destroyed() {
    if (process.client) window.removeEventListener("resize", this.handleResize)
  },
  methods: {
    findParent(registryObject, name) {
      registryObject = Object.entries(registryObject)
      const parentName = registryObject.find(
        (parent) => parent[1].indexOf(name) !== -1
      )
      return parentName[0]
    },
    selectSubitemPrefetch(item = null, subItem) {
      if (typeof subItem !== "string") subItem = subItem[1]
      if (!item) {
        item = this.findParent(this.itemList, subItem)
      }
      this.selectSubitem(item, subItem)
    },
    handleResize() {
      if (process.client) this.windowInnerWidth = window.innerWidth
      this.listOfItemLists = this.divideObjectIntoListOfObjects(this.itemList)
      this.columnWidth = Math.floor(100 / (this.windowInnerWidth / 250))
    },
    divideObjectIntoListOfObjects(obj) {
      let divideInto = Math.floor(this.windowInnerWidth / 250)
      let objectKeys = Object.keys(obj)
      const objectSize = objectKeys.length

      let listOfObjectsSize = Math.floor(objectSize / divideInto)
      while (listOfObjectsSize === 0) {
        divideInto -= 1
        listOfObjectsSize = Math.floor(objectSize / divideInto)
      }

      let listOfObjects = []
      let subset
      for (let i = 0; i < divideInto; i++) {
        if (i + 1 === divideInto) {
          subset = _.pick(obj, objectKeys)
          listOfObjects.unshift(subset)
        } else {
          subset = _.pick(obj, objectKeys.slice(0, listOfObjectsSize))
          listOfObjects.unshift(subset)
          objectKeys = objectKeys.slice(listOfObjectsSize)
        }
      }
      return listOfObjects
    },
  },
}
</script>
