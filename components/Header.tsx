import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-gray-800">MiniMaxAD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              ホーム
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              サービス
            </Link>
            <Link href="/works" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              実績
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              料金
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              会社概要
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              お問い合わせ
            </Link>
            <Link href="/quote" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
              見積もり
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote" className="bg-secondary-yellow text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
              見積もり依頼
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                ホーム
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                サービス
              </Link>
              <Link href="/works" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                実績
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                料金
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                会社概要
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                お問い合わせ
              </Link>
              <Link href="/quote" className="text-gray-600 hover:text-primary-orange transition-colors duration-300 font-medium">
                見積もり
              </Link>
              <Link href="/quote" className="bg-secondary-yellow text-gray-800 px-6 py-3 rounded-lg font-medium text-center mt-4">
                見積もり依頼
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
