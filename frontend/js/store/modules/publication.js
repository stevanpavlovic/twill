import * as types from '../mutation-types'

const state = {
  withPublicationToggle: window.STORE.publication.withPublicationToggle || false,
  published: window.STORE.publication.published || false,
  withPublicationTimeframe: window.STORE.publication.withPublicationTimeframe || false,
  startDate: window.STORE.publication.startDate || null,
  endDate: window.STORE.publication.endDate || null,
  visibility: window.STORE.publication.visibility || false,
  visibilityOptions: [{
    value: 'public',
    label: 'Public'
  },
  {
    value: 'private',
    label: 'Private'
  }],
  submitOptions: {
    draft: [
      {
        name: 'save',
        text: 'Save as draft'
      },
      {
        name: 'save-close',
        text: 'Save as draft and close'
      },
      {
        name: 'save-new',
        text: 'Save as draft and create new'
      },
      {
        name: 'cancel',
        text: 'Cancel'
      }
    ],
    live: [
      {
        name: 'publish',
        text: 'Publish'
      },
      {
        name: 'publish-close',
        text: 'Publish and close'
      },
      {
        name: 'publish-new',
        text: 'Publish and create new'
      },
      {
        name: 'cancel',
        text: 'Cancel'
      }
    ],
    update: [
      {
        name: 'update',
        text: 'Update'
      },
      {
        name: 'update-close',
        text: 'Update and close'
      },
      {
        name: 'update-new',
        text: 'Update and create new'
      },
      {
        name: 'cancel',
        text: 'Cancel'
      }
    ]
  }
}

// getters
const getters = { }

const mutations = {
  [types.UPDATE_PUBLISH_START_DATE] (state, newValue) {
    state.startDate = newValue
  },
  [types.UPDATE_PUBLISH_END_DATE] (state, newValue) {
    state.endDate = newValue
  },
  [types.UPDATE_PUBLISH_STATE] (state, newValue) {
    state.published = newValue
  },
  [types.UPDATE_PUBLISH_VISIBILITY] (state, newValue) {
    state.visibility = newValue
  }
}

export default {
  state,
  getters,
  mutations
}
