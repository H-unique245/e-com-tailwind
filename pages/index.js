import Layout from "@/components/Layout";

export default function Home() {
 
  return <Layout>{`Logged In {session.user.email}`} </Layout>;
}
