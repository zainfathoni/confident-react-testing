export { nightOwlFull as theme } from 'code-surfer'

import { slides as comparison } from './comparison/comparison.mdx'
import { slides as demo1 } from './demo-1/demo-1.mdx'
import { slides as demo2 } from './demo-2/demo-2.mdx'
import { slides as demo3 } from './demo-3/demo-3.mdx'
import { slides as introduction } from './introduction.mdx'
import { slides as solution } from './solution/solution.mdx'
import { slides as problemStatements } from './problem-statements.mdx'

export const slides = [
  ...introduction,
  ...problemStatements,
  ...demo1,
  ...demo2,
  ...demo3,
  ...solution,
  ...comparison,
]
