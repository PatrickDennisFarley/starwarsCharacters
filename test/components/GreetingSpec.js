import Greeting from '../../src/components/Greeting'

describe('Greeting', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Greeting />
    )
  })

  it('should render an h2 tag', () => {
    expect(wrapper.find('h2')).toBePresent()
  })
})
