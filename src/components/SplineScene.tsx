// /src/components/SplineScene.tsx
'use client';

import { useRouter } from 'next/navigation';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const router = useRouter();

  const handleSplineClick = (spline: any) => {
    console.log('Spline click event:', spline);
    if (spline.target.name === 'timeline_brain') {
      router.push('/timeline');
    } else if (spline.target.name === 'architecture_brain') {
      router.push('/architecture');
    } else if (spline.target.name === 'papers_brain') {
      router.push('/papers');
    }
  };

  return (
    <div className="fixed right-0 top-0 w-2/3 h-screen">
      <Spline
        scene="https://prod.spline.design/JyZxPoJktIrDR-8O/scene.splinecode"
        onMouseDown={handleSplineClick}
        className="w-full h-full"
      />
    </div>
  );
}