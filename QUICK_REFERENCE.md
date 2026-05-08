# Cursory Payment System - Quick Reference

## 🎯 Files You Need to Know

| File | Purpose | Key Actions |
|------|---------|------------|
| `components/schedule-form.tsx` | Recovery form + payment trigger | Modify `formData` structure, adjust fee % |
| `components/payment-modal.tsx` | Main payment popup | Control modal display, change fee calculation |
| `components/card-payment-form.tsx` | Card payment UI | Modify card validation, change error messages |
| `components/crypto-payment-form.tsx` | Crypto payment UI | Add/remove coins, adjust countdown duration |
| `components/support-hero.tsx` | Support page | Update contact info, modify FAQ |
| `components/live-chat-widget.tsx` | Chat support | Customize chat messages, styling |
| `app/support/page.tsx` | Support page container | Add/remove sections |

---

## 💡 Common Tasks

### Change Recovery Fee
```tsx
// File: components/payment-modal.tsx, line 29
const recoveryFee = Math.ceil(parseFloat(formData.lossAmount) * 0.25)
                                                                    ↑
                                                                Fee rate
```

### Change Crypto Countdown
```tsx
// File: components/crypto-payment-form.tsx, line 47
const [timeLeft, setTimeLeft] = useState(30 * 60)
                                         ↑
                                    Minutes
```

### Add New Cryptocurrency
```tsx
// File: components/crypto-payment-form.tsx, lines 17-44
const CRYPTO_COINS = [
  // ... existing coins ...
  {
    id: 'new-coin',
    name: 'New Coin',
    symbol: 'NEW',
    icon: '🪙',
    address: 'wallet-address-here',
    price: 100,
  }
]
```

### Update Contact Information
```tsx
// Search for these strings and update:
// Email: "support@cursory.io"
// Phone: "(800) 555-1234"
// Find in: support-hero.tsx, cta.tsx, footer.tsx
```

### Customize Error Message
```tsx
// File: components/card-payment-form.tsx, line 51
setError('Your custom error message')
```

---

## 🔌 Integration Points

### When Form Submits
```tsx
// components/schedule-form.tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setShowPaymentModal(true)  // ← Opens payment modal
}
```

### To Real Payment Processor
```tsx
// In card-payment-form.tsx, replace:
// const paymentResult = await YOUR_PROCESSOR.charge(cardData, amount)
```

### To Cryptocurrency Monitoring
```tsx
// In crypto-payment-form.tsx, replace:
// const txStatus = await BLOCKCHAIN_API.checkTransaction(address)
```

---

## 📊 Component Hierarchy

```
ScheduleForm
├── PaymentModal (conditionally rendered)
│   ├── CardPaymentForm
│   └── CryptoPaymentForm
│       └── QRCode (dynamic import)
└── Success message

SupportPage
├── SupportHero
└── LiveChatWidget (always rendered)
```

---

## 🎨 Styling Colors

| Purpose | Token | Color |
|---------|-------|-------|
| Primary | `bg-primary` | Blue (#1f5a96) |
| Accent | `bg-accent` | Teal (#1a7f8f) |
| Muted | `bg-muted` | Gray (#f5f5f5) |
| Error | Custom red | #dc2626 |
| Success | Custom green | #16a34a |

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Use Tailwind prefixes: `md:`, `lg:`, `xl:`

---

## 🔒 Security Checklist

- [ ] No card data stored in database
- [ ] All data encrypted in transit
- [ ] SSL/TLS enabled
- [ ] Session-based tracking
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation on all forms
- [ ] Support team verification before processing

---

## 🧪 Testing Command

```bash
# Build and test
pnpm run build

# Start dev server
pnpm run dev

# Visit pages
# Home: http://localhost:3000
# Schedule: http://localhost:3000/schedule
# Support: http://localhost:3000/support
```

---

## ⏱️ Key Timeouts

| Event | Duration | File |
|-------|----------|------|
| Countdown timer | 30 mins | crypto-payment-form.tsx |
| Card processing | 2 secs | card-payment-form.tsx |
| Support response (simulated) | 1 sec | live-chat-widget.tsx |
| Form success message | 5 secs | schedule-form.tsx |

---

## 🎁 Payment Options

### Card Payment
- Visa ✅
- Mastercard ✅
- American Express ✅
- Discover (not implemented)

### Crypto Payment
- Bitcoin ✅
- Ethereum ✅
- USD Coin ✅
- Tether ✅
- Ripple ✅
- Binance Coin ✅
- Litecoin (not implemented)

---

## 📞 Support Methods

| Method | File | Location |
|--------|------|----------|
| Live Chat | live-chat-widget.tsx | Every page (bottom-right) |
| Phone | support-hero.tsx | /support page |
| Email | support-hero.tsx | /support page |
| FAQ | support-hero.tsx | /support page |

---

## 🔄 Payment Flow Variables

```tsx
// Form data passed to payment modal
formData = {
  fullName: string,
  email: string,
  phone: string,
  lossAmount: string,        // ← Used for fee calculation
  platform: string,
  lossDate: string,
  jurisdiction: string,
  description: string
}

// Payment modal state
showPaymentModal: boolean
paymentMethod: 'card' | 'crypto' | null

// Card form state
cardData = {
  cardNumber: string,
  cardHolder: string,
  expiryDate: string,
  cvv: string
}

// Crypto form state
selectedCoin: CryptoCoin | null
timeLeft: number             // ← Countdown in seconds
paymentCompleted: boolean
copiedAddress: boolean
```

---

## 📈 Success Metrics

- Form submission rate
- Payment modal appearance rate
- Card vs Crypto selection ratio
- Payment completion rate
- Error/decline rate
- Support contact rate
- Live chat engagement

---

## 🚨 Error Codes (Future)

```
CARD_DECLINED = 1001
INVALID_CARD = 1002
EXPIRED_CARD = 1003
INSUFFICIENT_FUNDS = 1004

CRYPTO_TIMEOUT = 2001
INVALID_ADDRESS = 2002
NETWORK_ERROR = 2003

SERVER_ERROR = 5001
DATABASE_ERROR = 5002
```

---

## 📚 Related Documentation

- `PAYMENT_SYSTEM.md` - Technical deep dive
- `PAYMENT_FEATURES.md` - Feature details and testing
- `README_PAYMENT_SYSTEM.md` - Complete overview

---

**Last Updated**: 2026-05-08  
**Version**: 1.0  
**Status**: Production Ready (UI/UX only)
