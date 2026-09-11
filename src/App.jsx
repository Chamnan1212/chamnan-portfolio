function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-xl font-bold">
            CHAMNAN<span className="text-green-400">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </div>
      </nav>


     {/* Hero */}
<section className="max-w-6xl mx-auto px-6 py-32">

  <div className="grid md:grid-cols-[1fr_320px] gap-16 items-center">

    {/* Text */}
    <div className="max-w-4xl">

      <p className="text-green-400 font-mono mb-5">
        Hello, I'm
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        CHAMNAN
        <br />
        KASEMSAT
      </h2>

      <h3 className="mt-6 text-2xl md:text-3xl text-zinc-400">
        Computer Science & Innovation Student
      </h3>

      <p className="mt-6 max-w-2xl text-zinc-500 text-lg leading-relaxed">
        I'm interested in Web Development and Software Development.
        I enjoy building web applications, solving problems,
        and learning new technologies.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-zinc-700 rounded-lg font-semibold hover:bg-zinc-900 transition"
        >
          Contact Me
        </a>

      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800">

        <p className="text-sm text-zinc-500">
          Currently looking for
        </p>

        <p className="mt-2 text-lg font-medium">
          IT / Web Development Internship
        </p>

      </div>

    </div>


    {/* Profile Image */}
    <div className="flex justify-center md:justify-end">

      <div className="relative">

        <div className="absolute -inset-2 border border-green-400/30 rounded-2xl rotate-3"></div>

        <img
          src="/profile.jpg"
          alt="Chamnan Kasemsat"
          className="relative w-64 h-80 object-cover rounded-2xl border border-zinc-700"
        />

      </div>

    </div>

  </div>

</section>


      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 font-mono text-sm">
            01 / ABOUT
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            About Me
          </h2>

          <p className="mt-8 max-w-3xl text-zinc-400 text-lg leading-relaxed">
            I'm a fourth-year Computer Science student at Sripatum University.
            I'm interested in software and web application development.
            I have experience working on academic projects and enjoy
            learning new technologies through hands-on practice.
          </p>

        </div>
      </section>


      {/* Skills */}
      <section
        id="skills"
        className="border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 font-mono text-sm">
            02 / SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Tech Stack
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">HTML</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Web Structure
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">CSS</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Web Styling
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">JavaScript</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Programming
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">React</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Frontend
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">Node.js</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Backend
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">MongoDB</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Database
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">Git</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Version Control
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
              <h3 className="font-semibold">Tailwind CSS</h3>
              <p className="mt-2 text-sm text-zinc-500">
                UI Styling
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 font-mono text-sm">
            03 / PROJECTS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Selected Projects
          </h2>


          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition">

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-green-400">
                    Academic Project
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Keb Kao
                  </h3>
                </div>

                <span className="text-zinc-600 text-2xl">
                  ↗
                </span>

              </div>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                A web application for managing used-item buying,
                pricing, transactions, and reports.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
                  React
                </span>

                <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
                  Node.js
                </span>

                <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
                  MongoDB
                </span>

              </div>

            </div>


            {/* Project 2 */}
            <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition">

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-green-400">
                    Academic Project
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Game Item Marketplace
                  </h3>
                </div>

                <span className="text-zinc-600 text-2xl">
                  ↗
                </span>

              </div>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                A marketplace system for browsing, searching,
                filtering, selling, purchasing, favorites,
                and transaction history.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
                  Web Application
                </span>

                <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
                  Discord OAuth
                </span>

                <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
                  Database
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 font-mono text-sm">
            04 / CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
            I'm currently looking for an internship opportunity
            where I can learn, contribute, and gain real-world
            development experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="mailto:your-email@example.com"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
            >
              Email Me
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-zinc-700 rounded-lg font-semibold hover:bg-zinc-900 transition"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-800">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-sm text-zinc-500">
            © 2026 Chamnan Kasemsat
          </p>

          <p className="text-sm text-zinc-600">
            Built with React & Tailwind CSS
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App