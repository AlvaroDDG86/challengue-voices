import { mount } from '@vue/test-utils'
import Voice from '@/views/components/Voice.vue'

// stub
const voice = {
  id: 'adult-to-children',
  name: 'Adult to children',
  icon: 'VoicesVoiceIcon03.png',
  tags: [
    'human'
  ],
  fav: false,
  active: false
}

function customMount (options) {
  return mount(Voice, {
    propsData: {
      voice: {
        ...voice,
        ...options
      }
    },
    mocks: {
      $store: {
        dispatch: jest.fn()
      }
    }
  })
}

describe('Voice', () => {
  it('Should render the name', () => {
    const wrapper = customMount()
    const name = wrapper.find('[data-testid="name"]')
    expect(name.text()).toBe('Adult to children')
  })
  it('Should render the icon', () => {
    const wrapper = customMount()
    expect(wrapper.vm.voiceIcon).toBe('VoicesVoiceIcon03.png')
  })
  it('Should have active classes', () => {
    const wrapper = customMount({
      active: true
    })
    const name = wrapper.find('[data-testid="name"]')
    expect(name.classes('voice__name--active')).toBe(true)

    const icon = wrapper.find('[data-testid="icon-content"]')
    expect(icon.classes('voice__icon--active')).toBe(true)
  })
  it('Should render fav icon when is fav', () => {
    const wrapper = customMount({
      fav: true
    })
    expect(wrapper.vm.favImg).toBe('voice-favourite.svg')
  })
  it('Should render fav icon when NOT is fav', () => {
    const wrapper = customMount()
    expect(wrapper.vm.favImg).toBe('voice-favourite-off.svg')
  })
  it('Should dispatch setFavourite action with payload', async () => {
    const wrapper = customMount()
    const fav = wrapper.find('[data-testid="fav"]')
    await fav.trigger('click')
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      'setFavourite',
      { ...voice }
    )
  })
  it('Should dispatch setActive action with payload', async () => {
    const wrapper = customMount()
    const current = wrapper.find('[data-testid="voice"]')
    await current.trigger('click')
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
      'setActive',
      { ...voice }
    )
  })
})
