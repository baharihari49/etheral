# Ethereal - Next.js Web3 App

This is a **Next.js** project that integrates **RainbowKit** and **Wagmi** for seamless Web3 wallet connections.

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## ✨ Features
- Built with **Next.js App Router**
- Integrated **RainbowKit** and **Wagmi** for Web3 wallet connections
- Supports **MetaMask, Coinbase Wallet, WalletConnect, and more**
- Styled with **Tailwind CSS** for a modern UI
- Customizable themes for RainbowKit modal

## 📌 Design Decisions
- **RainbowKit** was chosen for its user-friendly Web3 modal integration.
- **Wagmi** simplifies interaction with Ethereum and blockchain-based transactions.
- **Next.js (App Router)** provides optimized routing and SSR capabilities.
- **Tailwind CSS** ensures quick and responsive UI design.

## ⚡ Challenges Faced
1. **Styling RainbowKit Modal**
   - Overriding default styles required using `theme={darkTheme({...})}`.
   - Custom styles were applied via `[data-rk]` CSS selectors.

2. **Handling Wallet Connection Issues**
   - Encountered SSL issues with `keys.coinbase.com`.
   - Resolved by checking Coinbase status and ensuring secure network connection.

## 🌍 Deployment
Deploy easily on **Vercel**:
```bash
vercel deploy
```
Or follow [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).

## 📖 Learn More
- [Next.js Docs](https://nextjs.org/docs)
- [RainbowKit Docs](https://www.rainbowkit.com/docs)
- [Wagmi Docs](https://wagmi.sh)

---
Built with ❤️ by Bahari.
