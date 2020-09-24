import { useRouter } from 'next/router';
import React from 'react';
import {
  PullDownContent,
  PullToRefresh,
  RefreshContent,
  ReleaseContent,
} from 'react-js-pull-to-refresh';
import Head from 'next/head';
import Layout from '../src/features/common/Layout';
import SalesforceHome from '../src/tenants/salesforce/Home';
import SternHome from '../src/tenants/stern/Home';

import tenantConfig from '../tenant.config';

const config = tenantConfig();

export default function Home() {
  const router = useRouter();
  // stores whether device is mobile or not;
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const [leaderboard, setLeaderboard] = React.useState(null);
  const [tenantScore, setTenantScore] = React.useState(null);
  React.useEffect(() => {
    async function loadTenantScore() {
      await fetch(`${process.env.API_ENDPOINT}/app/tenantScore`, {
        headers: { 'tenant-key': `${process.env.TENANTID}` },
      }).then(async (res) => {
        const newTenantScore = res.status === 200 ? await res.json() : null;
        if (res.status !== 200) {
          router.push('/404', undefined, { shallow: true });
        }
        setTenantScore(newTenantScore);
      });
    }
    loadTenantScore();
  }, []);

  React.useEffect(() => {
    async function loadLeaderboard() {
      await fetch(`${process.env.API_ENDPOINT}/app/leaderboard`, {
        headers: { 'tenant-key': `${process.env.TENANTID}` },
      }).then(async (res) => {
        const newLeaderboard = res.status === 200 ? await res.json() : null;
        if (res.status !== 200) {
          router.push('/404', undefined, { shallow: true });
        }
        setLeaderboard(newLeaderboard);
      });
    }
    loadLeaderboard();
  }, []);

  function onRefresh() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  if (!config.header.items[0].visible) {
    if (typeof window !== 'undefined') {
      router.push('/');
    }
  }

  let HomePage;
  function getHomePage() {
    switch (process.env.TENANT) {
      case 'salesforce': HomePage = SalesforceHome;
        return (
          <HomePage
            leaderboard={leaderboard}
            tenantScore={tenantScore}
          />
        );
      case 'stern': HomePage = SternHome;
        return (
          <HomePage
            leaderboard={leaderboard}
            tenantScore={tenantScore}
          />
        );
      default: HomePage = null; return HomePage;
    }
  }

  return (
    <>
      <Head>
        <title>{`Home | ${config.meta.title}`}</title>
        <meta property="og:site_name" content={config.meta.title} />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content={`${process.env.SCHEME}://${config.tenantURL}`}
        />
        <meta property="og:title" content={`${config.meta.title} - Home`} />
        <meta property="og:description" content={config.meta.description} />
        <meta name="description" content={config.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={config.meta.image} />
        {config.tenantName === 'planet' ? (
          <link rel="alternate" href="android-app://org.pftp/projects" />
        ) : null}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={config.meta.title} />
        <meta name="twitter:site" content={config.meta.twitterHandle} />
        <meta name="twitter:url" content={config.tenantURL} />
        <meta name="twitter:description" content={config.meta.description} />
      </Head>
      <PullToRefresh
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<RefreshContent />}
        pullDownThreshold={150}
        onRefresh={onRefresh}
        triggerHeight={isMobile ? 150 : 0}
        backgroundColor="white"
        startInvisible
      >
        <Layout>
        {getHomePage()}
        </Layout>
      </PullToRefresh>
    </>
  );
}
