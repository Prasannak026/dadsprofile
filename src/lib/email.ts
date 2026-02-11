import emailjs from '@emailjs/browser'

type EmailParams = {
  name: string
  email: string
  phone?: string
  message: string
  service?: string
}

const getEmailConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
  const contactTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT as string | undefined
  const bookingTemplate =
    (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOKING as string | undefined) || contactTemplate

  if (!serviceId || !publicKey || !contactTemplate) {
    throw new Error('EmailJS configuration is missing. Check your .env file.')
  }

  return { serviceId, publicKey, contactTemplate, bookingTemplate: bookingTemplate ?? contactTemplate }
}

export const sendContactEmail = async (params: EmailParams) => {
  const { serviceId, publicKey, contactTemplate } = getEmailConfig()
  return emailjs.send(serviceId, contactTemplate, params, { publicKey })
}

export const sendBookingEmail = async (params: EmailParams) => {
  const { serviceId, publicKey, bookingTemplate } = getEmailConfig()
  return emailjs.send(serviceId, bookingTemplate, params, { publicKey })
}
