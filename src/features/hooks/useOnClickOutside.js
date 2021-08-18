import { useEffect } from 'react'
import { any, noop } from '@frankycty/rm-extra'

const isChildOf = ({ parent, child }) => parent?.contains(child)

function useOnClickOutside(ref, handler = noop, elementsExcludedToHandler = []) {
  useEffect(() => {
    const listener = (e) => {
      const clicked = e?.target

      const excludedElements = [ref?.current, ...elementsExcludedToHandler]
      const isClickedInExcludedElement = any((excludedElement) =>
        isChildOf({ parent: excludedElement, child: clicked })
      )(excludedElements)

      if (!isClickedInExcludedElement) handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, elementsExcludedToHandler])

  return null
}

export { useOnClickOutside }
