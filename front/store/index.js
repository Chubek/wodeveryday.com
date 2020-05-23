import Vue from "vue"

// =================================================
// State
// =================================================
export const state = () => {
  const s = {
    current_gym: undefined,
    current_affiliate: {},
    continents: {},
    current_continent: undefined,
    countries: {},
    current_country: undefined,
    states: {},
    current_state: undefined,
    cities: {},
    current_city: undefined,
    globalBreadcrumbNames: [],
  }

  return s
}

// =================================================
// Mutations
// =================================================
export const mutations = {
  SET_GLOBAL_BREADCRUMB_NAMES: (state, globalBreadcrumbNames) => {
    if (globalBreadcrumbNames) {
      Vue.set(state, "globalBreadcrumbNames", globalBreadcrumbNames)
    }
  },
  SET_CURRENT_AFFILIATE: (state, affiliate) => {
    if (affiliate) {
      Vue.set(state, "current_affiliate", affiliate)
    }
  },
  SET_CONTINENTS: (state, continents) => {
    if (continents) {
      Vue.set(state, "continents", continents)
    }
  },
  SET_CURRENT_CONTINENT: (state, current_continent) => {
    if (current_continent) {
      Vue.set(state, "current_continent", current_continent)
    }
  },
  SET_COUNTRIES: (state, countries) => {
    if (countries) {
      Vue.set(state, "countries", countries)
    }
  },
  SET_CURRENT_COUNTRY: (state, current_country) => {
    if (current_country) {
      Vue.set(state, "current_country", current_country)
    }
  },
  SET_STATES: (state, states) => {
    if (states) {
      Vue.set(state, "states", states)
    }
  },
  SET_CURRENT_STATE: (state, current_state) => {
    if (current_state) {
      Vue.set(state, "current_state", current_state)
    }
  },
  SET_CITIES: (state, cities) => {
    if (cities) {
      Vue.set(state, "cities", cities)
    }
  },
  SET_CURRENT_CITY: (state, current_city) => {
    if (current_city) {
      Vue.set(state, "current_city", current_city)
    }
  },
  SET_CURRENT_GYM: (state, current_gym) => {
    if (current_gym) {
      Vue.set(state, "current_gym", current_gym)
    }
  },
}
