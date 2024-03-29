import styles from './Styles.module.css';

function TeamMember(props) {
  return (
    <div class={styles.container}>
      <div class={styles.content}>
        <img class={styles.image} src={"/images/" + props.img+ ".png"} alt="Team member" />
      </div>
      <div class={styles.textContainer}>
        <h3 class={styles.name}>{props.name}</h3>
        <p class={styles.study}>{props.course}</p>
      </div>
    </div>
  );
}

export default TeamMember;
