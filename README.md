# Netflix-GPT – Authentication System (React + Firebase)

This project is a Netflix-style authentication system built using **React**, **Firebase Authentication**, and **react-hot-toast**.  
It includes **secure email/password signup**, **email verification**, **protected login**, and **modern toast notifications**.

As the project grows, this README will be updated with new features, pages, components, and architecture details.

---

## 🚀 Features Implemented So Far

### ✅ 1. Email & Password Signup  
Users can register using email and password.  
Front-end validations include:
- Valid email
- Password with minimum length
- (Optional) full name field validation

### ✅ 2. Email Verification  
After signup:
- A verification email is automatically sent using Firebase.
- User is **signed out** immediately to prevent unverified access.
- User must open their email and click **"Verify Email"** to activate the account.

### 🔒 Verification Enforcement  
Even if the user tries to login:
- The app checks `emailVerified` using `user.reload()`.
- If email is **not verified**, login is blocked and user is signed out.
- A clear toast message is shown:  
  **“Please verify your email before logging in.”**

This ensures only real, verified users can access the app.

### 🎉 3. Modern Toast Notifications  
The project uses **react-hot-toast** instead of alerts.  

Usage:
- `toast.success("Message")`
- `toast.error("Message")`

Toasts are clean, centered, and easy to see.

### 🧼 4. Clean UI with Tailwind CSS  
The login/signup UI includes:
- Netflix-themed background
- Responsive layout
- Input field styling
- Real-time error messages

---

## 🏗️ Project Structure (Simplified)

src/
│── components/
│ └── Login.jsx # Authentication UI + logic
│── utils/
│ ├── firebase.js # Firebase configuration
│ ├── validate.js # Input validations
│ └── FirebaseErrors.js # Custom Firebase error messages
│── App.js # Main App + Toaster config
└── index.js