# 🍽️ RecipeHub – Recipe Sharing Platform

RecipeHub is a modern full-stack recipe sharing platform where food lovers can discover, create, purchase, and manage recipes. Users can publish their own recipes, browse community recipes, save favorites, purchase premium recipes, and interact with the platform through a secure authentication system.

---

## 🚀 Live Website

🔗 Live Site: https://your-live-site.vercel.app



## ✨ Features

### 👨‍🍳 User Features

- Secure Email & Google Authentication
- JWT Authentication with HTTPOnly Cookie
- Browse All Recipes
- View Recipe Details
- Like Recipes
- Add Recipes
- Update/Delete Own Recipes
- Favorite Recipes
- Purchase Premium Recipes
- Premium Membership System
- Purchased Recipe List
- User Profile Update
- Recipe Report System
- Server-side Pagination
- Category Filtering using MongoDB `$in`

---

### 👑 Admin Features

- Dashboard Overview
- Manage Users
- Block / Unblock Users
- Manage Recipes
- Delete Recipes
- Feature Recipes
- Review Recipe Reports
- Remove Reported Recipes
- Premium Membership Approval
- Transaction Monitoring
- Platform Statistics

---

## 🛠️ Technologies Used

### Frontend

- Next.js 16
- React 19
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Hook Form
- React Hot Toast
- Axios
- Firebase Authentication
- React Query

### Backend

- Node.js
- Express.js
- MongoDB
- Firebase Admin SDK
- JWT
- Stripe Payment Gateway
- Cookie Parser

---

## 📂 Main Functionalities

- Authentication System
- Recipe Management
- Premium Membership
- Stripe Checkout
- Favorites
- Purchased Recipes
- Recipe Reporting
- Admin Dashboard
- Responsive UI
- Custom 404 Page

---

## 📸 Image Upload

Recipe images are uploaded using:

- ImgBB API

---

## 💳 Payment Gateway

Stripe Checkout is used for:

- Premium Membership
- Recipe Purchase

---

## 📁 Environment Variables

### Client

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_IMGBB_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Server

```env
PORT=
MONGODB_URI=
JWT_SECRET=
STRIPE_SECRET_KEY=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

---

## 📦 Installation

### Clone Client

```bash
git clone CLIENT_REPOSITORY_LINK
```

```bash
cd recipehub-client
```

```bash
npm install
```

```bash
npm run dev
```

---

### Clone Server

```bash
git clone SERVER_REPOSITORY_LINK
```

```bash
cd recipehub-server
```

```bash
npm install
```

```bash
npm run dev
```

---

## 📊 Project Structure

```
Client
│
├── app
├── components
├── hooks
├── providers
├── services
├── utils

Server
│
├── controllers
├── middlewares
├── routes
├── config
├── firebase
```

---

## 📱 Responsive Design

The application is fully responsive for

- Desktop
- Tablet
- Mobile

---

## 🔒 Security

- Firebase Authentication
- JWT Authentication
- HTTPOnly Cookie
- Protected Routes
- Admin Authorization
- Environment Variables
- Secure MongoDB Credentials




