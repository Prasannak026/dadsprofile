import Container from '../components/Container'

const Footer = () => {
  return (
    <footer className="border-t border-sand-200 py-10">
      <Container className="flex flex-col gap-4 text-sm text-forest-700 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-forest-900">Pratap Darigi</p>
          <p>Email: pratap1964@yahoo.co.in</p>
        </div>
        <div className="space-y-1 md:text-right">
          <a
            href="https://linkedin.com/in/pratap-darigi"
            className="text-forest-700 transition hover:text-forest-900"
          >
            LinkedIn: Pratap Darigi
          </a>
          <p className="text-xs text-forest-600">
            Consultation charges are payable before booking. Rates may change based on scope.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
