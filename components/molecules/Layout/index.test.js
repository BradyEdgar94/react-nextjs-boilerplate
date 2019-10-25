import React from 'react'
import { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Layout from './index'
import Template from '../../../templates'
import fakePageData from './fakePageData.json'
import { findByTestAtrr, enzymeSetup } from '../../../lib/helpers/TDDHelpers'

test('renders without error', () => {
  const wrapper = enzymeSetup(Layout, fakePageData)

  expect(wrapper.length).toBe(1)
})

describe('Check to verify the correct page template components are rendering based on page data', () => {
  let dummyData = fakePageData

  test('renders default page template', () => {
    // add page template prop to the Layout component
    const wrapper = enzymeSetup(Layout, dummyData)
    /*
      Find the Template component in our Shallow Wrapper and then use .dive() in order to
      shallow render the child of the current wrapper, and return a wrapper around the result.
      We will do this twice to for from layout > parent template > page template, or
      Layout > Template > DynamicTemplate
    */
    const template = wrapper.find(Template).dive().dive()

    /*
      Let's make sure the data-test="dynamic" attribute/value is present as it only
      exist in the page html for the dynamic page template, since we are passing a
      prop of template: 'dynamic.php' to our layout component, it should render then
      dyanmic page layout, of we pass any other template prop values, this test should fail
    */
    expect(template.exists('[data-test="default"]')).toBeTruthy()
  })

  test('renders dynamic page template', () => {
    // Change the template type of our dummy page data
    dummyData.page.template = 'dynamic.php'

    const wrapper = enzymeSetup(Layout, dummyData)
    const template = wrapper.find(Template).dive().dive()

    expect(template.exists('[data-test="dynamic"]')).toBeTruthy()
  })

  test('renders blog landing page template', () => {
    dummyData.page.template = 'blog-landing-page.php'

    const wrapper = enzymeSetup(Layout, dummyData)
    const template = wrapper.find(Template).dive().dive()

    expect(template.exists('[data-test="blog-landng-page-template"]')).toBeTruthy()
  })

  test('renders page not found page template', () => {
    // Simulate broken page data
    dummyData.page = {}

    const wrapper = enzymeSetup(Layout, dummyData)
    const template = wrapper.find(Template).dive().dive()

    expect(template.exists('[data-test="page-not-found"]')).toBeTruthy()
  })
})
