import type { Meta } from '@storybook/react'
import { Code } from '~/components/ui/code'

const meta: Meta = {
  title: 'Components/Code',
}

export default meta

export const Base = () => <Code>@sky-ui/panda-preset</Code>
