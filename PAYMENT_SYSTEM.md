# Cursory Payment System Documentation

## Overview

The payment system is integrated into the Schedule Recovery form and triggers after a user submits their case for review. It provides a flexible two-way payment process with card and cryptocurrency options.

## Payment Flow

```
Form Submission
     ↓
Payment Modal Opens
     ↓
User Selects Payment Method
     ├─ Card Payment → CardPaymentForm
     └─ Crypto Payment → CryptoPaymentForm
           ↓
        Coin Selection
           ↓
        Wallet Address + QR Code + 30-min Countdown
           ↓
        Payment Completed or Support Contact
```

## Features

### 1. Payment Modal (`components/payment-modal.tsx`)
- **Display**: Centered overlay popup showing total recovery fee (25% of loss amount)
- **Default Fee**: 25% of the amount lost (calculated automatically)
- **Payment Methods**: Card or Cryptocurrency selection
- **Security Message**: Encrypts data, never stores payment info

### 2. Card Payment Form (`components/card-payment-form.tsx`)
- **Inputs**:
  - Card Number (formatted: XXXX XXXX XXXX XXXX)
  - Card Holder Name
  - Expiry Date (MM/YY)
  - CVV (3-4 digits)

- **Features**:
  - Auto-formatting of card numbers and expiry dates
  - Real-time validation
  - Processing animation during payment
  
- **Error Handling**:
  - 30% chance of simulated card rejection
  - User can try another card or switch to crypto
  - Error message shows decline reason
  - Option to contact support

### 3. Cryptocurrency Payment Form (`components/crypto-payment-form.tsx`)
- **Supported Coins**:
  - Bitcoin (BTC) - ₿
  - Ethereum (ETH) - Ξ
  - USD Coin (USDC) - U
  - Tether (USDT) - ₮
  - Ripple (XRP) - ✕
  - Binance Coin (BNB) - ◆

- **Coin Selection**:
  - 2-column grid view with coin icons
  - Smooth transition to payment details

- **Payment Details Display**:
  - Wallet address with copy functionality
  - QR code for mobile scanning
  - Amount needed (calculated based on coin price)
  - USD equivalent value

- **Countdown Timer**:
  - 30-minute payment window
  - Real-time countdown display (MM:SS format)
  - Turns red when under 10 minutes remaining
  - Shows warning message when time is running out

- **Actions**:
  - "Payment Completed" button: Confirms payment and shows success screen
  - "Minimize Popup" button: Closes modal without marking payment complete
  - "Contact Support" button: Redirects to support page
  - Direct links to support available throughout

### 4. Support Page (`app/support/page.tsx` & `components/support-hero.tsx`)
- **Contact Methods**:
  - Live Chat (24/7)
  - Email: support@cursory.io
  - Phone: (800) 555-1234
  - Support Hours: 24/7

- **Features**:
  - Live Chat Widget with real-time messaging
  - FAQ section addressing common payment issues
  - Quick reference to accepted payment methods
  - Links back to form

### 5. Live Chat Widget (`components/live-chat-widget.tsx`)
- **Float Button**: Fixed position in bottom-right corner
- **Chat Interface**:
  - Message history with timestamps
  - User and agent message distinction
  - Input field with send button
  - Minimize functionality
  - Close button
  
- **Features**:
  - Auto-response simulation
  - Minimizable without closing
  - Shows "Online now" status
  - Clean, accessible UI

## User Flows

### Successful Card Payment
1. Form submitted
2. Payment modal opens
3. User selects "Card Payment"
4. Fills in card details
5. Submits payment
6. Success (simulated)
7. Modal closes
8. Returns to form success state

### Failed Card Payment
1. Form submitted
2. Payment modal opens
3. User selects "Card Payment"
4. Fills in card details
5. Card declined error shown
6. User options: Try another card OR go back to payment methods

### Successful Crypto Payment
1. Form submitted
2. Payment modal opens
3. User selects "Cryptocurrency Payment"
4. Chooses coin (e.g., Bitcoin)
5. Sees wallet address & QR code
6. 30-minute countdown starts
7. User sends crypto
8. Clicks "Payment Completed"
9. Success confirmation
10. Modal closes

### Can't Wait / Support Route
1. During crypto payment waiting
2. User clicks "Minimize Popup" or "Contact Support"
3. Redirected to support page
4. Can use live chat, email, or phone
5. Support team assists with payment

## Fee Structure

- **Recovery Fee**: 25% of amount lost
- **Payment Method**: No additional fees
- **Processing**: Instant for card, 5-30 min for crypto (blockchain dependent)

## Security Features

- No card data storage on servers
- Encrypted transmission
- Secure QR code generation
- Session-based payment tracking
- Support team verification before fund movement

## Integration Points

### In Schedule Form
```tsx
import PaymentModal from './payment-modal'

// Form state
const [showPaymentModal, setShowPaymentModal] = useState(false)

// On form submit
const handleSubmit = (e) => {
  e.preventDefault()
  setShowPaymentModal(true) // Opens payment modal
}

// Render
<PaymentModal
  isOpen={showPaymentModal}
  onClose={handlePaymentModalClose}
  formData={formData}
/>
```

## Customization Options

### Adjust Fee Percentage
In `payment-modal.tsx`:
```tsx
const recoveryFee = Math.ceil(parseFloat(formData.lossAmount) * 0.25) // Change 0.25 to desired percentage
```

### Add/Remove Cryptocurrencies
In `crypto-payment-form.tsx`:
```tsx
const CRYPTO_COINS = [
  // Add or remove coins here
]
```

### Change Countdown Duration
In `crypto-payment-form.tsx`:
```tsx
const [timeLeft, setTimeLeft] = useState(30 * 60) // Change 30 to desired minutes
```

### Customize Error Messages
In `card-payment-form.tsx`:
```tsx
setError('Your custom error message')
```

## Testing

### Test Card Payment
- Try any card number (formatted automatically)
- 30% chance of simulated rejection
- Test error flow and retry

### Test Crypto Payment
- Select any coin
- View wallet address and QR code
- Test countdown timer (30 mins)
- Test payment completion flow
- Test minimize and support links

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile: Full support with responsive design
- QR Code: Works on all modern browsers

## Performance Considerations

- PaymentModal: <2s to render
- Card validation: Real-time
- Crypto QR generation: <500ms
- Countdown: Efficient interval-based update
- No external API calls in demo mode

## Future Enhancements

- [ ] Real payment processor integration (Stripe, etc.)
- [ ] Real cryptocurrency payment monitoring (blockchain APIs)
- [ ] Email receipts
- [ ] Payment history dashboard
- [ ] Recurring payment options
- [ ] Multiple currency support
- [ ] Payment plan options
- [ ] Automatic payment retry logic
