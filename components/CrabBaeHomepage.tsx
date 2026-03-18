export default function CrabBaeHomepage() {
  const locations = [
    {
      name: "Crabbae Kenilworth",
      description:
        "Our flagship Crabbae is where it all began. Enjoy the classic Crabbae crabs along with music and hookah. People come for the food and stay for the music and fun.",
      address: "303 South Michigan Avenue, Kenilworth, NJ",
      type: "Brunch • Dinner • Catering",
      image: "https://iili.io/qXheXg1.jpg",
    },
    {
      name: "Crabbae Maplewood",
      description:
        "Bring home large portions of Crabbae's special crab dishes including clusters and crab cakes adorned with savory spices, plus oxtail, wings, and lobster mac.",
      address: "165 Franklin Terrace, Maplewood, NJ",
      type: "Takeout Only",
      image: "https://iili.io/qXhL93J.png",
    },
  ];

  const featuredDishes = [
    {
      name: "Crabbae Special Seafood",
      description: "Loaded seafood platter with signature Crabbae seasoning and bold flavor.",
      price: "$MP",
      image: "https://iili.io/qhUcTMX.png",
    },
    {
      name: "Lobster & Crab Combo",
      description: "Rich lobster and crab combo dripping in savory sauce.",
      price: "$MP",
      image: "https://iili.io/qhUcRFs.png",
    },
    {
      name: "Seafood Boil Tray",
      description: "Full seafood boil with corn, potatoes, and Crabbae spice blend.",
      price: "$MP",
      image: "https://iili.io/qhUcuPn.png",
    },
  ];

  const gallery = [
    "https://iili.io/qhUcTMX.png",
    "https://iili.io/qhUcRFs.png",
    "https://iili.io/qhUcuPn.png",
    "https://iili.io/qhUcTMX.png",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(255,90,31,0.12),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(127,29,29,0.18),_transparent_40%)]" />

      

      <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
          <div className="w-16 md:w-20" />

          <nav className="hidden items-center gap-10 text-base font-semibold tracking-[0.28em] text-white/90 md:flex">
            <a href="#locations" className="transition hover:text-white">LOCATIONS</a>
            <a href="#menu" className="transition hover:text-white">MENU</a>
            <a href="#story" className="transition hover:text-white">ABOUT</a>
            <a href="#contact" className="transition hover:text-white">CONTACT</a>
          </nav>

          <a
            href="https://www.doordash.com/store/crabbae-kenilworth-kenilworth-1497348/2056305/"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-8 py-4 text-sm font-black tracking-[0.12em] text-white shadow-[0_0_30px_rgba(249,115,22,0.45)] transition hover:scale-[1.03]"
          >
            ORDER ONLINE
          </a>
        </div>
      </header>

<section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('https://iili.io/qhN7eg1.jpg')", backgroundPosition: 'center top' }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-24 z-20 flex justify-center md:top-28">
          <img
            src="https://iili.io/qXX9uyb.md.png"
            alt="Crabbae Logo"
            className="h-56 w-auto object-contain md:h-[32rem] lg:h-[36rem]"
          />
        </div>
        
        

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-start px-6 pt-[38rem] pb-16 md:pt-96 md:pb-24">
          <div className="w-full max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-red-400/30 bg-black/35 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-red-200 backdrop-blur">
              Seafood • Pasta • Wings
            </div>

            <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl xl:text-7xl 2xl:text-8xl">
              Big Flavor.
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Big Energy.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg xl:text-xl">
              Crabbae brings bold seafood, unforgettable plates, late-night energy, and a full New Jersey vibe that feels alive the second you land on the page.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.doordash.com/store/crabbae-kenilworth-kenilworth-1497348/2056305/"
                className="rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 text-sm font-bold tracking-[0.18em] text-white shadow-[0_0_40px_rgba(239,68,68,0.45)] transition hover:scale-[1.03]"
              >
                ORDER ONLINE
              </a>
              <a
                href="#locations"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/15"
              >
                VIEW LOCATIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">New Jersey</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Visit Our 2 Locations</h2>
          </div>
          <a href="https://www.doordash.com/store/crabbae-kenilworth-kenilworth-1497348/2056305/" className="hidden text-sm font-bold uppercase tracking-[0.2em] text-white/70 md:block">
            ordercrabbae.com
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-red-300 backdrop-blur">
                    {loc.type}
                  </div>
                  <h3 className="mt-4 text-3xl font-black">{loc.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-lg leading-8 text-white/80">{loc.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="text-sm uppercase tracking-[0.14em] text-white/55">{loc.address}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.doordash.com/store/crabbae-kenilworth-kenilworth-1497348/2056305/"
                      className="rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-bold tracking-wide text-white"
                    >
                      ORDER NOW
                    </a>
                    {loc.name.includes("Kenilworth") && (
                      <a
                        href="https://www.opentable.com/r/crabbae-kenilworth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold tracking-wide text-white backdrop-blur hover:bg-white/20"
                      >
                        RESERVE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">Culinary Delights</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Signature Plates With Real Presence</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredDishes.map((dish) => (
            <div
              key={dish.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black">{dish.name}</h3>
                <p className="mt-3 leading-7 text-white/75">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <img src={image} alt={`Crabbae gallery ${index + 1}`} className="h-64 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <img
              src="https://iili.io/qXho8Pe.png"
              alt="Kashif Jones"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">About Crabbae</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">The Man Behind Crabbae — Kashif Jones</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Meet Kashif Jones, the culinary artist and entrepreneur redefining what it means to be the King of Crab. Forget ordinary steamed shells — his finely cooked and savory seasoned dishes delight, surprise, and exceed expectations.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
              His creations are a testament to creativity, a discerning palate, and a willingness to experiment with flavor across cuisines. Crabbae is built around that same energy: bold, memorable, and impossible to ignore.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-red-500/20 bg-gradient-to-r from-red-950/60 to-orange-950/40 p-6">
              <h3 className="text-2xl font-black text-red-300">Our Team</h3>
              <p className="mt-3 leading-8 text-white/80">
                Our team at Crabbae is made up of experienced chefs and friendly staff dedicated to creating a welcoming environment for every customer. We believe in teamwork and consistency so every dish that leaves the kitchen feels exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(127,29,29,0.8),rgba(0,0,0,0.88),rgba(154,52,18,0.8))] p-10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.25),_transparent_35%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-300">Reserve a Table</p>
              <h2 className="mt-3 text-4xl font-black">Book a Table at Crabbae Kenilworth</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                Come through for the food, the music, and the full Crabbae experience.
              </p>
            </div>
            <a
              href="https://www.opentable.com/r/crabbae-kenilworth"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-sm font-black tracking-[0.2em] text-black transition hover:scale-[1.03] inline-block"
            >
              RESERVE NOW
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">Contact Us</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Drop Us a Line</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Reach out for reservations, catering, event inquiries, or general questions.
            </p>

            <div className="mt-8 space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/45">CRABBAE Kenilworth</p>
                <p className="mt-2 text-lg text-white/85">303 South Michigan Avenue, Kenilworth, NJ</p>
                <p className="text-red-400">Brunch, Dinner, Catering</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-sm uppercase tracking-[0.18em] text-white/45">CRABBAE Maplewood</p>
                <p className="mt-2 text-lg text-white/85">165 Franklin Terrace, Maplewood, NJ</p>
                <p className="text-red-400">Takeout Only</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="grid gap-4">
              <input
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-4 outline-none placeholder:text-white/35 focus:border-red-500"
                placeholder="Name"
              />
              <input
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-4 outline-none placeholder:text-white/35 focus:border-red-500"
                placeholder="Email*"
              />
              <textarea
                className="min-h-[170px] rounded-xl border border-white/10 bg-black/60 px-4 py-4 outline-none placeholder:text-white/35 focus:border-red-500"
                placeholder="Message"
              />
              <button className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-black tracking-[0.15em] text-white shadow-[0_0_30px_rgba(239,68,68,0.35)]">
                SEND
              </button>
              <p className="text-xs leading-6 text-white/40">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-6 text-center">
        <h2 className="text-5xl font-black">
          Ready for
          <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-red-300 bg-clip-text text-transparent">
            Crabbae?
          </span>
        </h2>
        <a
          href="https://www.doordash.com/store/crabbae-kenilworth-kenilworth-1497348/2056305/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-10 py-4 text-sm font-black tracking-[0.22em] text-white shadow-[0_0_40px_rgba(239,68,68,0.45)] transition hover:scale-[1.03]"
        >
          ORDER NOW
        </a>
      </section>
    </div>
  );
}
