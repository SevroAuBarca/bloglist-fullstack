import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from '../components/Blog'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Yo jsjs',
    url: 'www.xd.com',
    likes: 0
  }
  const mockHandler = jest.fn()

  const component = render(<Blog blog={blog} />)
  const li = component.container.querySelector('h3')


  console.log(prettyDOM(li))
  component.debug()

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )

  const element = component.getByText(
    'Component testing is done with react-testing-library'
  )
  expect(element).toBeDefined()

  // method 3
  const div = component.container.querySelector('.blog')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})
