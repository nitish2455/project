import Layout from "../components/Layout";
import Deployment from "../components/Deployment";
import DiscussionForum from "../components/DiscussionForum";

const ServicesNew = () => {
  return (
    <Layout>
      <div className="flex gap-4">
        <div className="space-y-3">
          <Deployment />
        </div>
        <div className="space-y-3 hidden md:block">
          <DiscussionForum />
        </div>
      </div>
    </Layout>
  );
};

export default ServicesNew;
