import App from '../../src/containers/App';

describe('src/containers/App', () => {
  let wrapper = mount(
    <App />
  );

  it('should render an h2', () => {
    expect(wrapper.find('h2')).toBePresent()
    expect(wrapper.text()).toMatch('Hello');
  });
})
