// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
require('child_process').fork('generate-index-files.js')

import { registerRootComponent } from 'expo'

import App from './App'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
