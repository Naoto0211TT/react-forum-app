---
name: 'component'
root: './src/components'
output: './'
ignore: ['**/*']
questions:
  atomic:
    message: '作成するAtomic Designのコンポーネントを選択してください。'
    choices:
      - 'atoms'
      - 'molecules'
      - 'organisms'
      - 'templates'
      - 'pages'
  name: 'コンポーネント名を入力してください。'
---

<!--> atoms <-->

# `{{ inputs.atomic == 'atoms' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.jsx`

```jsx
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const {{ inputs.name | pascal }} = memo(({ className, ...props }) => {
  return (
    <div className={clsx(styles.{{ inputs.name | lower }}, className)} {...props}>
      {{ inputs.name | pascal }}
    </div>
  )
})

{{ inputs.name | pascal }}.displayName = '{{ inputs.name | pascal }}'
{{ inputs.name | pascal }}.propTypes = {
  className: PropTypes.string,
}
{{ inputs.name | pascal }}.defaultProps = {
  className: '',
}

```

# `{{ inputs.atomic == 'atoms' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.stories.jsx`

```jsx
import { {{ inputs.name | pascal }} } from '.'

export default {
  title: '{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  tags: ['autodocs'],
  argTypes: {},
}

export const Sample = {
  args: {}
}
```

# `{{ inputs.atomic == 'atoms' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.module.css`

```css
.{{ inputs.name | lower }} {}

```

<!--> molecules <-->

# `{{ inputs.atomic == 'molecules' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.jsx`

```jsx
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const {{ inputs.name | pascal }} = memo(({ className }) => {
  return (
    <div className={clsx(styles['{{ inputs.name | kebab }}'], className)}>
      {{ inputs.name | pascal }}
    </div>
  )
})

{{ inputs.name | pascal }}.displayName = '{{ inputs.name | pascal }}'
{{ inputs.name | pascal }}.propTypes = {
  className: PropTypes.string,
}
{{ inputs.name | pascal }}.defaultProps = {
  className: '',
}

```

# `{{ inputs.atomic == 'molecules' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.stories.jsx`

```jsx
import { {{ inputs.name | pascal }} } from '.'

export default {
  title: '{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  tags: ['autodocs'],
  argTypes: {},
}

export const Sample = {
  args: {}
}
```

# `{{ inputs.atomic == 'molecules' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.module.css`

```css
.{{ inputs.name | kebab }} {}

```

<!--> organisms <-->

# `{{ inputs.atomic == 'organisms' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.jsx`

```jsx
import { memo } from 'react'

import styles from './index.module.css'

export const {{ inputs.name | pascal }} = memo(() => {
  return (
    <div className={styles['{{ inputs.name | kebab }}']}>
      {{ inputs.name | pascal }}
    </div>
  )
})

{{ inputs.name | pascal }}.displayName = '{{ inputs.name | pascal }}'
```

# `{{ inputs.atomic == 'organisms' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.stories.jsx`

```jsx
import { {{ inputs.name | pascal }} } from '.'

export default {
  title: '{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  tags: ['autodocs'],
  argTypes: {},
}

export const Sample = {
  args: {}
}
```

# `{{ inputs.atomic == 'organisms' || "!" }}{{ inputs.atomic | lower }}/{{ inputs.name | pascal }}/index.module.css`

```css
.{{ inputs.name | kebab }} {}

```
