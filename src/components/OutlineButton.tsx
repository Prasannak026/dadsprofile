import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const OutlineButton = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClassName =
    'inline-flex items-center justify-center rounded-full border border-forest-300 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-forest-800 transition hover:border-forest-400 hover:text-forest-900 disabled:cursor-not-allowed disabled:opacity-60'

  if (href) {
    return (
      <a href={href} className={`${baseClassName} ${className}`.trim()}>
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClassName} ${className}`.trim()}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default OutlineButton
