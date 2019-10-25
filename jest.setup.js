import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { setConfig } from 'next/config'
import config from './next.config'

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig(config.publicRuntimeConfig)

Enzyme.configure({ adapter: new Adapter() })
