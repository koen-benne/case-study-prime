import styles from './Styles.module.css'; // Import the CSS module
import TeamMember from '../TeamMember/Component';

function TeamSection() {
  return (
    <>
      <h2 class={styles.title}>Meet the Team</h2>
      <div class={styles.container}>
        <div class={styles.grid}>
          <TeamMember name="Jorick Post" img="Jorick" course="Interaction designer" />
          <TeamMember name="Roy de Schepper" img="Roy" course="User researcher en tester" />
          <TeamMember name="Danny Hu" img="Danny" course="Creative technology & prototyper" />
          <TeamMember name="Koen Benne" img="Koen" course="Visual designer" />
        </div>
      </div>
    </>
  );
}

export default TeamSection;

