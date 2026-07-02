/** @type { import('@storybook/react').Preview } */

import { CUSTOM_VIEWPORTS } from './customViewports'
import { RecoilRoot } from 'recoil'
import { withRouter } from 'storybook-addon-react-router-v6'
import '@/styles/reset.css'
import '@/styles/globals.css'
import '@/styles/quill.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...CUSTOM_VIEWPORTS,
      },
    },
  },
  decorators: [
    withRouter,
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
}

export default preview
