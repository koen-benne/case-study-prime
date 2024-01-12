import styles from './Styles.module.css'; // Import the CSS module

function Cards(props) {
  return (
    <div class={styles.container}> {/* Use class without "ImageWithText-" prefix */}
      {props.cards?.map((item) => {
        return (
          <div class={styles.card} style={{"background-color": props.color}}>
            <div class={styles.textContainer}>
              <p class={styles.text} style={props.style}>{item}</p>
            </div>
          </div>
        )
      }
      )}
    </div>
  );
}

export default Cards;
