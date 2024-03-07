"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    return (
    <div>
    {pathName === '/login/login-admin'?(
        <div>
            <Link href="/login/login-admin">Admin Login Page</Link>
        </div>
    ):(
        <div>
            <Link href="/login/login-user">Regular Login Page</Link>
        </div>
    )}
    </div>
  );
};
export default Navbar;
