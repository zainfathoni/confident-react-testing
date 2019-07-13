export { nightOwlFull as theme } from 'code-surfer'

import { slides as demo1 } from './demo-1/demo-1.mdx'
import { slides as demo2 } from './demo-2/demo-2.mdx'
import { slides as example } from './example.mdx'
import { slides as introduction } from './introduction.mdx'

export const slides = [...introduction, ...demo1, ...demo2, ...example]
