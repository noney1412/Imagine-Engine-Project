import Components from './'

test('Write Something Here', () => {
  const component = shallow(<Components />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})


