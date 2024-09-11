import DiscussionForum from "../components/DiscussionForum";
import Layout from "../components/Layout";
import Deployment from "../components/Deployment";
import Link from "next/link"; 

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl ">Home</h1>
        <div className="mt-4">
          <Link href="/services-new">
            <a className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
              Go to Services New
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
