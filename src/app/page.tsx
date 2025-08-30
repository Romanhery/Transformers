// This is the homepage: /src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">The Transformer Archive</h1>
        <p className="text-xl text-gray-300 mb-8">
          How Transformers Revolutionized Artificial Intelligence
        </p>
        <nav className="flex justify-center gap-6">
          <a href="/timeline" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Interactive Timeline</a>
          <a href="/architecture" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Architecture Explained</a>
          <a href="/papers" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Key Papers</a>
        </nav>
      </div>
    </main>
  );
}