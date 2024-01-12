import styles from './Styles.module.css'; // Import the CSS module

function HoloCards(props) {
  return (
    <div class={styles.container}> {/* Use class without "ImageWithText-" prefix */}
      {props.cards?.map((item) => {
        return (
          <div class={styles.card} style={{"background-color": props.color}}>
            <h3 class={styles.title}>{item.title}</h3>
            <p class={styles.text} style={props.style}>{item.text}</p>
          </div>
        )
      }
      )}
    </div>
  );
}

export default HoloCards;
