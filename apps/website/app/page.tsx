// apps/website/app/page.tsx  
'use client'
import { CustomSelect } from "library";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomSelect onChange={(e: HTMLSelectElement) => console.log(e)}>
        <option>Nigeria</option>
        <option>Ghana</option>
        <option>Uganda</option>
      </CustomSelect>
    </main>
  );
}
