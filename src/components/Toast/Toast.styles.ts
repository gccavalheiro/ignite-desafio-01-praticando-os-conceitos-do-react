import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const Root = styled(Toast.Root, {
  borderRadius: 6,
  padding: 16,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 16,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants: {
    variant: {
      success: {
        backgroundColor: '#38a169',
      },
      error: {
        backgroundColor: '#e53e3e',
      },
      info: {
        backgroundColor: '#3182ce',
      },
      warning: {
        backgroundColor: '#dd6b20',
      },
    },
  },
})

const Title = styled(Toast.Title, {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  gridArea: 'title',
  fontWeight: '$bold',
  color: '$gray100',
  fontSize: '$16',
})

export default {
  Viewport,
  hide,
  slideIn,
  swipeOut,
  Root,
  Title,
}
