import { mount } from '@vue/test-utils'
import VoiceListTitle from '@/views/components/VoiceListTitle.vue'

const title = 'List title'
describe('VoiceListTitle', () => {
  it('Should render the title', () => {
    const wrapper = mount(VoiceListTitle, {
      propsData: {
        title
      }
    })
    const text = wrapper.find('[data-testid="title"]')
    expect(text.text()).toBe(title)
  })
})
