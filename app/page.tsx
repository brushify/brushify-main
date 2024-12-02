import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";

export default function Home() {
    return (
        <div className='min-h-screen bg-white'>
            <main>
                <Hero />
                <Features />
            </main>
        </div>
    );
}
