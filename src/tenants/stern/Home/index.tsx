import styles from './Home.module.scss';
import LandingSection from '../../../features/common/Layout/LandingSection';
import LeaderBoard from '../../common/LeaderBoard';
import TreeCounter from '../../../features/common/TreeCounter/TreeCounter';
import Footer from '../../../features/common/Footer';

interface Props {
  leaderboard: any;
  tenantScore:any;
}

export default function About({ leaderboard, tenantScore }: Props) {
  return (
    <main>
      <LandingSection
        imageSrc={
          process.env.CDN_URL
            ? `${process.env.CDN_URL}/media/images/app/bg_layer.jpg`
            : 'https://cdn.plant-for-the-planet.org/media/images/app/bg_layer.jpg'
        }
      >
        {tenantScore && tenantScore.total
          && (
          <TreeCounter
            target={tenantScore.total}
            planted={tenantScore.total}
            hideTarget
          />
          ) }

        <p className={styles.publicUserDescription} style={{ fontWeight: 'bold', marginBottom: '0px' }}>Baum pflanzen – Zeit gewinnen</p>
        <p className={styles.publicUserDescription} style={{ marginTop: '8px' }}>
Mit Plant-for-the-Planet pflanzen wir weltweit Bäume und lassen somit unseren globalen STERN-Wald entstehen. Pro verkauftem Exemplar der Kliamwoche-Ausgabe spendet die Redaktion einen Baum. Jeder Baum, den wir pflanzen, bindet CO2 und schenkt uns Menschen wertvolle Zeit. Diese Zeit werden wir nutzen, um unsere CO2-Emissionen massiv zu reduzieren. Versprochen! Für die Menschen!
        </p>
      </LandingSection>
      <LeaderBoard leaderboard={leaderboard} />
      <Footer />
    </main>
  );
}
