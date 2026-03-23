import styles from './GameCard.module.css';

const GameCard = ({ game }) => {
  const handleClick = () => {
    window.location.href = game.url;
  };

  return (
    <div className={styles.gameCard} onClick={handleClick}>
      {/* Colored accent section with icon */}
      <div
        className={styles.cardAccent}
        style={{
          backgroundImage: `url('${game.backgroundSvg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.cardIcon}>
          {game.icon}
        </div>
      </div>

      {/* Info section */}
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{game.title}</h3>
        <p className={styles.cardDescription}>{game.description}</p>
        <button
          className={styles.playButton}
          onClick={handleClick}
          aria-label={`Play ${game.title}`}
        >
          PLAY
        </button>
      </div>
    </div>
  );
};

export default GameCard;
