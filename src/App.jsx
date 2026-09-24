import { createContext, useContext, useEffect, useRef, useState } from "react";

// Place project images in public/projects/ and edit the descriptions below.
const projects = {
  "parking-lot-search": {
    "title": "Parking Lot Search",
    "description": "A university parking project covering space availability, advance reservations, online payments, vehicle registration, and parking history.",
    "tags": [
      "Web Application",
      "JavaScript",
      "Database"
    ],
    "images": [
      "/projects/parking-lot-search-1.jpg.png",
      "/projects/parking-lot-search-2.jpg.png"
    ],
    "details": [
      {
        "title": "University group project",
        "text": "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project."
      },
      {
        "title": "Problem and objective",
        "text": "The CSI202 project aims to reduce time spent circling for parking and improve trip planning through up-to-date availability information and advance reservations."
      },
      {
        "title": "Users and requirements",
        "text": "The requirements distinguish Member and Visitor users. Shared functions include checking availability, payment and parking history, while member functions also include advance booking and adding vehicle registration numbers."
      },
      {
        "title": "My responsibility",
        "text": "I was responsible for the advance parking reservation system, as listed in the team assignment. Other teammates handled online payment, parking history, and vehicle registration."
      },
      {
        "title": "System analysis and design",
        "text": "The presentation includes member and visitor personas, prioritized user and system requirements, and functional and non-functional requirements, with an emphasis on clear and easy-to-use interfaces."
      }
    ],
    "category": "University Group Project"
  },
  "sleep-ai": {
    "title": "Life span+",
    "description": "An AI self-care chatbot covering sleep, nutrition, exercise, and general wellness, using a retrieval-based knowledge base.",
    "tags": [
      "Python",
      "RAG",
      "ChromaDB",
      "LangChain"
    ],
    "images": [
      "/projects/sleep-ai-1.jpg.jpg",
      "/projects/sleep-ai-2.jpg.png"
    ],
    "details": [
      {
        "title": "University group project",
        "text": "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project."
      },
      {
        "title": "Project overview",
        "text": "Life span+ is the project previously listed here as Sleep AI. Its poster focuses on sleep knowledge and personalized guidance, while the presentation covers a broader self-care chatbot accessible through a web application."
      },
      {
        "title": "Knowledge and data preparation",
        "text": "The presentation identifies World Bank, WHO, and ThaiHealth as data sources. Topics include sleep, obesity, non-communicable diseases, nutrition, and exercise. Preparation includes duplicate removal, converting bedtime and wake-up strings into datetime values, and creating bed_hour and wake_hour features."
      },
      {
        "title": "RAG workflow",
        "text": "Knowledge documents are split into smaller sections, converted into embeddings, and stored in ChromaDB. A question retrieves relevant context, which is passed to the language model to generate a response. The poster shows a Python and LangChain workflow."
      },
      {
        "title": "Models used",
        "text": "The slides specify sentence-transformers/all-MiniLM-L6-v2 for embeddings and Qwen/Qwen2-0.5B-Instruct for response generation, with ChromaDB as the vector database."
      },
      {
        "title": "Scope of advice",
        "text": "The project provides basic self-care information. It is not intended to replace medical diagnosis or treatment."
      }
    ],
    "category": "University Group Project"
  },
  "keb-kao": {
    "title": "Keb Kao",
    "description": "A recycling-shop management website covering customers, material prices, purchasing transactions, and online reports.",
    "tags": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    "images": [
      "/projects/keb-kao-1.jpg.png"
    ],
    "details": [
      {
        "title": "University group project",
        "text": "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project."
      },
      {
        "title": "Project objective",
        "text": "The team designed Keb Kao to organize purchasing records, reduce paperwork and calculation errors, and let customers check material prices online."
      },
      {
        "title": "Members and materials",
        "text": "The scope includes registration and login with JWT, customer information for shop owners, and creating, editing or deleting recyclable material records with weight and price per kilogram."
      },
      {
        "title": "Transactions and reports",
        "text": "Purchase totals are calculated from weight multiplied by unit price. The project includes customer transaction history, daily purchase totals, income and expense reporting, and summaries by material type."
      },
      {
        "title": "Technology stack",
        "text": "React, CSS and JavaScript on the frontend; Node.js and Express on the backend; MongoDB through Mongoose for data; Swagger for API testing; and Figma / Canva for interface and logo design."
      },
      {
        "title": "Expected value",
        "text": "More organized and traceable shop records, convenient online price checks, and support for recycling and waste reduction in the community."
      }
    ],
    "category": "University Group Project"
  },
  "iv-van": {
    "title": "IV VAN",
    "tags": [
      "Mobile App",
      "UX/UI",
      "Service Design"
    ],
    "images": [
      "/projects/iv-van-1.jpg.png"
    ],
    "description": "A mobile app concept connecting van passengers and drivers, with route information, seat booking, and vehicle tracking.",
    "details": [
      {
        "title": "University group project",
        "text": "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project."
      },
      {
        "title": "Project overview",
        "text": "Designed to address unclear van schedules and limited communication between passengers and drivers. The concept helps passengers plan journeys and helps drivers communicate service information."
      },
      {
        "title": "Passenger experience",
        "text": "The proposed experience includes checking routes and service times, booking seats, and viewing vehicle location in real time to reduce uncertainty while waiting."
      },
      {
        "title": "Driver experience",
        "text": "The driver-side concept supports route selection, seat availability, and communication with passengers to make daily service management more convenient."
      },
      {
        "title": "Design approach",
        "text": "The poster explores passenger and driver personas, their pain points, and expected benefits, then presents mobile interface mockups for both groups."
      }
    ],
    "category": "University Group Project"
  },
  "long-tham": {
    "title": "Long Tham",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "images": [
      "/projects/Long Tham.png"
    ],
    "description": "A cooking project with ingredient-based recipes, random meal ideas, and a community for sharing recipes and cooking techniques.",
    "details": [
      {
        "title": "University group project",
        "text": "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project."
      },
      {
        "title": "Problem and audience",
        "text": "Designed for beginners and people who have ingredients but cannot decide what to cook. The project aims to make cooking approachable and reduce waste from unused ingredients."
      },
      {
        "title": "Easy Cook",
        "text": "Users enter available ingredients to find dishes they can prepare, then view ingredients and cooking instructions."
      },
      {
        "title": "Easy Think",
        "text": "Suggests several random dishes when users cannot decide what to eat. They can select a dish or generate another set of suggestions."
      },
      {
        "title": "Easy Share",
        "text": "The sharing flow includes a dish photo, recipe name, ingredients, and preparation steps, allowing people to exchange cooking experiences. The earlier poster also presents saving recipes for later access."
      },
      {
        "title": "Technologies and data structures",
        "text": "The poster lists HTML, CSS and JavaScript. The slides describe using arrays to store dishes for random suggestions and ingredients for recipe searches."
      }
    ],
    "category": "University Group Project"
  },
  "roadside-assistance": {
    "title": "Slide Me",
    "tags": [
      "React",
      "Node.js",
      "MySQL",
      "Prisma",
      "Google Maps API"
    ],
    "images": [
      "/projects/roadside-assistance-1.jpg.png",
      "/projects/roadside-assistance-2.jpg.png"
    ],
    "description": "A roadside and tow-truck service platform connecting customers with drivers, designed around clear provider information and real-time tracking.",
    "details": [
      {
        "title": "University group project",
        "text": "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project."
      },
      {
        "title": "Problem and objective",
        "text": "Slide Me addresses long waits, unclear prices, and difficulty finding reliable tow-truck providers. It brings customer and driver information into one service flow."
      },
      {
        "title": "Customer and driver features",
        "text": "The proposed scope includes requesting a tow truck, viewing vehicle location and estimated arrival time, checking driver contact details, distance and price, and providing ratings and reviews. Drivers can receive jobs and use feedback to improve service."
      },
      {
        "title": "Frontend technologies",
        "text": "React with Vite, Bootstrap and React-Bootstrap for the interface; Axios for API requests; React Router DOM for navigation; Google Maps API for maps; and QRCode.react for QR codes."
      },
      {
        "title": "Backend and data",
        "text": "Node.js and Express provide REST APIs, with Prisma and MySQL for data storage. The slides list JWT authentication, bcrypt password hashing, Zod validation, and Swagger API documentation, alongside an ER diagram and data dictionary."
      }
    ],
    "category": "University Group Project"
  },
  "game-item-marketplace": {
    "title": "Blue Protocol: Star Resonance Item Marketplace",
    "category": "Individual Project",
    "description": "An individual web development project for trading game items, with Discord login, item search, a shopping cart, discount codes, and order administration.",
    "tags": [
      "C#",
      "ASP.NET Core MVC",
      "Razor",
      "Entity Framework Core",
      "Discord OAuth"
    ],
    "images": [
      "/projects/game-item-marketplace-1.jpg.png",
      "/projects/game-item-marketplace-2.jpg.png"
    ],
    "details": [
      {
        "title": "Individual university project",
        "text": "I developed this project individually for CSI402, a course on connecting frontend and backend programs at Sripatum University. The report covers requirements, system design, code, and interface outputs."
      },
      {
        "title": "User roles and access",
        "text": "The system separates Admin, User, and Guest roles. Guests can browse, search, filter, and view item details. Signed-in users can buy and list items and view trading history. The administration area is reserved for admins."
      },
      {
        "title": "Discord sign-in",
        "text": "User login uses Discord OAuth to retrieve a Discord ID and username, store user information in the database, and retain login state through cookies. The report shows a separate admin login flow."
      },
      {
        "title": "Marketplace and item discovery",
        "text": "The marketplace supports keyword searches across item information, category and maximum-price filters, price sorting, and pagination. Item cards lead to individual detail pages."
      },
      {
        "title": "Cart, coupons and checkout",
        "text": "The shopping flow includes item quantities, cart updates and removal, coupon validation, total calculation, and order creation. Checkout presents QR payment, with payment evidence reviewed by an admin."
      },
      {
        "title": "Order administration",
        "text": "Admins can review orders and payment evidence, approve or reject payments, and update order status. The report also describes dashboard summaries and purchase and sales histories."
      },
      {
        "title": "Architecture and technologies",
        "text": "The code examples show C# with ASP.NET Core MVC controllers, Razor views, and Entity Framework Core for database access. Discord OAuth and cookie authentication handle sign-in."
      },
      {
        "title": "System documentation",
        "text": "The report includes use cases, a context diagram, DFD Level 0 and Level 1, flowcharts, and a data dictionary covering users, admins, items, orders, coupons, and cart records."
      }
    ]
  }
};

function ProjectImage({ src, alt }) {
  const { t } = useContext(LanguageContext);
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-6 text-center">
        <p className="text-zinc-300">{t("Project image placeholder")}</p>
        <p className="break-all text-sm text-zinc-500">{t("Add an image at")} public{src}</p>
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} className="aspect-video w-full rounded-2xl border border-zinc-800 bg-zinc-900 object-contain" />;
}

function ProjectDetail({ project }) {
  const { t } = useContext(LanguageContext);
  const heading = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    heading.current?.focus({ preventScroll: true });
    const originalTitle = document.title;
    document.title = project ? t(project.title) + " | CHAMNAN" : t("Project not found") + " | CHAMNAN";
    return () => { document.title = originalTitle; };
  }, [project, t]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="mb-6 flex justify-end"><LanguageSwitcher /></div>
        <a href="#projects" className="inline-flex rounded-lg border border-zinc-700 px-5 py-3 text-sm hover:border-green-400 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">{t("← Back to projects")}</a>
        <p className="mt-12 font-mono text-sm text-green-400">{t(project?.category || "Academic Project")}</p>
        <h1 ref={heading} tabIndex={-1} className="mt-4 text-4xl font-bold tracking-tight outline-none md:text-6xl">
          {(project ? t(project.title) : t("Project not found"))}
        </h1>
        {project && (
          <>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{t(project.description)}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map(tag => <span key={t(tag)} className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">{t(tag)}</span>)}
            </div>
            {project.images.length > 0 && <section className="mt-12" aria-label={t("Project images")}>
              <h2 className="mb-6 text-2xl font-semibold">{t("Project screenshots")}</h2>
              <div className={project.images.length === 1 ? "grid gap-6" : "grid gap-6 md:grid-cols-2"}>
                {project.images.map((src, index) => (
                  <figure key={src}>
                    <ProjectImage src={src} alt={project.title + " — " + t("Image") + " " + (index + 1)} />
                    <figcaption className="mt-3 text-sm text-zinc-500">{project.title} — {t("Image")} {index + 1}</figcaption>
                  </figure>
                ))}
              </div>
            </section>}
            <section className="mt-14 space-y-8 border-t border-zinc-800 pt-10" aria-label={t("Project details")}>
              {project.details.map(detail => (
                <div key={t(detail.title)}>
                  <h2 className="text-xl font-semibold">{t(detail.title)}</h2>
                  <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">{t(detail.text)}</p>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
function Portfolio() {
  const { t } = useContext(LanguageContext);
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (hash === "#projects") {
      document.getElementById("projects")?.scrollIntoView();
    }
  }, [hash]);

  if (hash.startsWith("#/projects/")) {
    const slug = hash.slice("#/projects/".length);
    return <ProjectDetail project={projects[slug]} />;
  }
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-xl font-bold">
            CHAMNAN<span className="text-green-400">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">{t("About")}</a>

            <a href="#skills" className="hover:text-white transition">{t("Skills")}</a>

            <a href="#projects" className="hover:text-white transition">{t("Projects")}</a>

            <a href="#contact" className="hover:text-white transition">{t("Contact")}</a>
          </div>

        </div>
        <div className="max-w-6xl mx-auto px-6 pb-5 flex justify-end"><LanguageSwitcher /></div>
      </nav>


     {/* Hero */}
<section className="max-w-6xl mx-auto px-6 py-32">

  <div className="grid md:grid-cols-[1fr_320px] gap-16 items-center">

    {/* Text */}
    <div className="max-w-4xl">

      <p className="text-green-400 font-mono mb-5">{t("Hello, I'm")}</p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        CHAMNAN
        <br />
        KASEMSAT
      </h2>

      <h3 className="mt-6 text-2xl md:text-3xl text-zinc-400">{t("Computer Science & Innovation Student")}</h3>

      <p className="mt-6 max-w-2xl text-zinc-500 text-lg leading-relaxed">{t("I'm interested in Web Development and Software Development. I enjoy building web applications, solving problems, and learning new technologies.")}</p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
        >{t("View Projects")}</a>

        <a
          href="#contact"
          className="px-6 py-3 border border-zinc-700 rounded-lg font-semibold hover:bg-zinc-900 transition"
        >{t("Contact Me")}</a>

      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800">

        <p className="text-sm text-zinc-500">{t("Currently looking for")}</p>

        <p className="mt-2 text-lg font-medium">{t("IT / Web Development Internship")}</p>

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

          <p className="text-green-400 font-mono text-sm">{t("01 / ABOUT")}</p>

          <h2 className="mt-4 text-4xl font-bold">{t("About Me")}</h2>

          <p className="mt-8 max-w-3xl text-zinc-400 text-lg leading-relaxed">{t("I'm a fourth-year Computer Science student at Sripatum University. I'm interested in software and web application development. I have experience working on academic projects and enjoy learning new technologies through hands-on practice.")}</p>

        </div>
      </section>


     {/* Projects */}
<section
  id="projects"
  className="border-t border-zinc-800"
>
  <div className="max-w-6xl mx-auto px-6 py-24">

    <p className="text-green-400 font-mono text-sm">{t("03 / PROJECTS")}</p>

    <h2 className="mt-4 text-4xl font-bold">{t("Selected Projects")}</h2>

    <p className="mt-5 max-w-3xl leading-relaxed text-zinc-400">{t("A selection of individual and group projects from my studies at Sripatum University. Each project is labeled by type and includes its scope and responsibilities.")}</p>
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {Object.entries(projects).map(([slug, project]) => (
        <article key={slug} className="group flex flex-col border border-zinc-800 rounded-2xl p-8 hover:border-green-400/50 transition">
          <a
            href={"#/projects/" + slug}
            aria-label={t("View Project →") + " " + t(project.title)}
            className="mb-6 block rounded-2xl transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            <ProjectImage
              key={project.images[0]}
              src={project.images[0]}
              alt={t(project.title) + " — " + t("Project screenshots")}
            />
          </a>
          <p className="text-sm text-green-400">{t(project.category)}</p>
          <h3 className="mt-3 text-2xl font-bold">{t(project.title)}</h3>
          <p className="mt-5 text-zinc-400 leading-relaxed">{t(project.description)}</p>
          <div className="mt-6 mb-8 flex flex-wrap gap-2">
            {project.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs bg-zinc-900 rounded-full">{t(tag)}</span>)}
          </div>
          <a href={"#/projects/" + slug} className="self-start mt-auto px-5 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-zinc-200 transition">{t("View Project →")}</a>
        </article>
      ))}

    </div>

  </div>
</section>


      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 font-mono text-sm">{t("04 / CONTACT")}</p>

          <h2 className="mt-4 text-4xl font-bold">{t("Let's Work Together")}</h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg">{t("I'm currently looking for an internship opportunity where I can learn, contribute, and gain real-world development experience.")}</p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent("billzzz394@gmail.com")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
            >{t("Email Me")}</a>

            

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-800">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-sm text-zinc-500">
            © 2026 Chamnan Kasemsat
          </p>

          <p className="text-sm text-zinc-600">{t("Built with React & Tailwind CSS")}</p>

        </div>

      </footer>

    </div>
  )
}


// Edit both language versions here. Personal and project names stay unchanged.
const translations = [
  [
    "About",
    "เกี่ยวกับฉัน"
  ],
  [
    "Skills",
    "ทักษะ"
  ],
  [
    "Projects",
    "โปรเจกต์"
  ],
  [
    "Contact",
    "ติดต่อ"
  ],
  [
    "Hello, I'm",
    "สวัสดีครับ ผมคือ"
  ],
  [
    "Computer Science & Innovation Student",
    "นักศึกษาวิทยาการคอมพิวเตอร์และนวัตกรรม"
  ],
  [
    "I'm interested in Web Development and Software Development. I enjoy building web applications, solving problems, and learning new technologies.",
    "ผมสนใจการพัฒนาเว็บไซต์และซอฟต์แวร์ ชอบสร้างเว็บแอปพลิเคชัน แก้ปัญหา และเรียนรู้เทคโนโลยีใหม่ ๆ"
  ],
  [
    "View Projects",
    "ดูโปรเจกต์"
  ],
  [
    "Contact Me",
    "ติดต่อผม"
  ],
  [
    "Currently looking for",
    "กำลังมองหา"
  ],
  [
    "IT / Web Development Internship",
    "โอกาสฝึกงานด้านไอที / พัฒนาเว็บไซต์"
  ],
  [
    "01 / ABOUT",
    "01 / เกี่ยวกับฉัน"
  ],
  [
    "About Me",
    "เกี่ยวกับฉัน"
  ],
  [
    "I'm a fourth-year Computer Science student at Sripatum University. I'm interested in software and web application development. I have experience working on academic projects and enjoy learning new technologies through hands-on practice.",
    "ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 4 มหาวิทยาลัยศรีปทุม สนใจการพัฒนาซอฟต์แวร์และเว็บแอปพลิเคชัน มีประสบการณ์ทำโปรเจกต์ระหว่างเรียน และชอบเรียนรู้เทคโนโลยีใหม่ ๆ ผ่านการลงมือทำ"
  ],
  [
    "03 / PROJECTS",
    "03 / โปรเจกต์"
  ],
  [
    "Selected Projects",
    "ผลงานที่คัดสรร"
  ],
  [
    "Academic Project",
    "โปรเจกต์ระหว่างเรียน"
  ],
  [
    "ACADEMIC PROJECT",
    "โปรเจกต์ระหว่างเรียน"
  ],
  [
    "A web application for searching and finding available parking spaces.",
    "เว็บแอปพลิเคชันสำหรับค้นหาที่จอดรถและพื้นที่จอดรถที่ว่าง"
  ],
  [
    "An AI-based project focused on sleep-related information and user interaction.",
    "โปรเจกต์ AI เกี่ยวกับข้อมูลการนอนหลับและการโต้ตอบกับผู้ใช้"
  ],
  [
    "A web application for managing used-item buying, pricing, transactions, and reports.",
    "เว็บแอปพลิเคชันสำหรับจัดการการรับซื้อของเก่า ราคา รายการซื้อขาย และรายงาน"
  ],
  [
    "Web Application",
    "เว็บแอปพลิเคชัน"
  ],
  [
    "Database",
    "ฐานข้อมูล"
  ],
  [
    "AI",
    "ปัญญาประดิษฐ์"
  ],
  [
    "View Project →",
    "ดูรายละเอียดโปรเจกต์ →"
  ],
  [
    "04 / CONTACT",
    "04 / ติดต่อ"
  ],
  [
    "Let's Work Together",
    "มาร่วมงานกัน"
  ],
  [
    "I'm currently looking for an internship opportunity where I can learn, contribute, and gain real-world development experience.",
    "ผมกำลังมองหาโอกาสฝึกงาน เพื่อเรียนรู้ ร่วมสร้างผลงาน และเก็บประสบการณ์พัฒนาระบบจากการทำงานจริง"
  ],
  [
    "Email Me",
    "ส่งอีเมลถึงผม"
  ],
  [
    "Built with React & Tailwind CSS",
    "พัฒนาด้วย React และ Tailwind CSS"
  ],
  [
    "Project image placeholder",
    "พื้นที่สำหรับรูปโปรเจกต์"
  ],
  [
    "Add an image at",
    "เพิ่มรูปที่"
  ],
  [
    "← Back to projects",
    "← กลับไปหน้าโปรเจกต์"
  ],
  [
    "Project not found",
    "ไม่พบโปรเจกต์นี้"
  ],
  [
    "Project images",
    "รูปภาพโปรเจกต์"
  ],
  [
    "Project screenshots",
    "ภาพตัวอย่างโปรเจกต์"
  ],
  [
    "Project details",
    "รายละเอียดโปรเจกต์"
  ],
  [
    "Image",
    "ภาพที่"
  ],
  [
    "Project overview",
    "ภาพรวมโปรเจกต์"
  ],
  [
    "My responsibilities",
    "หน้าที่ที่รับผิดชอบ"
  ],
  [
    "What I learned",
    "สิ่งที่ได้เรียนรู้"
  ],
  [
    "A web application for finding parking locations and available parking spaces more conveniently.",
    "เว็บแอปพลิเคชันสำหรับค้นหาพื้นที่จอดรถ ช่วยให้ผู้ใช้งานค้นหาข้อมูลสถานที่จอดรถและพื้นที่จอดรถที่ว่างได้สะดวกขึ้น"
  ],
  [
    "A parking search project that presents information through a web application to help users find suitable parking.",
    "โปรเจกต์ด้านการค้นหาที่จอดรถ โดยนำเสนอข้อมูลผ่านเว็บแอปพลิเคชัน เพื่อช่วยผู้ใช้ค้นหาพื้นที่จอดรถที่ต้องการ"
  ],
  [
    "Add your responsibilities, such as the screens you developed or systems you designed.",
    "เพิ่มรายละเอียดส่วนที่คุณรับผิดชอบในโปรเจกต์นี้ เช่น หน้าจอที่พัฒนา หรือระบบที่ออกแบบ"
  ],
  [
    "Add what you learned, the problems you encountered, and how you solved them.",
    "เพิ่มสิ่งที่ได้เรียนรู้ ปัญหาที่พบ และวิธีแก้ไขจากการทำโปรเจกต์จริง"
  ],
  [
    "A project applying AI to sleep-related information and user interaction through a web application.",
    "โปรเจกต์ที่ประยุกต์ใช้ AI กับข้อมูลเกี่ยวกับการนอนหลับและการโต้ตอบกับผู้ใช้งาน ผ่านเว็บแอปพลิเคชัน"
  ],
  [
    "A project exploring AI in the context of sleep information and user interaction.",
    "โปรเจกต์เพื่อศึกษาการใช้ AI ในบริบทของข้อมูลการนอนหลับและการมีปฏิสัมพันธ์กับผู้ใช้"
  ],
  [
    "Add your responsibilities, including how AI was used in the actual system.",
    "เพิ่มรายละเอียดส่วนที่คุณรับผิดชอบ รวมถึงวิธีนำ AI มาใช้ในระบบจริง"
  ],
  [
    "Add what you learned, limitations you encountered, and possible future improvements.",
    "เพิ่มสิ่งที่ได้เรียนรู้ ข้อจำกัดที่พบ และแนวทางพัฒนาต่อจากโปรเจกต์นี้"
  ],
  [
    "A web application for managing used-item purchasing, prices, transactions, and reports.",
    "เว็บแอปพลิเคชันสำหรับจัดการการรับซื้อของเก่า ครอบคลุมข้อมูลราคา รายการซื้อขาย และรายงาน"
  ],
  [
    "A web-based system for managing used-item purchasing information, prices, transactions, and reports.",
    "ระบบจัดการข้อมูลที่เกี่ยวข้องกับการรับซื้อของเก่า รวมทั้งราคา ธุรกรรม และรายงานในรูปแบบเว็บแอปพลิเคชัน"
  ],
  [
    "Add the work you actually did, such as developing screens, connecting data, or designing the database.",
    "เพิ่มรายละเอียดงานที่คุณทำจริง เช่น การพัฒนาหน้าจอ การเชื่อมต่อข้อมูล หรือการออกแบบฐานข้อมูล"
  ],
  [
    "Add the problems you encountered, your solutions, and the experience you gained.",
    "เพิ่มปัญหาที่พบ วิธีแก้ไข และประสบการณ์ที่ได้รับจากการพัฒนาระบบนี้"
  ],
  [
    "A mobile app concept connecting van passengers and drivers, with route information, seat booking, and vehicle tracking.",
    "แนวคิดแอปพลิเคชันสำหรับผู้โดยสารและคนขับรถตู้ รวมข้อมูลเส้นทาง การจองที่นั่ง และการติดตามรถไว้ในที่เดียว"
  ],
  [
    "Designed to address unclear van schedules and limited communication between passengers and drivers. The concept helps passengers plan journeys and helps drivers communicate service information.",
    "ออกแบบเพื่อแก้ปัญหาตารางเดินรถตู้ที่ไม่ชัดเจนและการติดต่อระหว่างผู้โดยสารกับคนขับที่ไม่สะดวก ช่วยให้ผู้โดยสารวางแผนการเดินทางและคนขับสื่อสารข้อมูลการให้บริการได้ง่ายขึ้น"
  ],
  [
    "Passenger experience",
    "การใช้งานสำหรับผู้โดยสาร"
  ],
  [
    "The proposed experience includes checking routes and service times, booking seats, and viewing vehicle location in real time to reduce uncertainty while waiting.",
    "แนวทางการใช้งานประกอบด้วยการตรวจสอบเส้นทางและเวลาให้บริการ การจองที่นั่ง และการดูตำแหน่งรถแบบเรียลไทม์ เพื่อลดความไม่แน่นอนระหว่างรอรถ"
  ],
  [
    "Driver experience",
    "การใช้งานสำหรับคนขับ"
  ],
  [
    "The driver-side concept supports route selection, seat availability, and communication with passengers to make daily service management more convenient.",
    "แนวคิดฝั่งคนขับรองรับการเลือกเส้นทาง การแสดงที่นั่งว่าง และการติดต่อกับผู้โดยสาร เพื่อให้จัดการการให้บริการในแต่ละวันได้สะดวกขึ้น"
  ],
  [
    "Design approach",
    "แนวทางการออกแบบ"
  ],
  [
    "The poster explores passenger and driver personas, their pain points, and expected benefits, then presents mobile interface mockups for both groups.",
    "โปสเตอร์นำเสนอการวิเคราะห์กลุ่มผู้โดยสารและคนขับผ่าน Persona ปัญหาที่พบ และประโยชน์ที่คาดหวัง พร้อมตัวอย่างหน้าจอแอปสำหรับผู้ใช้งานทั้งสองกลุ่ม"
  ],
  [
    "A cooking project that gathers recipes in one place, helps users find dishes by ingredients, and encourages sharing cooking experiences.",
    "โปรเจกต์ด้านการทำอาหารที่รวบรวมสูตรไว้ในที่เดียว ช่วยค้นหาเมนูจากวัตถุดิบ และเปิดพื้นที่แบ่งปันประสบการณ์การทำอาหาร"
  ],
  [
    "LONG THAM brings food and recipe information together to make discovering dishes and preparing meals easier. The poster presents a community-oriented cooking experience.",
    "LONG THAM รวบรวมข้อมูลอาหารและสูตรอาหาร เพื่อช่วยให้ค้นพบเมนูและเตรียมอาหารได้ง่ายขึ้น โดยนำเสนอแนวทางการใช้งานที่เชื่อมโยงกับชุมชนผู้ชื่นชอบการทำอาหาร"
  ],
  [
    "Key features",
    "ความสามารถหลัก"
  ],
  [
    "The presented features include searching recipes by ingredients, saving recipes for later access, creating new menus, and sharing cooking experiences with the community.",
    "ความสามารถที่นำเสนอ ได้แก่ ค้นหาสูตรจากวัตถุดิบ บันทึกสูตรไว้เปิดดูภายหลัง สร้างสรรค์เมนูใหม่ และแบ่งปันประสบการณ์การทำอาหารกับชุมชน"
  ],
  [
    "Technologies",
    "เทคโนโลยีที่ใช้"
  ],
  [
    "The poster lists HTML, CSS, and JavaScript as the technologies used for the project.",
    "โปสเตอร์ระบุเทคโนโลยีที่ใช้ในโปรเจกต์ ได้แก่ HTML, CSS และ JavaScript"
  ],
  [
    "Expected benefits",
    "ประโยชน์ที่คาดหวัง"
  ],
  [
    "Users can keep recipes organized, discover meal ideas from available ingredients, and learn from other people's cooking experiences.",
    "ผู้ใช้สามารถจัดเก็บสูตรอย่างเป็นระเบียบ ค้นหาไอเดียเมนูจากวัตถุดิบที่มี และเรียนรู้จากประสบการณ์ทำอาหารของผู้อื่น"
  ],
  [
    "Roadside Assistance App",
    "แอปเรียกบริการช่วยเหลือรถเสีย"
  ],
  [
    "An app concept for finding nearby roadside assistance and towing services, with location sharing and service progress tracking.",
    "แนวคิดแอปสำหรับค้นหาผู้ให้บริการช่วยเหลือรถเสียและรถยกใกล้เคียง พร้อมระบุตำแหน่งและติดตามความคืบหน้าการให้บริการ"
  ],
  [
    "The project addresses the difficulty of finding help when a vehicle breaks down. It aims to connect drivers with nearby service providers and improve access to assistance.",
    "โปรเจกต์มุ่งแก้ปัญหาการค้นหาความช่วยเหลือเมื่อรถเสีย โดยเชื่อมต่อผู้ขับขี่กับผู้ให้บริการใกล้เคียง เพื่อให้เข้าถึงบริการได้สะดวกขึ้น"
  ],
  [
    "The proposed system uses location to find nearby providers, supports service requests and status tracking, and includes service history and provider reviews.",
    "ระบบที่นำเสนอใช้ตำแหน่งเพื่อค้นหาผู้ให้บริการใกล้เคียง รองรับการเรียกบริการและติดตามสถานะ รวมถึงประวัติการใช้บริการและการรีวิวผู้ให้บริการ"
  ],
  [
    "Target users",
    "กลุ่มผู้ใช้งาน"
  ],
  [
    "The concept serves drivers who need roadside help and service providers who want to receive requests and manage assistance jobs more conveniently.",
    "รองรับผู้ขับขี่ที่ต้องการความช่วยเหลือระหว่างทาง และผู้ให้บริการที่ต้องการรับคำขอและจัดการงานช่วยเหลือได้สะดวกขึ้น"
  ],
  [
    "Future development",
    "แนวทางพัฒนาต่อ"
  ],
  [
    "The poster proposes broader service coverage and using AI to recommend suitable providers. These are future development ideas.",
    "โปสเตอร์เสนอแนวทางขยายพื้นที่ให้บริการ และใช้ AI ช่วยแนะนำผู้ให้บริการที่เหมาะสม ซึ่งเป็นแนวคิดสำหรับการพัฒนาในอนาคต"
  ],
  [
    "Mobile App",
    "แอปพลิเคชันมือถือ"
  ],
  [
    "Service Design",
    "การออกแบบบริการ"
  ],
  [
    "Location-based Service",
    "บริการอิงตำแหน่ง"
  ],
  [
    "University group project",
    "งานกลุ่มในมหาวิทยาลัย"
  ],
  [
    "Created collaboratively with friends at Sripatum University as part of our coursework. The features described here represent the team project.",
    "ผลงานกลุ่มที่ทำร่วมกับเพื่อนในมหาวิทยาลัยศรีปทุม เป็นส่วนหนึ่งของการเรียน โดยความสามารถที่อธิบายในหน้านี้เป็นภาพรวมของผลงานทีม"
  ],
  [
    "An AI self-care chatbot covering sleep, nutrition, exercise, and general wellness, using a retrieval-based knowledge base.",
    "แชตบอต AI สำหรับความรู้ด้านการดูแลตนเอง ครอบคลุมการนอน โภชนาการ การออกกำลังกาย และสุขภาพทั่วไป โดยใช้ระบบค้นคืนข้อมูลจากฐานความรู้"
  ],
  [
    "Project overview",
    "ภาพรวมโปรเจกต์"
  ],
  [
    "Life span+ is the project previously listed here as Sleep AI. Its poster focuses on sleep knowledge and personalized guidance, while the presentation covers a broader self-care chatbot accessible through a web application.",
    "Life span+ คือโปรเจกต์ที่เดิมแสดงในพอร์ตว่า Sleep AI โปสเตอร์เน้นความรู้และคำแนะนำเกี่ยวกับการนอน ส่วนเอกสารนำเสนอครอบคลุมแชตบอตดูแลสุขภาพเบื้องต้นในรูปแบบเว็บแอปพลิเคชัน"
  ],
  [
    "Knowledge and data preparation",
    "ฐานความรู้และการเตรียมข้อมูล"
  ],
  [
    "The presentation identifies World Bank, WHO, and ThaiHealth as data sources. Topics include sleep, obesity, non-communicable diseases, nutrition, and exercise. Preparation includes duplicate removal, converting bedtime and wake-up strings into datetime values, and creating bed_hour and wake_hour features.",
    "เอกสารระบุแหล่งข้อมูลจาก World Bank, WHO และ สสส. ครอบคลุมการนอน โรคอ้วน โรคไม่ติดต่อ โภชนาการ และการออกกำลังกาย กระบวนการเตรียมข้อมูลมีการลบข้อมูลซ้ำ แปลงเวลาเข้านอนและตื่นนอนเป็น datetime และสร้างตัวแปร bed_hour กับ wake_hour"
  ],
  [
    "RAG workflow",
    "กระบวนการทำงานของ RAG"
  ],
  [
    "Knowledge documents are split into smaller sections, converted into embeddings, and stored in ChromaDB. A question retrieves relevant context, which is passed to the language model to generate a response. The poster shows a Python and LangChain workflow.",
    "แบ่งเอกสารความรู้ออกเป็นส่วนย่อย สร้าง embeddings และจัดเก็บใน ChromaDB เมื่อผู้ใช้ถามคำถาม ระบบจะค้นคืนเนื้อหาที่เกี่ยวข้องเพื่อประกอบคำสั่งให้โมเดลสร้างคำตอบ โดยโปสเตอร์แสดงกระบวนการที่ใช้ Python และ LangChain"
  ],
  [
    "Models used",
    "โมเดลที่ใช้"
  ],
  [
    "The slides specify sentence-transformers/all-MiniLM-L6-v2 for embeddings and Qwen/Qwen2-0.5B-Instruct for response generation, with ChromaDB as the vector database.",
    "สไลด์ระบุการใช้ sentence-transformers/all-MiniLM-L6-v2 สำหรับ embeddings และ Qwen/Qwen2-0.5B-Instruct สำหรับสร้างคำตอบ โดยใช้ ChromaDB เป็นฐานข้อมูลเวกเตอร์"
  ],
  [
    "Scope of advice",
    "ขอบเขตคำแนะนำ"
  ],
  [
    "The project provides basic self-care information. It is not intended to replace medical diagnosis or treatment.",
    "โปรเจกต์มีขอบเขตให้ข้อมูลการดูแลสุขภาพเบื้องต้น ไม่ใช้แทนการวินิจฉัยหรือการรักษาจากแพทย์"
  ],
  [
    "A roadside and tow-truck service platform connecting customers with drivers, designed around clear provider information and real-time tracking.",
    "แพลตฟอร์มเรียกรถสไลด์และบริการช่วยเหลือรถเสีย เชื่อมลูกค้ากับคนขับ โดยออกแบบให้เห็นข้อมูลผู้ให้บริการชัดเจนและติดตามรถได้แบบเรียลไทม์"
  ],
  [
    "Problem and objective",
    "ปัญหาและเป้าหมาย"
  ],
  [
    "Slide Me addresses long waits, unclear prices, and difficulty finding reliable tow-truck providers. It brings customer and driver information into one service flow.",
    "Slide Me มุ่งแก้ปัญหาการรอรถนาน ราคาที่ไม่ชัดเจน และการค้นหาผู้ให้บริการรถสไลด์ที่เชื่อถือได้ โดยรวมข้อมูลลูกค้าและคนขับไว้ในกระบวนการเรียกบริการเดียวกัน"
  ],
  [
    "Customer and driver features",
    "ความสามารถฝั่งลูกค้าและคนขับ"
  ],
  [
    "The proposed scope includes requesting a tow truck, viewing vehicle location and estimated arrival time, checking driver contact details, distance and price, and providing ratings and reviews. Drivers can receive jobs and use feedback to improve service.",
    "ขอบเขตที่นำเสนอประกอบด้วยการเรียกรถสไลด์ ดูตำแหน่งรถและเวลาที่คาดว่าจะมาถึง ตรวจสอบข้อมูลติดต่อคนขับ ระยะทางและราคา รวมถึงให้คะแนนและรีวิว ฝั่งคนขับสามารถรับงานและนำความคิดเห็นไปปรับปรุงบริการ"
  ],
  [
    "Frontend technologies",
    "เทคโนโลยีฝั่งหน้าเว็บ"
  ],
  [
    "React with Vite, Bootstrap and React-Bootstrap for the interface; Axios for API requests; React Router DOM for navigation; Google Maps API for maps; and QRCode.react for QR codes.",
    "ใช้ React ร่วมกับ Vite, Bootstrap และ React-Bootstrap สำหรับหน้าจอ ใช้ Axios ติดต่อ API, React Router DOM จัดการหน้าเว็บ, Google Maps API แสดงแผนที่ และ QRCode.react สร้างคิวอาร์โค้ด"
  ],
  [
    "Backend and data",
    "ระบบหลังบ้านและข้อมูล"
  ],
  [
    "Node.js and Express provide REST APIs, with Prisma and MySQL for data storage. The slides list JWT authentication, bcrypt password hashing, Zod validation, and Swagger API documentation, alongside an ER diagram and data dictionary.",
    "ใช้ Node.js และ Express พัฒนา REST API จัดการข้อมูลด้วย Prisma และ MySQL เอกสารระบุ JWT สำหรับยืนยันตัวตน bcrypt สำหรับแฮชรหัสผ่าน Zod สำหรับตรวจสอบข้อมูล และ Swagger สำหรับเอกสาร API พร้อม ER diagram และพจนานุกรมข้อมูล"
  ],
  [
    "A cooking project with ingredient-based recipes, random meal ideas, and a community for sharing recipes and cooking techniques.",
    "โปรเจกต์ช่วยคิดเมนูจากวัตถุดิบที่มี สุ่มไอเดียอาหาร และแบ่งปันสูตรกับเทคนิคการทำอาหารในชุมชน"
  ],
  [
    "Problem and audience",
    "ปัญหาและกลุ่มผู้ใช้"
  ],
  [
    "Designed for beginners and people who have ingredients but cannot decide what to cook. The project aims to make cooking approachable and reduce waste from unused ingredients.",
    "ออกแบบสำหรับมือใหม่และผู้ที่มีวัตถุดิบแต่คิดเมนูไม่ออก มุ่งช่วยให้เริ่มทำอาหารได้ง่ายขึ้น และลดขยะอาหารจากวัตถุดิบที่เหลือใช้"
  ],
  [
    "Easy Cook",
    "Easy Cook — ค้นหาเมนูจากวัตถุดิบ"
  ],
  [
    "Users enter available ingredients to find dishes they can prepare, then view ingredients and cooking instructions.",
    "ผู้ใช้ระบุวัตถุดิบที่มีเพื่อค้นหาเมนูที่สามารถทำได้ พร้อมดูส่วนผสมและขั้นตอนการทำอาหาร"
  ],
  [
    "Easy Think",
    "Easy Think — สุ่มไอเดียเมนู"
  ],
  [
    "Suggests several random dishes when users cannot decide what to eat. They can select a dish or generate another set of suggestions.",
    "ช่วยสุ่มเมนูหลายรายการเมื่อยังตัดสินใจไม่ได้ว่าจะกินอะไร ผู้ใช้เลือกเมนูที่สนใจหรือสุ่มใหม่ได้"
  ],
  [
    "Easy Share",
    "Easy Share — แบ่งปันสูตรอาหาร"
  ],
  [
    "The sharing flow includes a dish photo, recipe name, ingredients, and preparation steps, allowing people to exchange cooking experiences. The earlier poster also presents saving recipes for later access.",
    "แนวทางการแชร์สูตรประกอบด้วยรูปอาหาร ชื่อเมนู ส่วนผสม และวิธีทำ เพื่อแลกเปลี่ยนประสบการณ์การทำอาหาร โดยโปสเตอร์เดิมยังนำเสนอการบันทึกสูตรไว้ดูภายหลัง"
  ],
  [
    "Technologies and data structures",
    "เทคโนโลยีและโครงสร้างข้อมูล"
  ],
  [
    "The poster lists HTML, CSS and JavaScript. The slides describe using arrays to store dishes for random suggestions and ingredients for recipe searches.",
    "โปสเตอร์ระบุ HTML, CSS และ JavaScript ส่วนสไลด์อธิบายการใช้ Arrays เก็บข้อมูลเมนูสำหรับการสุ่ม และข้อมูลวัตถุดิบสำหรับค้นหาอาหาร"
  ],
  [
    "A recycling-shop management website covering customers, material prices, purchasing transactions, and online reports.",
    "เว็บไซต์บริหารร้านรับซื้อวัสดุรีไซเคิล ครอบคลุมข้อมูลลูกค้า ราคาวัสดุ รายการรับซื้อ และรายงานออนไลน์"
  ],
  [
    "Project objective",
    "เป้าหมายโปรเจกต์"
  ],
  [
    "The team designed Keb Kao to organize purchasing records, reduce paperwork and calculation errors, and let customers check material prices online.",
    "ทีมออกแบบ Keb Kao เพื่อจัดระเบียบข้อมูลการรับซื้อ ลดการใช้เอกสารและความผิดพลาดในการคำนวณ พร้อมให้ลูกค้าตรวจสอบราคาวัสดุผ่านเว็บไซต์"
  ],
  [
    "Members and materials",
    "ระบบสมาชิกและวัสดุ"
  ],
  [
    "The scope includes registration and login with JWT, customer information for shop owners, and creating, editing or deleting recyclable material records with weight and price per kilogram.",
    "ขอบเขตประกอบด้วยการสมัครสมาชิกและเข้าสู่ระบบด้วย JWT การดูข้อมูลลูกค้าสำหรับเจ้าของร้าน และการเพิ่ม แก้ไข หรือลบวัสดุรีไซเคิล พร้อมระบุน้ำหนักและราคาต่อกิโลกรัม"
  ],
  [
    "Transactions and reports",
    "รายการรับซื้อและรายงาน"
  ],
  [
    "Purchase totals are calculated from weight multiplied by unit price. The project includes customer transaction history, daily purchase totals, income and expense reporting, and summaries by material type.",
    "คำนวณยอดรับซื้อจากน้ำหนักคูณราคาต่อหน่วย พร้อมประวัติรายการของลูกค้า ยอดรับซื้อรายวัน รายรับรายจ่าย และสรุปปริมาณกับมูลค่าวัสดุแต่ละประเภท"
  ],
  [
    "Technology stack",
    "เทคโนโลยีของระบบ"
  ],
  [
    "React, CSS and JavaScript on the frontend; Node.js and Express on the backend; MongoDB through Mongoose for data; Swagger for API testing; and Figma / Canva for interface and logo design.",
    "ใช้ React, CSS และ JavaScript ฝั่งหน้าเว็บ Node.js และ Express ฝั่งหลังบ้าน MongoDB ผ่าน Mongoose สำหรับข้อมูล Swagger สำหรับทดสอบ API และ Figma / Canva สำหรับออกแบบหน้าจอและโลโก้"
  ],
  [
    "Expected value",
    "คุณค่าที่คาดหวัง"
  ],
  [
    "More organized and traceable shop records, convenient online price checks, and support for recycling and waste reduction in the community.",
    "ช่วยให้ร้านจัดการข้อมูลเป็นระบบและตรวจสอบย้อนหลังได้ ลูกค้าเช็กราคาได้สะดวก พร้อมสนับสนุนการรีไซเคิลและลดขยะในชุมชน"
  ],
  [
    "A university parking project covering space availability, advance reservations, online payments, vehicle registration, and parking history.",
    "โปรเจกต์ระบบค้นหาลานจอดรถ ครอบคลุมสถานะที่ว่าง การจองล่วงหน้า การชำระเงินออนไลน์ ข้อมูลทะเบียนรถ และประวัติการเข้าจอด"
  ],
  [
    "Problem and objective",
    "ปัญหาและเป้าหมาย"
  ],
  [
    "The CSI202 project aims to reduce time spent circling for parking and improve trip planning through up-to-date availability information and advance reservations.",
    "โปรเจกต์ในรายวิชา CSI202 มุ่งลดเวลาวนหาที่จอดและช่วยวางแผนการเดินทาง ด้วยข้อมูลสถานะที่จอดและการจองล่วงหน้า"
  ],
  [
    "Users and requirements",
    "ผู้ใช้และความต้องการของระบบ"
  ],
  [
    "The requirements distinguish Member and Visitor users. Shared functions include checking availability, payment and parking history, while member functions also include advance booking and adding vehicle registration numbers.",
    "เอกสารแยกผู้ใช้เป็น Member และ Visitor โดยมีการตรวจสอบที่ว่าง ชำระเงิน และดูประวัติการเข้าจอด ส่วนสมาชิกมีความสามารถเพิ่มเติมด้านการจองล่วงหน้าและเพิ่มหมายเลขทะเบียนรถ"
  ],
  [
    "My responsibility",
    "หน้าที่ที่รับผิดชอบ"
  ],
  [
    "I was responsible for the advance parking reservation system, as listed in the team assignment. Other teammates handled online payment, parking history, and vehicle registration.",
    "ผมรับผิดชอบระบบจองลานจอดล่วงหน้าตามการแบ่งงานในเอกสาร ส่วนเพื่อนในทีมรับผิดชอบระบบชำระเงินออนไลน์ ประวัติการเข้าจอด และการเพิ่มหมายเลขทะเบียนรถ"
  ],
  [
    "System analysis and design",
    "การวิเคราะห์และออกแบบระบบ"
  ],
  [
    "The presentation includes member and visitor personas, prioritized user and system requirements, and functional and non-functional requirements, with an emphasis on clear and easy-to-use interfaces.",
    "เอกสารมี Persona ของสมาชิกและผู้เยี่ยมชม การจัดลำดับความสำคัญของความต้องการผู้ใช้และระบบ รวมถึง Functional และ Non-Functional Requirements โดยเน้นหน้าจอที่ชัดเจนและใช้งานง่าย"
  ],
  [
    "Academic Project",
    "งานกลุ่มในมหาวิทยาลัย"
  ],
  [
    "ACADEMIC PROJECT",
    "งานกลุ่มในมหาวิทยาลัย"
  ],
  [
    "All projects below were created with friends at Sripatum University. Each page explains the team project and my responsibility where documented.",
    "ทุกโปรเจกต์ด้านล่างเป็นงานกลุ่มที่ทำร่วมกับเพื่อนในมหาวิทยาลัยศรีปทุม แต่ละหน้ารวบรวมรายละเอียดผลงานของทีม และหน้าที่ของผมในส่วนที่มีข้อมูลระบุไว้"
  ],
  [
    "University Group Project",
    "งานกลุ่มในมหาวิทยาลัย"
  ],
  [
    "Individual Project",
    "โปรเจกต์เดี่ยว"
  ],
  [
    "Blue Protocol: Star Resonance Item Marketplace",
    "เว็บไซต์ซื้อขายไอเท็มเกม Blue Protocol: Star Resonance"
  ],
  [
    "An individual web development project for trading game items, with Discord login, item search, a shopping cart, discount codes, and order administration.",
    "โปรเจกต์เดี่ยวพัฒนาเว็บไซต์ซื้อขายไอเท็มเกม พร้อมล็อกอินด้วย Discord ค้นหาสินค้า ตะกร้า โค้ดส่วนลด และระบบจัดการคำสั่งซื้อ"
  ],
  [
    "Individual university project",
    "โปรเจกต์เดี่ยวในมหาวิทยาลัย"
  ],
  [
    "I developed this project individually for CSI402, a course on connecting frontend and backend programs at Sripatum University. The report covers requirements, system design, code, and interface outputs.",
    "ผมจัดทำโปรเจกต์นี้ด้วยตนเองในรายวิชา CSI402 การเชื่อมต่อโปรแกรมส่วนหน้ากับโปรแกรมส่วนหลัง มหาวิทยาลัยศรีปทุม โดยรายงานครอบคลุมความต้องการระบบ การออกแบบ โค้ด และตัวอย่างหน้าจอ"
  ],
  [
    "User roles and access",
    "บทบาทและสิทธิ์การใช้งาน"
  ],
  [
    "The system separates Admin, User, and Guest roles. Guests can browse, search, filter, and view item details. Signed-in users can buy and list items and view trading history. The administration area is reserved for admins.",
    "ระบบแบ่งสิทธิ์เป็น Admin, User และ Guest ผู้เยี่ยมชมดู ค้นหา กรอง และอ่านรายละเอียดสินค้าได้ ผู้ใช้ที่เข้าสู่ระบบสามารถซื้อ ลงขาย และดูประวัติการซื้อขาย ส่วนหน้าจัดการหลังบ้านสงวนไว้สำหรับผู้ดูแลระบบ"
  ],
  [
    "Discord sign-in",
    "การเข้าสู่ระบบด้วย Discord"
  ],
  [
    "User login uses Discord OAuth to retrieve a Discord ID and username, store user information in the database, and retain login state through cookies. The report shows a separate admin login flow.",
    "ผู้ใช้เข้าสู่ระบบผ่าน Discord OAuth เพื่อรับ Discord ID และชื่อผู้ใช้ บันทึกข้อมูลลงฐานข้อมูล และจดจำสถานะด้วยคุกกี้ โดยรายงานแสดงขั้นตอนเข้าสู่ระบบของผู้ดูแลแยกต่างหาก"
  ],
  [
    "Marketplace and item discovery",
    "ตลาดไอเท็มและการค้นหา"
  ],
  [
    "The marketplace supports keyword searches across item information, category and maximum-price filters, price sorting, and pagination. Item cards lead to individual detail pages.",
    "หน้าตลาดรองรับการค้นหาคำสำคัญจากข้อมูลไอเท็ม กรองหมวดหมู่และราคาสูงสุด เรียงตามราคา และแบ่งหน้า โดยการ์ดสินค้าเชื่อมไปยังหน้ารายละเอียดของแต่ละไอเท็ม"
  ],
  [
    "Cart, coupons and checkout",
    "ตะกร้า โค้ดส่วนลด และการสั่งซื้อ"
  ],
  [
    "The shopping flow includes item quantities, cart updates and removal, coupon validation, total calculation, and order creation. Checkout presents QR payment, with payment evidence reviewed by an admin.",
    "ขั้นตอนซื้อสินค้าครอบคลุมจำนวนไอเท็ม การปรับและลบรายการในตะกร้า ตรวจสอบโค้ดส่วนลด คำนวณยอดรวม และสร้างคำสั่งซื้อ หน้าชำระเงินแสดงคิวอาร์โค้ด โดยผู้ดูแลเป็นผู้ตรวจสอบหลักฐานการชำระเงิน"
  ],
  [
    "Order administration",
    "การจัดการคำสั่งซื้อ"
  ],
  [
    "Admins can review orders and payment evidence, approve or reject payments, and update order status. The report also describes dashboard summaries and purchase and sales histories.",
    "ผู้ดูแลตรวจสอบคำสั่งซื้อและหลักฐานการชำระเงิน อนุมัติหรือปฏิเสธการชำระเงิน และปรับสถานะคำสั่งซื้อได้ รายงานยังอธิบายข้อมูลสรุปบน Dashboard และประวัติการซื้อขาย"
  ],
  [
    "Architecture and technologies",
    "สถาปัตยกรรมและเทคโนโลยี"
  ],
  [
    "The code examples show C# with ASP.NET Core MVC controllers, Razor views, and Entity Framework Core for database access. Discord OAuth and cookie authentication handle sign-in.",
    "ตัวอย่างโค้ดแสดงการใช้ C# กับ ASP.NET Core MVC แบ่งการทำงานผ่าน Controller และ Razor View ใช้ Entity Framework Core ติดต่อฐานข้อมูล พร้อม Discord OAuth และ Cookie Authentication สำหรับเข้าสู่ระบบ"
  ],
  [
    "System documentation",
    "เอกสารวิเคราะห์และออกแบบ"
  ],
  [
    "The report includes use cases, a context diagram, DFD Level 0 and Level 1, flowcharts, and a data dictionary covering users, admins, items, orders, coupons, and cart records.",
    "รายงานประกอบด้วย Use Case, Context Diagram, DFD Level 0 และ Level 1, Flowchart และ Data Dictionary ครอบคลุมผู้ใช้ ผู้ดูแล ไอเท็ม คำสั่งซื้อ คูปอง และข้อมูลตะกร้า"
  ],
  [
    "A selection of individual and group projects from my studies at Sripatum University. Each project is labeled by type and includes its scope and responsibilities.",
    "ผลงานระหว่างเรียนที่มหาวิทยาลัยศรีปทุม ทั้งโปรเจกต์เดี่ยวและงานกลุ่มกับเพื่อน โดยแต่ละโปรเจกต์ระบุประเภท ขอบเขตงาน และหน้าที่ที่รับผิดชอบ"
  ]
];
const dictionaries = {
  en: Object.fromEntries(translations.flatMap(([en, th]) => [[en, en], [th, en]])),
  th: Object.fromEntries(translations.flatMap(([en, th]) => [[en, th], [th, th]])),
};
const translators = {
  en: (text) => dictionaries.en[text] ?? text,
  th: (text) => dictionaries.th[text] ?? text,
};
const LanguageContext = createContext({ language: "th", t: translators.th, setLanguage: () => {} });
function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div role="group" aria-label={language === "th" ? "เลือกภาษา" : "Choose language"} className="inline-flex gap-1 rounded-xl border border-zinc-700 bg-zinc-900 p-1">
      {["th", "en"].map(value => (
        <button key={value} type="button" lang={value}
          aria-label={value === "th" ? "ภาษาไทย" : "English"}
          aria-pressed={language === value} onClick={() => setLanguage(value)}
          className={"rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400 " + (language === value ? "bg-green-400 text-zinc-950" : "text-zinc-300 hover:bg-zinc-800 hover:text-white")}
        >{value.toUpperCase()}</button>
      ))}
    </div>
  );
}
function App() {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem("portfolio-language") === "en" ? "en" : "th"; }
    catch { return "th"; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be unavailable. */ }
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t: translators[language] }}><Portfolio /></LanguageContext.Provider>;
}

export default App
