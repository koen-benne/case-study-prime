import styles from './Styles.module.css'; // Import the CSS module

function ImageWithText(props) {
  return (
    <div class={`${styles.container} ${ props.left !== false ? styles.containerLeft : styles.containerRight}`}>
      <img src={props.img} class={styles.image} alt="foto" />
      <div class={styles.textContainer}> {/* Use brackets for hyphenated class name */}
        {/* <h2 class={styles.title}>About us</h2> */}
        {
          props.content?.map((item) => {
            if (item.type === "paragraph") {
              return <p class={styles.paragraph}>{item.text}</p>
            } else if (item.type === "list") {
              return (
                <ul class={styles.bulletPoints}>
                  {
                    item.content?.map((item) => {
                      return <li>{item}</li>
                    })
                  }
                </ul>
              )
            } else if (item.type === "button") {
              return (
                <a href={item.link} class={styles.link} target="_blank">
                  {item.text}
                </a>
              )
            } else if (item.type === "title") {
              return <h4 class={styles.title}>{item.text}</h4>
            }
          })
        }
      </div>
    </div>
  );
}

export default ImageWithText;
