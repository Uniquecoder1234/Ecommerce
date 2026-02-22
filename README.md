# ShopElite — Affiliate eCommerce Store

A modern, full-stack affiliate eCommerce website built with React + Vite, Firebase, and Tailwind CSS.

---

## 🗂️ Folder Structure

```
affiliate-shop/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Public navbar (no admin link)
│   │   ├── ProductCard.jsx     # Product display card
│   │   ├── ProductModal.jsx    # Add/Edit product form
│   │   └── ProtectedRoute.jsx  # Admin route guard
│   ├── context/
│   │   └── AuthContext.jsx     # Firebase auth state
│   ├── firebase/
│   │   └── config.js           # Firebase initialization
│   ├── pages/
│   │   ├── Home.jsx            # Public product store
│   │   ├── AdminLogin.jsx      # Admin login page
│   │   └── AdminDashboard.jsx  # Admin product manager
│   ├── App.jsx                 # Routes
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + global styles
├── .env                        # Your Firebase secrets
├── .env.example                # Template (safe to commit)
├── firestore.rules             # Firestore security rules
├── storage.rules               # Storage security rules
├── vercel.json                 # Vercel SPA routing
├── netlify.toml                # Netlify SPA routing
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Step-by-Step Setup

### 1. Clone or download this project

```bash
cd affiliate-shop
npm install
```

### 2. Firebase Console Setup

Go to [Firebase Console](https://console.firebase.google.com) and open your project `onet-42ff3`.

#### Enable Authentication
1. Go to **Authentication → Sign-in method**
2. Enable **Email/Password**
3. Go to **Authentication → Users → Add user**
4. Add: `sadiadmin@ecom.com` with a strong password

#### Enable Firestore
1. Go to **Firestore Database → Create database**
2. Start in **production mode**
3. Choose your region
4. After creation, go to **Rules** tab and paste contents of `firestore.rules`

#### Enable Storage
1. Go to **Storage → Get started**
2. Start in **production mode**
3. After creation, go to **Rules** tab and paste contents of `storage.rules`

### 3. Environment Variables

Your `.env` file is already configured with your Firebase keys. Keep it private and never commit it to Git.

### 4. Run Locally

```bash
npm run dev
```

- **Store:** http://localhost:5173
- **Admin Login:** http://localhost:5173/admin/login
- **Admin Dashboard:** http://localhost:5173/admin/dashboard (protected)

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add all `.env` variables in Vercel Dashboard → Project → Settings → Environment Variables.

### Deploy to Netlify

```bash
npm run build
# Drag and drop the /dist folder at netlify.com
# Or use Netlify CLI: netlify deploy --prod --dir=dist
```

Add environment variables in Netlify Dashboard → Site Settings → Environment Variables.

---

## 🔐 Security Notes

- Admin route `/admin/dashboard` is protected — unauthenticated users are redirected to login
- Admin email check is enforced both client-side (JS) and server-side (Firestore/Storage rules)
- The admin login page is not linked anywhere in the public navigation
- Never expose your Firebase keys in public GitHub repos (`.env` is gitignored)
- Firestore rules ensure only the admin email can write/delete products

---

## ✨ Features

| Feature | Status |
|---|---|
| Responsive product grid | ✅ |
| Product image, title, description, buy link | ✅ |
| "Buy Now" opens affiliate link in new tab | ✅ |
| Admin login (Firebase Auth) | ✅ |
| Admin-only access via email check | ✅ |
| Add / Edit / Delete products | ✅ |
| Image upload to Firebase Storage | ✅ |
| Product data in Firestore | ✅ |
| Protected admin route | ✅ |
| Tailwind CSS + modern card design | ✅ |
| Mobile responsive | ✅ |
| Smooth hover animations | ✅ |
| Loading skeleton states | ✅ |

---

## 🎨 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Fonts:** Playfair Display + DM Sans
- **Hosting:** Vercel / Netlify
