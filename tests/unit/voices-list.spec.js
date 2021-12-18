import { mount } from '@vue/test-utils'
import VoicesList from '@/views/components/VoicesList.vue'

const STUBS = [
  {
    id: 'adult-to-children',
    name: 'Adult to children',
    icon: 'VoicesVoiceIcon03.png',
    tags: [
      'human'
    ]
  },
  {
    id: 'alien',
    name: 'Alien',
    icon: 'VoicesVoiceIcon01.png',
    tags: [
      'robotic'
    ]
  }
]

function customMount (options) {
  return mount(VoicesList, {
    propsData: {
      voices: options && options.voices !== undefined ? options.voices : STUBS
    }
  })
}
describe('VoicesList', () => {
  it('Should render the title', () => {
    const wrapper = customMount()
    const voice = wrapper.findAllComponents({ name: 'VoiceListTitle' })
    expect(voice).toHaveLength(1)
  })
  it('Should render list of Voice components', () => {
    const wrapper = customMount()
    const voice = wrapper.findAllComponents({ name: 'Voice' })
    expect(voice).toHaveLength(2)
  })
  it('Should render render message "No voices yet" when list is empty', () => {
    const wrapper = customMount({
      voices: []
    })
    const message = wrapper.find('[data-testid="message"]')
    expect(message.text()).toBe('No voices yet')
  })
})
