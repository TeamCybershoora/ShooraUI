import { CopyButton } from "@/components/CopyButton";

export default function Mcp() {
  return (
    <div className="space-y-8 p-6 rounded-lg bg-[#030712] border border-white/10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">MCP</h1>
        <p className="text-xl text-gray-300">
          <a 
            href="https://modelcontextprotocol.io/docs/getting-started/intro"
            className="text-white-300 hover:text-purple-400 underline decoration-purple-300 hover:decoration-2 transition-colors duration-300"
          >
            Model Context Protocol (MCP). 
          </a>  is an open standard that enables AI assistants to securely connect to external data sources and tools.
        </p>
        <p className="text-xl text-gray-300">
          Shoora UI encourages the use of the shadcn MCP server to browse, search, and install components using natural language.
        </p>
      </div>
      <div className="space-y-4 pt-4">
        <h2 className="text-4xl font-semibold text-purple-400 mb-2">Steps</h2>
        <p className="text-xl text-gray-300">
          Shoora UI encourages the use of the shadcn MCP server to browse, search, and install components using natural language.
        </p>
        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">1. Pick a component</h2>
        <p className="text-gray-300 mt-2">
          Preview components and find something you like, then head to the Code tab.
        </p>
        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">2. Install dependencies</h2>
        <p className="text-gray-300 mt-2">
          Components may use external libraries, don't forget to install them by selecting Manual, copying the command, and running it in your terminal.
        </p>

        <div className="relative mt-4">
          <div className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm border border-purple-300/30 rounded-lg">
            <code className="text-sm font-mono text-gray-300">
                <span>1.   </span>
              npm install gsap
            </code>
            <CopyButton code="npm install gsap" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">3. Copy the code</h2>
        <p className="text-gray-300 mt-2">
          The Code tab also contains all the code you need to copy and you can also read the code to understand how it works.
        </p>
        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">4. Use the component</h2>
        <p className="text-gray-300 mt-2">
          A basic usage example is provided for every component, and if you want to go into details, you can check all the available props on the Preview tab.
        </p>
        <div className="relative mt-4">
          <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm border border-purple-300/30 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Example usage:</span>
              <CopyButton code="npm install gsap" />
            </div>
            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
              <code>
{`import { SplitText } from '@shoora/ui/textAnimation/split-text';

<SplitText
  text="Hello, you!"
  delay={100}
  duration={0.6}
/>`}
              </code>
            </pre>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-purple-300 mt-4 mb-2">That's all!</h2>
        <p className="text-gray-300 mt-2">
          From here on, it's all about how you integrate the component into your project. The code is yours to play around with - modify styling, functionalities, anything goes!
        </p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <a 
          href="/docs/getstarted/introduction"
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-purple-300/30 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]"
        >
          <span>←</span> Introduction
        </a>
        <a 
          href="/docs/getstarted/mcp"
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-purple-300/30 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]"
        >
          MCP <span>→</span>
        </a>
      </div>
    </div>
  );
}