import React from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Team from 'sections/team';
import Blog from 'sections/blog';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Elite Code"
        description="Elite Code; Career Coaching; Career Consulting; Coding; SDE; DA"
      />
      <Banner />
      <UltimateFeatures />
      {/* <CustomerSupport /> */}
      {/* <Pricing /> */}
      {/* <Support /> */}
      {/* <Clients /> */}
      <Team />
      {/* <Blog /> */}
      <Faq />
    </Layout>
  );
}
