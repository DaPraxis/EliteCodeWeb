import React from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <Layout>
      {/* <Seo
        title="Agency Digital"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      /> */}
      <Banner />
      <UltimateFeatures />
      <CustomerSupport />
      <Pricing />
      <Support />
      <Clients />
      <Blog />
      <Faq />
    </Layout>
  );
}