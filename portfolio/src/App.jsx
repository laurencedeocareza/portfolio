import Navbar from "./components/Navbar";
import profileImage from "./image/profile.jpg";

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
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <p className="text-2xl mb-4 bungee-regular">My Name is</p>
                <h1 className="text-4xl font-bold bungee-regular">
                  Laurence Jade Deocareza
                </h1>
                <p className="mt-4 text-2xl bungee-regular">Web Developer</p>
                <p className="mt-6 max-w-xl">
                  Welcome to my portfolio website! I am passionate about
                  creating beautiful and functional web applications.
                </p>
              </div>
              <div className="md:w-1/2" />
              <div className="mt-8 md:mt-0">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-64 h-64 object-cover mx-auto"
                />
              </div>
            </div>
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
