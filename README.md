# 𝕏loout - Web3 Influence Score

> The Web3 Klout Score for X creators. Measure influence. Prove impact.

## 🚀 About

𝕏loout is the reputation and influence intelligence layer for Web3 creators on X. Instead of measuring creators only by followers and likes, 𝕏loout measures real influence, audience quality, reputation, authenticity, and ecosystem impact.

### What makes 𝕏loout different?

- **Real influence metrics** - Not vanity numbers
- **On-chain reputation** - Verify wallet activity
- **Audience quality** - Measure real engagement
- **Creator discovery** - Find creators who actually drive results

## ✨ Features

- 🎯 **Xloout Score** - Your verified Web3 influence score
- 📊 **Dashboard** - Real-time analytics and metrics
- 🏆 **Leaderboard** - Rank among Web3 creators
- 🔗 **Wallet Connection** - Verify on-chain reputation
- 📈 **Performance Tracking** - Monitor your growth

## 🛠️ Tech Stack

- **React** - UI Framework
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **React Router** - Navigation
- **Lucide React** - Icons

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- X Developer Account (for OAuth)

### Installation

```bash
# Clone the repository
git clone https://github.com/bigjaypablo/xloout.git
cd xloout

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your X API credentials to .env

# Start development server
npm run dev
```

Environment Variables

Create a .env file with:

```env
VITE_X_CLIENT_ID=your_client_id
VITE_X_CLIENT_SECRET=your_client_secret
VITE_X_REDIRECT_URI=http://localhost:5173/auth/x/callback
```

📁 Project Structure

```
xloout/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   │   ├── Connect/     # Connect flow
│   │   └── Dashboard/   # Dashboard page
│   ├── services/        # API services
│   ├── App.jsx          # Main app
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html
├── package.json
└── README.md
```

🔐 Authentication

𝕏loout uses X OAuth 2.0 for authentication. You'll need:

1. An X Developer account
2. A project with OAuth 2.0 enabled
3. Client ID and Client Secret

🎨 Design

· Color Palette: Black, White, Blue
· Typography: Inter
· Style: Minimal, Premium, Web3-native

📝 License

MIT © 2026 𝕏loout

🙏 Acknowledgments

· Built with React and Tailwind CSS
· Icons by Lucide
· Fonts by Inter

---

Made with ❤️ for the Web3 Creator Economy
