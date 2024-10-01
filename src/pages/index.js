import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import InstagramFeed from '../components/InstagramFeed';

const IndexPage = () => (
  <Layout>
    <Hero />
    <ContentSection />
    <InstagramFeed />
  </Layout>
);

export default IndexPage;