import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function FloatingCoin() {
  const coinRef = useRef();

  useFrame((state) => {
    coinRef.current.rotation.y += 0.02;
    coinRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={coinRef}>
        <cylinderGeometry args={[2, 2, 0.2, 32]} />
        <meshStandardMaterial color="#FDD835" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function DonationTables() {
  return (
    <section className="bg-cream/40 py-20 relative overflow-hidden">
      {/* 3D Background Element using Three.js */}
      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] opacity-20 pointer-events-none z-0 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingCoin />
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 relative z-10 space-y-16">

        {/* Table 1: What Does Your Donation Do? */}
        <div className="space-y-6">
          <h2 className="font-serif font-black text-3xl text-accent-dark">What Does Your Donation Do?</h2>
          <div className="bg-white border-2 border-gold/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base text-dark">
                <thead>
                  <tr className="bg-dark text-white uppercase text-xs tracking-wider">
                    <th className="p-4 sm:p-5">Your Donation</th>
                    <th className="p-4 sm:p-5">What It Provides</th>
                    <th className="p-4 sm:p-5">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10 font-medium">
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 font-bold">₹100</td>
                    <td className="p-4 sm:p-5 text-grey">Fresh tea and snacks for one elder</td>
                    <td className="p-4 sm:p-5">1 day</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 font-bold">₹500</td>
                    <td className="p-4 sm:p-5 text-grey">Complete meals for one elder</td>
                    <td className="p-4 sm:p-5">1 day</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 font-bold">₹1,500</td>
                    <td className="p-4 sm:p-5 text-grey">Monthly medicines for one elder</td>
                    <td className="p-4 sm:p-5">1 month</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 font-bold">₹2,500</td>
                    <td className="p-4 sm:p-5 text-grey">Clothing and toiletries for one elder</td>
                    <td className="p-4 sm:p-5">1 month</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 font-bold">₹6,500</td>
                    <td className="p-4 sm:p-5 text-grey">Complete care — food, shelter, clothing, medicines, essentials</td>
                    <td className="p-4 sm:p-5">1 month</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 font-bold">₹75,000</td>
                    <td className="p-4 sm:p-5 text-grey">One year of complete care for one elder</td>
                    <td className="p-4 sm:p-5">1 year</td>
                  </tr>
                  <tr className="bg-primary/5 hover:bg-primary/10 transition">
                    <td className="p-4 sm:p-5 font-black text-primary">Any Amount</td>
                    <td className="p-4 sm:p-5 font-bold text-dark">Is used directly. Nothing is wasted. Everything matters.</td>
                    <td className="p-4 sm:p-5 font-black text-primary">Always</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Table 2: Monthly Cost Breakdown */}
        <div className="space-y-6">
          <h2 className="font-serif font-black text-3xl text-dark">Monthly Cost Breakdown — Full Transparency</h2>
          <div className="bg-white border-2 border-gold/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base text-dark">
                <thead>
                  <tr className="bg-dark text-white uppercase text-xs tracking-wider">
                    <th className="p-4 sm:p-5 w-2/3">Expense Head</th>
                    <th className="p-4 sm:p-5 w-1/3">Monthly Cost Per Elder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10 font-medium">
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 text-grey">Food (3 meals + tea daily)</td>
                    <td className="p-4 sm:p-5">₹3,500</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 text-grey">Medicines & Health</td>
                    <td className="p-4 sm:p-5">₹500</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 text-grey">Toiletries & Hygiene</td>
                    <td className="p-4 sm:p-5">₹300</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 text-grey">Clothing & Essentials</td>
                    <td className="p-4 sm:p-5">₹700</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 text-grey">Staff & Operations Share</td>
                    <td className="p-4 sm:p-5">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-warm/30 transition">
                    <td className="p-4 sm:p-5 text-grey">Utilities & Overheads</td>
                    <td className="p-4 sm:p-5">₹500</td>
                  </tr>
                  <tr className="bg-primary/5 hover:bg-primary/10 transition">
                    <td className="p-4 sm:p-5 font-black text-primary">Total per Elder per Month</td>
                    <td className="p-4 sm:p-5 font-black text-primary">₹6,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DonationTables;
