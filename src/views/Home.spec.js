import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Home from './Home.vue'

describe('Home.vue', () => {
  it('renders the headline', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('Setheck.github.io')
  })
})
