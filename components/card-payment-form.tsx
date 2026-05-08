'use client'

import { useState } from 'react'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface CardPaymentFormProps {
  amount: number
  formData: any
  onBack: () => void
  onClose: () => void
}

export default function CardPaymentForm({ amount, formData, onBack, onClose }: CardPaymentFormProps) {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showError, setShowError] = useState(false)

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim()
    } else if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '')
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4)
      }
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4)
    }

    setCardData(prev => ({ ...prev, [name]: formattedValue }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError(null)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulate random card rejection (30% chance)
    if (Math.random() < 0.3) {
      setError('Card was declined. Please try another card or payment method.')
      setShowError(true)
      setIsProcessing(false)
      return
    }

    // Success
    alert(`Payment of $${amount} processed successfully!`)
    onClose()
  }

  if (showError) {
    return (
      <div className="space-y-6">
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-6">
          <div className="flex gap-4">
            <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">Payment Failed</h3>
              <p className="text-sm text-red-700 dark:text-red-400 mb-4">{error}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowError(false)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition"
                >
                  Try Another Card
                </button>
                <button
                  onClick={onBack}
                  className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition"
                >
                  Back to Payment Methods
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 border border-border rounded-lg p-6">
          <h4 className="font-semibold text-foreground mb-4">Need Help?</h4>
          <p className="text-sm text-muted-foreground mb-4">
            If you continue experiencing issues with card payments, our team can assist you.
          </p>
          <Link
            href="/support"
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition text-sm font-medium mb-4"
      >
        <ArrowLeft size={16} />
        Back to Payment Methods
      </button>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-foreground font-medium">
          Amount to pay: <span className="text-primary font-bold">${amount.toLocaleString()} USD</span>
        </p>
      </div>

      {/* Card Number */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={cardData.cardNumber}
          onChange={handleCardChange}
          placeholder="4532 1234 5678 9010"
          maxLength={19}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        />
      </div>

      {/* Card Holder */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Card Holder Name
        </label>
        <input
          type="text"
          name="cardHolder"
          value={cardData.cardHolder}
          onChange={handleCardChange}
          placeholder="John Doe"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        />
      </div>

      {/* Expiry & CVV */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={cardData.expiryDate}
            onChange={handleCardChange}
            placeholder="MM/YY"
            maxLength={5}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            value={cardData.cvv}
            onChange={handleCardChange}
            placeholder="123"
            maxLength={4}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Processing Payment...
          </div>
        ) : (
          `Pay $${amount.toLocaleString()}`
        )}
      </button>

      <div className="text-xs text-muted-foreground text-center">
        Your card information is encrypted and secure. We never store your card details.
      </div>
    </form>
  )
}
