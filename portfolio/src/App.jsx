import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container px-6 py-20">
            <h1 className="text-4xl font-bold">Laurence Jade Deocareza</h1>
            <p className="mt-4 text-lg">
              this is the home section placeholder.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container px-6 py-20">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="mt-4">Short bio or description goes here.</p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container px-6 py-20">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="mt-4">Project list / cards will be added here.</p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container px-6 py-20">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-4">Contact details or form placeholder.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
