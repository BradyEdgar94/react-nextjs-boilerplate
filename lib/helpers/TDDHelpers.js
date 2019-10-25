import React from 'react'
import { shallow } from 'enzyme'

/*
  * Factory function to create a ShallowWrapper for the Layout component
  * @function enzymeSetup
  * @param {component} Component - Component props specific to this setup
  * @param {object} props - Component props specific to this setup
  * @param {any} state - Inital stste for set up
  * @returns {ShallowWrapper}
*/
const enzymeSetup = (Component, props = {}, state = null) => shallow(<Component {...props} />)

/*
  * Return ShallowWrapper containing node(s) with given data-test value
  * @function findByTestAtrr
  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
  * @param {string} val - value of data test attribute
  * @returns {ShallowWrapper}
*/
const findByTestAtrr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)


/**************** EXPORTS ******************/

export { findByTestAtrr, enzymeSetup }
