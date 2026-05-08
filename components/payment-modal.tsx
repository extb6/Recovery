'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import CardPaymentForm from './card-payment-form'
import CryptoPaymentForm from './crypto-payment-form'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  formData: {
    fullName: string
    email: string
    phone: string
    lossAmount: string
    platform: string
    lossDate: string
    jurisdiction: string
    description: string
  }
}

export default function PaymentModal({ isOpen, onClose, formData }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | null>(null)
  const recoveryFee = Math.ceil(parseFloat(formData.lossAmount) * 0.25) // 25% fee
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Initiate Payment</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Recovery fee: ${recoveryFee.toLocaleString()} USD
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!paymentMethod ? (
            // Payment Method Selection
            <div className="space-y-4">
              <p className="text-foreground font-medium mb-6">
                Choose your preferred payment method:
              </p>
              
              <button
                onClick={() => setPaymentMethod('card')}
                className="w-full p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-left group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                      Card Payment
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Visa, Mastercard, American Express
                    </p>
                  </div>
                  <div className="text-2xl">💳</div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('crypto')}
                className="w-full p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-left group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                      Cryptocurrency Payment
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Bitcoin, Ethereum, USDC, and more
                    </p>
                  </div>
                  <div className="text-2xl">₿</div>
                </div>
              </button>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-sm text-muted-foreground mt-8">
                <p>
                  <strong>Important:</strong> All payments are processed securely and encrypted. Your payment information is never stored on our servers.
                </p>
              </div>
            </div>
          ) : paymentMethod === 'card' ? (
            <CardPaymentForm
              amount={recoveryFee}
              formData={formData}
              onBack={() => setPaymentMethod(null)}
              onClose={onClose}
            />
          ) : (
            <CryptoPaymentForm
              amount={recoveryFee}
              formData={formData}
              onBack={() => setPaymentMethod(null)}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  )
}
