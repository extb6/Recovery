# Cursory Payment System - Flow Diagrams

## Complete Payment System Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     CURSORY RECOVERY FORM                       │
│                          /schedule                              │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                   ┌─────────────────┐
                   │  User Fills     │
                   │  Recovery Form  │
                   │  (all fields)   │
                   └────────┬────────┘
                            │
                            ▼
              ┌──────────────────────────┐
              │  Click "Submit Case for  │
              │      Review" Button      │
              └────────────┬─────────────┘
                           │
                           ▼
                   ┌──────────────────┐
                   │ Form Validates   │
                   │ (required fields)│
                   └────────┬─────────┘
                            │
                            ▼
       ┌────────────────────────────────────────────┐
       │     PAYMENT MODAL OPENS                    │
       │                                            │
       │  "Recovery Fee: $XXX USD"                  │
       │                                            │
       │  ┌─────────────────────────────────────┐   │
       │  │  💳 CARD PAYMENT  │  ₿ CRYPTO      │   │
       │  └─────────────────────────────────────┘   │
       └────────┬─────────────────────┬─────────────┘
                │                     │
        ┌───────▼────────┐    ┌───────▼──────────┐
        │ CARD PATH      │    │ CRYPTO PATH      │
        └───────┬────────┘    └───────┬──────────┘
                │                     │
                ▼                     ▼
    ┌─────────────────────┐  ┌─────────────────────┐
    │ CARD PAYMENT FORM   │  │ COIN SELECTION      │
    │                     │  │                     │
    │ • Card Number       │  │ ┌─────────────────┐ │
    │ • Cardholder        │  │ │ Bitcoin   (BTC)  │ │
    │ • Expiry (MM/YY)    │  │ │ Ethereum  (ETH)  │ │
    │ • CVV               │  │ │ USDC       (U)   │ │
    │                     │  │ │ Tether    (₮)    │ │
    │ Click: "Pay $XXX"   │  │ │ Ripple     (✕)   │ │
    └──────────┬──────────┘  │ │ BNB        (◆)   │ │
               │             │ └─────────────────┘ │
               │             └──────────┬──────────┘
               │                        │
               ▼                        ▼
    ┌──────────────────┐    ┌──────────────────────┐
    │ PROCESSING      │    │ CRYPTO PAYMENT       │
    │ ANIMATION       │    │ DETAILS              │
    │ (2 seconds)     │    │                      │
    └────────┬────────┘    │ • Wallet Address    │
             │             │ • QR Code (200x200) │
        ┌────┴────────┐    │ • Amount to Send    │
        │             │    │ • Countdown 30:00   │
    ┌───▼──┐  ┌──────▼──┐ │                     │
    │ 70%  │  │  30%   │ │ Click: Copy/Scan    │
    │      │  │        │ │                      │
    ▼      ▼  ▼        ▼ └──────┬───────────────┘
    SUCCESS ERROR  DECLINE  ERROR │
      ✅      ⚠️      ❌       ❌  ▼
      │       │       │       │   USER SENDS CRYPTO
      │       │       │       │   FROM WALLET
      │       │   ┌───┴──┐    │   │
      │       │   │      │    │   ▼
      │       │   ▼      ▼    │  COUNTDOWN TICKS
      │      ERROR     TRY    │  (30:00 → 0:00)
      │      MSG       AGAIN  │  │
      │       │        │      │  ├─ Every second
      │       │        ▼      │  │  decrements
      │       │    CARD FORM  │  │
      │       │   (retry or   │  └─ Color change
      │       │   switch to   │     at <10 mins
      │       │   crypto)     │
      │       │        │      │
      │       └────┬───┘      │
      │            │         │
      │            ▼         │
      │         ┌──────────┐ │
      │         │BACK TO   │ │
      │         │PAYMENT   │ │
      │         │METHODS   │ │
      │         └──────────┘ │
      │                      │
      └──────────┬───────────┘
                 │
                 ▼
    ┌────────────────────────┐
    │ PAYMENT CONFIRMED      │
    │                        │
    │ Options:               │
    │ • Payment Completed ✅  │
    │ • Minimize Popup ⏱️     │
    │ • Contact Support 🆘   │
    └────────────┬───────────┘
                 │
            ┌────┴─────────────────┐
            │                      │
        ┌───▼────┐          ┌─────▼──────┐
        │SUCCESS │          │  MINIMIZE   │
        │        │          │  or SUPPORT │
        ▼        ▼          ▼             │
    ┌─────────────────┐  ┌──────────────┐│
    │ CONFIRMATION    │  │ SUPPORT PAGE ││
    │ SCREEN          │  │ /support      ││
    │                 │  │               ││
    │ ✓ Payment       │  │ Live Chat 24/7││
    │   Detected!     │  │ Email         ││
    │                 │  │ Phone         ││
    │ ✓ Case          │  │ FAQ           ││
    │   Submitted     │  │               ││
    │                 │  └───────────────┘│
    │ [Return Home]   │                   │
    └─────────────────┘                   │
                                          │
                    ┌─────────────────────┘
                    │
                    ▼
         ┌───────────────────┐
         │ LIVE CHAT OPEN    │
         │ (bottom-right)    │
         │                   │
         │ Online now        │
         │                   │
         │ Chat with support │
         │ team             │
         │                   │
         │ [Send Message]    │
         │ [Minimize]        │
         │ [Close]           │
         └───────────────────┘
```

---

## Card Payment Detailed Flow

```
CARD PAYMENT INITIATION
├─ User clicks "Card Payment" option
└─ CardPaymentForm renders

FORM FIELDS
├─ Card Number
│  └─ Auto-formats: 4532 1234 5678 9010
│
├─ Cardholder Name
│  └─ Accepts any text
│
├─ Expiry Date
│  └─ Auto-formats: 12/25 (from 1225)
│
└─ CVV
   └─ 3-4 digits only

FORM VALIDATION (Real-time)
├─ Required field check
├─ Format validation
├─ Length validation
└─ Display errors immediately

USER SUBMITS
│
├─ Card: 4532123456789010
├─ Name: John Doe
├─ Expiry: 12/25
└─ CVV: 123

PAYMENT PROCESSING
│
├─ Show spinner animation (2 seconds)
│
├─ Simulate API call
│
└─ Generate random result
   ├─ 70% SUCCESS ✅
   │  └─ Close modal & show success
   │
   └─ 30% FAILURE ❌
      ├─ Show error message
      │  "Card was declined. Try another card or payment method."
      │
      ├─ Show error screen with options:
      │  ├─ "Try Another Card" button
      │  │  └─ Clears form, shows card form again
      │  │
      │  ├─ "Back to Payment Methods" button
      │  │  └─ Returns to method selection
      │  │
      │  └─ "Contact Support" link
      │     └─ Redirects to /support page
      │
      └─ Support contact box shows:
         ├─ Email: support@cursory.io
         ├─ Phone: (800) 555-1234
         └─ Hours: 24/7
```

---

## Cryptocurrency Payment Detailed Flow

```
CRYPTO PAYMENT INITIATION
├─ User clicks "Cryptocurrency Payment" option
└─ Displays coin selection grid (2 columns, 6 coins)

COIN SELECTION
├─ Bitcoin (BTC) ₿
│  ├─ Address: 1A1z7agoat2WFvZrrG387W412n4Z1XQJC
│  ├─ Price: $45,000
│  └─ Amount needed: X.XXXXXXXX BTC
│
├─ Ethereum (ETH) Ξ
│  ├─ Address: 0x742d35Cc...
│  ├─ Price: $2,500
│  └─ Amount needed: X.XXXXXXXX ETH
│
├─ USD Coin (USDC) U
│  ├─ Address: 0x742d35Cc...
│  ├─ Price: $1
│  └─ Amount needed: XXXX.XX USDC
│
├─ Tether (USDT) ₮
│  ├─ Address: 0x742d35Cc...
│  ├─ Price: $1
│  └─ Amount needed: XXXX.XX USDT
│
├─ Ripple (XRP) ✕
│  ├─ Address: rN7n7otQDd6...
│  ├─ Price: $0.52
│  └─ Amount needed: XXXXX.XX XRP
│
└─ Binance Coin (BNB) ◆
   ├─ Address: 0x742d35Cc...
   ├─ Price: $600
   └─ Amount needed: XX.XXXXXXXX BNB

USER SELECTS COIN
│
└─ Payment Details Screen Shows:
   ├─ Selected Coin Display
   │  └─ "[Coin Name] ([Symbol])"
   │
   ├─ Amount to Send
   │  ├─ Large amount: "X.XXXXXXXX [SYMBOL]"
   │  └─ USD equivalent: "≈ $XXXXX.XX USD"
   │
   ├─ Countdown Timer
   │  ├─ 30:00 (at start)
   │  ├─ Updates every second
   │  ├─ Shows MM:SS format
   │  ├─ Color: Green normally
   │  ├─ Color: Red when < 10 minutes
   │  └─ Warning: "Payment window expires soon!"
   │
   ├─ Wallet Address
   │  ├─ Full address displayed
   │  ├─ [Copy Address] button
   │  │  └─ Confirms copy: "Copied! ✓"
   │  │
   │  └─ Timeout: 2 second confirmation
   │
   ├─ QR Code
   │  ├─ 200x200 pixel size
   │  ├─ High resolution (Level H)
   │  ├─ Mobile scannable
   │  └─ Shows wallet address encoded
   │
   └─ Action Buttons
      ├─ [Payment Completed] (green)
      │  └─ Click when crypto sent
      │
      ├─ [Minimize Popup] (gray)
      │  └─ Closes modal, keeps watching
      │
      └─ [Contact Support] (blue)
         └─ Goes to /support page

USER SCANS QR CODE / COPIES ADDRESS
│
└─ Opens their wallet
   ├─ Pastes address OR scans QR
   ├─ Enters amount
   └─ Sends transaction

WAITING FOR PAYMENT
│
├─ Countdown continues ticking
├─ 30:00 → 29:59 → 29:58 → ...
│
├─ At 10:00 remaining:
│  ├─ Timer turns RED
│  └─ Warning message appears
│
├─ Options while waiting:
│  ├─ Wait for confirmation
│  ├─ Click "Payment Completed"
│  ├─ Click "Minimize Popup"
│  └─ Click "Contact Support"
│
└─ Timeout:
   └─ At 00:00 → Payment window closes

PAYMENT CONFIRMED
│
├─ User clicks "Payment Completed"
│
└─ Success Screen Shows:
   ├─ Large checkmark: "✓"
   ├─ "Payment Detected!"
   ├─ "Thank you for your payment of..."
   ├─ Green success box:
   │  "Your case has been submitted for review."
   │  "Confirmation email coming shortly."
   │
   └─ [Close & Return Home] button
      └─ Closes modal, returns to home
```

---

## Support System Flow

```
USER NEEDS SUPPORT
│
├─ Option 1: During Payment
│  ├─ Click "Contact Support" button
│  └─ Redirects to /support page
│
├─ Option 2: In Navigation
│  └─ Click "Support" in header (when added)
│
└─ Option 3: From Home
   └─ Scroll to support section

SUPPORT PAGE (/support)
│
└─ "We're Here to Help" Hero Section
   │
   ├─ Live Chat Card
   │  ├─ Icon: 💬
   │  ├─ "Chat with specialists in real-time"
   │  └─ [Start Live Chat] button
   │
   ├─ Email Card
   │  ├─ Icon: ✉️
   │  ├─ "support@cursory.io"
   │  └─ [Email Support] link
   │
   ├─ Phone Card
   │  ├─ Icon: ☎️
   │  ├─ "(800) 555-1234"
   │  └─ [Call Support] link
   │
   └─ Hours Card
      ├─ Icon: 🕐
      ├─ "24 hours a day"
      └─ "7 days a week"

LIVE CHAT WIDGET
│
├─ Always visible (bottom-right corner)
├─ Float button: 💬
│
└─ When clicked:
   ├─ Expands to chat window
   │
   ├─ Chat Header
   │  ├─ "Cursory Support"
   │  ├─ "Online now" indicator
   │  └─ [Minimize] [Close] buttons
   │
   ├─ Message History
   │  ├─ Agent message (gray, left)
   │  │  ├─ Text content
   │  │  └─ Timestamp
   │  │
   │  └─ User message (blue, right)
   │     ├─ Text content
   │     └─ Timestamp
   │
   ├─ Input Area
   │  ├─ Text input field
   │  │  └─ "Type your message..."
   │  │
   │  └─ [Send] button
   │     └─ Sends message on click
   │
   └─ Options
      ├─ [Minimize] button
      │  └─ Hides chat, shows float button
      │
      └─ [Close] button
         └─ Closes chat completely

FREQUENTLY ASKED QUESTIONS
│
├─ Q: My payment was declined, what should I do?
│  └─ A: Try another card or switch to crypto...
│
├─ Q: How long does recovery take?
│  └─ A: Initial assessment: 24-48 hours...
│
├─ Q: Can I cancel my payment?
│  └─ A: Contact support immediately...
│
└─ Q: What payment methods accepted?
   └─ A: Card and 6 cryptocurrencies...
```

---

## Error Handling Flow

```
CARD PAYMENT ERROR
│
├─ Error: Card Declined
│  ├─ Red alert box
│  ├─ Message: "Card was declined..."
│  │
│  └─ Options:
│     ├─ [Try Another Card]
│     │  └─ Shows card form again (cleared)
│     │
│     ├─ [Back to Payment Methods]
│     │  └─ Returns to method selection
│     │
│     └─ [Contact Support]
│        └─ Shows support info box
│
├─ Error: Invalid Card
│  ├─ Form validation error
│  ├─ Shows below field
│  └─ User must correct and resubmit
│
└─ Error: Processing Timeout
   ├─ Shows generic error message
   ├─ Offers to retry
   └─ Or contact support

CRYPTO PAYMENT ERROR
│
├─ Error: Timeout Expired
│  ├─ Payment window closed
│  ├─ Countdown reached 00:00
│  │
│  └─ Options:
│     ├─ [Contact Support]
│     │  └─ Help complete payment
│     │
│     └─ [Try Again]
│        └─ Restart crypto payment
│
├─ Error: Invalid Address
│  ├─ Display warning
│  ├─ Show wallet address again
│  └─ Offer to copy/rescan
│
└─ Error: Network Issue
   ├─ Show error message
   ├─ Offer to retry
   └─ Or contact support
```

---

## State Management Flow

```
COMPONENT STATE HIERARCHY
│
├─ ScheduleForm
│  ├─ formData (object)
│  │  ├─ fullName
│  │  ├─ email
│  │  ├─ phone
│  │  ├─ lossAmount ← Fee calculation
│  │  ├─ platform
│  │  ├─ lossDate
│  │  ├─ jurisdiction
│  │  └─ description
│  │
│  ├─ submitted (boolean)
│  ├─ showPaymentModal (boolean) ← Trigger
│  │
│  └─ handlers:
│     ├─ handleChange() → Updates formData
│     ├─ handleSubmit() → Opens PaymentModal
│     └─ handlePaymentModalClose() → Closes modal
│
├─ PaymentModal
│  ├─ isOpen (boolean) ← From parent
│  ├─ paymentMethod (null | 'card' | 'crypto')
│  ├─ recoveryFee (calculated from formData)
│  │
│  └─ handlers:
│     ├─ setPaymentMethod() → Choose method
│     └─ onClose() ← From parent
│
├─ CardPaymentForm
│  ├─ cardData (object)
│  │  ├─ cardNumber
│  │  ├─ cardHolder
│  │  ├─ expiryDate
│  │  └─ cvv
│  │
│  ├─ isProcessing (boolean)
│  ├─ error (string | null)
│  ├─ showError (boolean)
│  │
│  └─ handlers:
│     ├─ handleCardChange() → Validates & formats
│     ├─ handleSubmit() → Process payment
│     └─ Error state management
│
└─ CryptoPaymentForm
   ├─ selectedCoin (CryptoCoin | null)
   ├─ timeLeft (number) ← Countdown seconds
   ├─ paymentCompleted (boolean)
   ├─ copiedAddress (boolean) ← Copy feedback
   │
   └─ handlers:
      ├─ setSelectedCoin() → Choose coin
      ├─ setTimeLeft() ← useEffect countdown
      ├─ setPaymentCompleted() → Success
      └─ copyToClipboard() → Copy action
```

---

## Responsive Design Flow

```
MOBILE (< 640px)
├─ Payment modal: full width with padding
├─ Cards: stacked vertically
├─ Buttons: full width
├─ QR code: 160x160px
├─ Font: larger for readability
└─ Input: tall for touch (44px+)

TABLET (640px - 1024px)
├─ Payment modal: 90% width
├─ Cards: 2 columns where applicable
├─ Buttons: auto width
├─ QR code: 180x180px
├─ Layout: balanced
└─ Input: optimized for touch

DESKTOP (> 1024px)
├─ Payment modal: 768px max-width
├─ Cards: full grid layout
├─ Buttons: inline where needed
├─ QR code: 200x200px
├─ Layout: spacious
└─ Input: standard sizing
```

---

This flowchart system provides complete visibility into how users move through the Cursory payment process from start to finish, including error states, support integration, and device-responsive behavior.
