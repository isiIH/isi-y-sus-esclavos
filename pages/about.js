import Head from "next/head";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Sobre esta página</h1>

        <p className="description">
          Este código está en <code>pages/about.js</code>
        </p>
      </main>

      <footer>
        <a href="https://github.com/isiIH/isi-y-sus-esclavos" target="_blank">
          Repositorio
        </a>
      </footer>
    </div>
  );
};
export default About;
