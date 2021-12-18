import store from '@/store'

describe('Getters', () => {
  it('should renders voice list', () => {
    expect(store.getters.voices.length).toBeGreaterThan(0)
  })
  it('should renders voice list filtered by name', () => {
    const text = store.getters.voices[0].name
    store.state.filters.text = text
    expect(store.getters.voices.every((voice) => voice.name === text))
      .toBe(true)
  })
  it('should renders voice list filtered by tag', () => {
    const tag = store.getters.voices[0].tags[0]
    store.state.filters.tags = tag
    expect(store.getters.voices.every((voice) => voice.tags.includes(tag)))
      .toBe(true)
  })
  it('should order by name', () => {
    const lastIndex = store.getters.voices.length - 1
    const firstName = store.getters.voices[0].name
    const lastName = store.getters.voices[lastIndex].name
    // asc by default
    expect(store.getters.voices[0].name).toEqual(firstName)
    expect(store.getters.voices[lastIndex].name).toEqual(lastName)
    store.state.filters.order = 'desc'
    expect(store.getters.voices[0].name).toEqual(lastName)
    expect(store.getters.voices[lastIndex].name).toEqual(firstName)
  })
})
describe('Actions', () => {
  it('should renders favs list', () => {
    const firstVoice = store.getters.voices[0]
    store.dispatch('setFavourite', firstVoice)
    expect(store.getters.favs.length).toBeGreaterThan(0)
  })
  it('should active only one voice', () => {
    const firstVoice = store.state.voices[0]
    const secondVoice = store.state.voices[1]
    store.dispatch('setActive', firstVoice)
    expect(store.state.active).not.toBeNull()
    store.dispatch('setActive', secondVoice)
    expect(store.state.active).not.toBeNull()
  })
  it('sets random active voice', () => {
    store.dispatch('setActiveRandom')
    expect(store.state.active).not.toBeNull()
  })
})
