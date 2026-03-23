import GameCard from './components/GameCard';
import styles from './App.module.css';

const GAMES = [
  {
    id: 'onchain',
    title: 'Onchain',
    description: 'Daily Mini Crossword',
    backgroundSvg: '/O.svg',
    url: 'https://onchain-crossword.vercel.app',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="18" width="12" height="12" fill="none" stroke="#F1C40F" strokeWidth="2"/>
        <rect x="34" y="18" width="12" height="12" fill="none" stroke="#F1C40F" strokeWidth="2"/>
        <rect x="18" y="34" width="12" height="12" fill="none" stroke="#F1C40F" strokeWidth="2"/>
        <rect x="34" y="34" width="12" height="12" fill="none" stroke="#F1C40F" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'market-call',
    title: 'Market Call',
    description: 'Daily Prediction Game',
    backgroundSvg: '/MC.svg',
    url: 'https://market-call.vercel.app',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12L44 32L20 32Z" fill="#F1C40F"/>
        <path d="M32 52L20 32L44 32Z" fill="#EA3943"/>
      </svg>
    )
  },
  {
    id: 'satoshi',
    title: 'Satoshi',
    description: 'Daily Crypto Puzzle',
    backgroundSvg: '/S.svg',
    url: 'https://satoshi-nine.vercel.app',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="32" y="42" textAnchor="middle" fill="#353536" fontSize="32" fontWeight="700" fontFamily="Family, Arial, sans-serif">S</text>
      </svg>
    )
  }
];

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* CoinDesk Games Logo */}
        <div className={styles.logoContainer}>
          <img
            src="/coindesk-games-logo.svg"
            alt="CoinDesk Games"
            className={styles.logo}
          />
        </div>

        {/* Game Cards */}
        <div className={styles.gameCards}>
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
