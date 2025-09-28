
"use client";
import { navItems } from "@/lib/Navitems";
import Link from "next/link";
import { usePathname } from "next/navigation";







const Navitems = () => {
  const pathname= usePathname();



  const isActive= (path:string):boolean => {
    return path=== "/"? pathname ==="/" : pathname?.startsWith(path)
  }
  

  
   

  
  return (
   <ul className=" flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
    {navItems.map(({href,title})=>(
      <li key={href}>
        <Link href={href} className={`hover:text-yellow-300 transition-colors ${isActive(href) ? 'text-grey-100' : ''}`}>
          {title}
        </Link>
      </li>
    ))}
   </ul>
  )
}

export default Navitems
