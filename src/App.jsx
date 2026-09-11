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

    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Parking Lot Search */}
      <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-green-400/50 transition">

        <p className="text-sm text-green-400">
          Academic Project
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Parking Lot Search
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          A web application for searching and finding
          available parking spaces.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
            Web Application
          </span>

          <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
            JavaScript
          </span>

          <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
            Database
          </span>
        </div>

        <a
          href="https://github.com/supawee07/Parking-Lot-Search"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-5 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-zinc-200 transition"
        >
          View Project ↗
        </a>

      </div>


      {/* Sleep AI */}
      <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-green-400/50 transition">

        <p className="text-sm text-green-400">
          Academic Project
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Sleep AI
        </h3>

        <p className="mt-5 text-zinc-400 leading-relaxed">
          An AI-based project focused on sleep-related
          information and user interaction.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
            AI
          </span>

          <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
            Web Application
          </span>

          <span className="px-3 py-1 text-xs bg-zinc-900 rounded-full">
            Database
          </span>
        </div>

        <a
          href="https://github.com/supawee07/sleep_ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-5 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-zinc-200 transition"
        >
          View Project ↗
        </a>

      </div>


      {/* Keb Kao */}
      <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-green-400/50 transition">

        <p className="text-sm text-green-400">
          Academic Project
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Keb Kao
        </h3>

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

        <a
          href="https://github.com/supawee07/KebKao"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-5 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-zinc-200 transition"
        >
          View Project ↗
        </a>

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
              href="mailto:billzzz394@gmail.com"
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