type RazorpayPrefill = {
  name?: string
  email?: string
  contact?: string
}

type RazorpayOptions = {
  key: string
  amount: number
  currency: string
  name: string
  description?: string
  handler: (response: RazorpayResponse) => void
  prefill?: RazorpayPrefill
  notes?: Record<string, string>
  theme?: { color?: string }
}

export type RazorpayResponse = {
  razorpay_payment_id: string
  razorpay_signature?: string
  razorpay_order_id?: string
}

const RAZORPAY_SCRIPT_ID = 'razorpay-checkout-js'

export const loadRazorpayCheckout = () => {
  if (typeof window === 'undefined') return Promise.resolve(false)

  if (document.getElementById(RAZORPAY_SCRIPT_ID)) {
    return Promise.resolve(true)
  }

  return new Promise<boolean>((resolve) => {
    const script = document.createElement('script')
    script.id = RAZORPAY_SCRIPT_ID
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export const openRazorpayCheckout = async (options: RazorpayOptions) => {
  const loaded = await loadRazorpayCheckout()
  if (!loaded || !window.Razorpay) {
    throw new Error('Unable to load Razorpay Checkout. Please try again.')
  }

  const razorpayInstance = new window.Razorpay(options)
  razorpayInstance.open()
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => { open: () => void }
  }
}
