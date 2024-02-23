'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const navigateTo=(page)=>{
    router.push(page);
  }

  return (
    <div>
      <h1>HOME</h1>
      <Link href='/projects'>Projects Page</Link>
      <br/>
      <button onClick={() => router.push("about")}>
        Navigate to About page 
      </button><br/>
      <button onClick={()=>navigateTo('about')}>Navigate to About using a reusable function</button>
      <br/>
      <button onClick={()=>navigateTo('login')}>Navigate to login page</button>
    </div>
  );
};
export default page;
