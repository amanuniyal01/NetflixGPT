Stream-GPT – Authentication & Core Video Foundation (React + Firebase + Redux)

This project is a Netflix-inspired web application built using React, Firebase Authentication, Redux Toolkit, Tailwind CSS, and TMDB API.
The goal of this project is to gradually build a production-ready Netflix-like platform, starting from authentication and moving toward real movie data, trailers, and GPT-based recommendations.

This README will be continuously updated as new features are added.

🚀 Features Implemented So Far
🔐 Authentication System (Completed)
✅ 1. Email & Password Signup

Users can create an account using email and password with proper validations:

Valid email format

Password length validation

Error handling with custom Firebase messages

✅ 2. Email Verification Flow

After signup:

A verification email is sent automatically using Firebase

User is signed out immediately after signup

User must verify their email before being allowed to log in

This prevents fake or unverified accounts.

🔒 3. Verified-Only Login Protection

On login:

Firebase reloads the user using user.reload()

emailVerified is checked

If not verified:

Login is blocked

User is signed out

Toast message is shown

“Please verify your email before logging in.”

This ensures only verified users can access protected routes.

🎉 4. Modern Notifications (react-hot-toast)

The project uses react-hot-toast instead of browser alerts:

Success messages (signup, login)

Error messages (auth errors, verification issues)

Toasts are:

Clean

Non-blocking

User-friendly

🧭 5. Auth State Handling with Firebase Observer

Implemented Firebase’s onAuthStateChanged:

Automatically tracks user login/logout

Syncs Firebase auth state with Redux

Redirects users:

Logged-in → /browse

Logged-out → /

This ensures persistent login state across refreshes.

🗂️ Redux State Management (In Progress)
✅ User Slice

Stores authenticated user details (uid, email, displayName)

Automatically updated on auth state change

Cleared on logout

🧩 Movie Slice (Foundation Added)

Redux slice created for movie data

Trailer video state added

Will be expanded for:

Now Playing

Popular

GPT recommendations

🎬 Movie Trailer Fetching (TMDB API)
✅ Trailer Fetch Logic

Fetches movie videos using TMDB API

Filters videos to get Trailer

Falls back safely if trailer is missing

Stores trailer data in Redux

✅ YouTube Embed

Trailer is rendered using YouTube iframe

Autoplay + mute enabled

Responsive aspect ratio

This forms the hero background video like Netflix.

🎨 UI & Styling

Tailwind CSS for styling

Responsive typography and layouts

Netflix-style buttons

Video title with text shadow

Fully responsive across screen sizes

🏗️ Project Structure (Current)
src/
│── components/
│   ├── Login.jsx
│   ├── Header.jsx
│   ├── VideoTitle.jsx
│   └── VideoBackground.jsx
│
│── hooks/
│   └── useTrailerVideo.js (custom hook – WIP)
│
│── utils/
│   ├── firebase.js
│   ├── validate.js
│   ├── constants.js
│   ├── FirebaseErrors.js
│   └── movieSlice.js
│
│── store/
│   └── appStore.js
│
│── App.js
└── index.js
