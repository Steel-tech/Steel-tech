import { describe, it, expect } from 'vitest'
import { cn, formatDate, capitalize } from '@/lib/utils'

describe('utils', () => {
  describe('cn', () => {
    it('merges class names correctly', () => {
      expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
    })

    it('handles conditional classes', () => {
      expect(cn('base', true && 'conditional', false && 'hidden')).toBe('base conditional')
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15')
      expect(formatDate(date)).toBe('January 15, 2024')
    })
  })

  describe('capitalize', () => {
    it('capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    it('handles mixed case', () => {
      expect(capitalize('hELLO')).toBe('Hello')
    })

    it('handles empty string', () => {
      expect(capitalize('')).toBe('')
    })
  })
})
