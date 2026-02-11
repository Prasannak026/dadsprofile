import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const PrimaryButton = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClassName =
    'inline-flex items-center justify-center rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-sand-50 transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60'

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

export default PrimaryButton
