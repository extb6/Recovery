'use client'

import { useState } from 'react'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import QRCode from 'qrcode.react'
import dynamic from 'next/dynamic'

// Dynamically import QRCode to avoid SSR issues
const QRCodeComponent = dynamic(() => import('qrcode.react').then(mod => ({ default: mod.default })), {
  ssr: false,
})

interface CryptoPaymentFormProps {
  amount: number
  formData: any
  onBack: () => void
  onClose: () => void
}

const CRYPTO_COINS = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    address: '1A1z7agoat2WFvZrrG387W412n4Z1XQJC',
    price: 45000,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    address: '0x742d35Cc6634C0532925a3b844Bc4e7595f46bE3',
    price: 2500,
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    icon: 'U',
    address: '0x742d35Cc6634C0532925a3b844Bc4e7595f46bE3',
    price: 1,
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    icon: '₮',
    address: '0x742d35Cc6634C0532925a3b844Bc4e7595f46bE3',
    price: 1,
  },
  {
    id: 'xrp',
    name: 'Ripple',
    symbol: 'XRP',
    icon: '✕',
    address: 'rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH',
    price: 0.52,
  },
  {
    id: 'bnb',
    name: 'Binance Coin',
    symbol: 'BNB',
    icon: '◆',
    address: '0x742d35Cc6634C0532925a3b844Bc4e7595f46bE3',
    price: 600,
  },
]

export default function CryptoPaymentForm({ amount, formData, onBack, onClose }: CryptoPaymentFormProps) {
  const [selectedCoin, setSelectedCoin] = useState<typeof CRYPTO_COINS[0] | null>(null)
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)

  // Calculate amount needed based on selected coin
  const amountNeeded = selectedCoin ? (amount / selectedCoin.price).toFixed(8) : '0'

  // Countdown timer effect
  React.useEffect(() => {
    if (!selectedCoin || paymentCompleted) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [selectedCoin, paymentCompleted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const copyToClipboard = async () => {
    if (selectedCoin) {
      await navigator.clipboard.writeText(selectedCoin.address)
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2000)
    }
  }

  if (!selectedCoin) {
    return (
      <div className="space-y-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition text-sm font-medium mb-4"
        >
          <ArrowLeft size={16} />
          Back to Payment Methods
        </button>

        <p className="text-sm text-foreground font-medium">
          Select a cryptocurrency to pay with:
        </p>

        <div className="grid grid-cols-2 gap-3">
          {CRYPTO_COINS.map(coin => (
            <button
              key={coin.id}
              onClick={() => {
                setSelectedCoin(coin)
                setTimeLeft(30 * 60)
                setPaymentCompleted(false)
              }}
              className="p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition text-left group"
            >
              <div className="text-3xl mb-2">{coin.icon}</div>
              <p className="font-semibold text-foreground group-hover:text-primary transition">
                {coin.symbol}
              </p>
              <p className="text-xs text-muted-foreground">{coin.name}</p>
            </button>
          ))}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-sm text-muted-foreground">
          <p>
            <strong>Note:</strong> Please send the exact amount specified. Network fees may apply. Payments typically confirm within 5-30 minutes depending on network congestion.
          </p>
        </div>
      </div>
    )
  }

  if (paymentCompleted) {
    return (
      <div className="space-y-6 text-center">
        <div className="text-6xl mb-4">✓</div>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Payment Detected!</h3>
          <p className="text-muted-foreground">
            Thank you for your payment of {amountNeeded} {selectedCoin.symbol}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
          <p className="text-sm text-green-800 dark:text-green-300">
            Your case has been submitted for review. You will receive a confirmation email shortly.
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Close & Return Home
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => setSelectedCoin(null)}
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition text-sm font-medium"
      >
        <ArrowLeft size={16} />
        Back to Coin Selection
      </button>

      {/* Selected Coin Info */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-muted-foreground mb-1">Selected Cryptocurrency</p>
        <p className="text-lg font-bold text-foreground">
          {selectedCoin.name} ({selectedCoin.symbol})
        </p>
      </div>

      {/* Amount to Send */}
      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
        <p className="text-sm text-muted-foreground mb-2">Amount to Send</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-accent">{amountNeeded}</span>
          <span className="text-lg font-semibold text-foreground">{selectedCoin.symbol}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          ≈ ${amount.toLocaleString()} USD
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <p className="text-xs text-muted-foreground mb-2">Time Remaining</p>
        <div className={`text-3xl font-bold font-mono ${timeLeft < 600 ? 'text-red-600 dark:text-red-400' : 'text-foreground'}`}>
          {formatTime(timeLeft)}
        </div>
        {timeLeft < 600 && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-2">
            Payment window expires soon. Please complete the transfer.
          </p>
        )}
      </div>

      {/* Wallet Address */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Send to Wallet Address</p>
        <div className="bg-background border border-border rounded-lg p-4">
          <code className="text-xs text-muted-foreground break-all">
            {selectedCoin.address}
          </code>
          <button
            onClick={copyToClipboard}
            className="mt-3 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition font-medium"
          >
            {copiedAddress ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy Address
              </>
            )}
          </button>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex justify-center bg-white dark:bg-slate-900 rounded-lg p-4 border border-border">
        <QRCodeComponent
          value={selectedCoin.address}
          size={200}
          level="H"
          includeMargin={true}
          fgColor="#000"
          bgColor="#FFF"
        />
      </div>

      {/* Payment Completed Button */}
      <button
        onClick={() => setPaymentCompleted(true)}
        className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
      >
        Payment Completed
      </button>

      {/* Minimize / Contact Support */}
      <div className="flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 px-4 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition"
        >
          Minimize Popup
        </button>
        <a
          href="/support"
          className="flex-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition text-center"
        >
          Contact Support
        </a>
      </div>

      <div className="text-xs text-muted-foreground text-center bg-muted/30 rounded-lg p-3">
        <p>
          Once we confirm your payment on the blockchain, your case will be submitted for review immediately.
        </p>
      </div>
    </div>
  )
}
