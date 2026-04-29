export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">EduRise</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}