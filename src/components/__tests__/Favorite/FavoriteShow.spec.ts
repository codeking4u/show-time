import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FavoriteShow from '@/components/Favorite/FavoriteShow.vue'
import router from '@/router'

describe('Favorite.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(FavoriteShow, {
      props: {
        favorite: {
          id: 1,
          name: 'Example Show',
          image: {
            medium: 'https://example.com/medium.jpg',
            original: 'https://example.com/original.jpg'
          }
        }
      },
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
