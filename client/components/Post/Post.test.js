import Post from './Post'

test('Post component should render the title not as a link', () => {
  const component = shallow(<Post />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})


