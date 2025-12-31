import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'

describe('HomePage', () => {
  it('renders development dashboard', () => {
    render(<HomePage />)

    expect(screen.getByText('Development Dashboard')).toBeInTheDocument()
  })

  it('displays component showcase cards', () => {
    render(<HomePage />)

    expect(screen.getByText('UI Components')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Stack')).toBeInTheDocument()
    expect(screen.getByText('Quick Start')).toBeInTheDocument()
  })

  it('shows working components', () => {
    render(<HomePage />)

    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Input field')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dialog Example' })).toBeInTheDocument()
  })
})
