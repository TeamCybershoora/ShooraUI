export default function Introduction() {
  return (
    <div className="space-y-8 p-6 rounded-lg bg-[#030712] border border-white/10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-purple-400">Welcome to Shoora UI</h1>
        <p className="text-xl text-gray-300">
          Shoora UI is an open-source collection of carefully designed UI components that aim to enhance your React web applications.
        </p>
        <p className="text-xl text-gray-300">This is not your typical component library, which means you won't find a set of generic buttons, inputs, or other common UI elements here.</p>
        <p className="text-xl text-gray-300">
          Basically, these components are here to help you stand out and make a statement visually by adding a touch of creativity to your projects.
        </p>
      </div>
      
      <div className="space-y-6 pt-8">
        <h2 className="text-4xl font-semibold text-purple-400">Why Shoora UI?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <span className="font-medium text-purple-200">Fully Modular:</span> Install strictly what you need, Shoora UI is not a dependency
          </li>
          <li>
            <span className="font-medium text-purple-200">Free Choice:</span> JS or TS, plain CSS or Tailwind, the code is all here
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-300 mt-8">Free For All</h2>
        <p className="text-gray-300">
          Every component you choose to bring into your project is yours to modify or
          extend, because you get full visibility of the code, not just an import.
        </p>

        <h2 className="text-2xl font-semibold text-purple-300 mt-8">Prop-First Approach</h2>
        <p className="text-gray-300">
          Every component is designed to be flexible and customizable, with props that allow
          you to adjust the look and feel without having to always dive into the code.
        </p>

        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">Fully Modular</h2>
        <p className="text-gray-300">
          Shoora UI is not your classic NPM library, you install only the components you need
          by either copying the code or using the CLI, without pulling in a whole library.
        </p>

        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">Free Choice</h2>
        <p className="text-gray-300">
          I don't want to dictate how you build your projects. Whether you prefer JavaScript
          or TypeScript, plain CSS or Tailwind, it's all here for you to use as you see fit.
        </p>
      </div>
      <div className="flex justify-end">
        <a 
          href="/docs/getstarted/installation"
          className="inline-flex items-center justify-center bg-white/5 backdrop-blur-sm border border-purple-300/30 text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]"
        >
          Installation -&gt;
        </a>
      </div>
    </div>
  );
}