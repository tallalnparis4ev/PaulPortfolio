export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f0ead6]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div
          className="bg-[#fff] p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          style={{ fontFamily: "Courier, monospace" }}
        >
          <p className="mb-4">&gt; Hello, World!</p>
          <p className="mb-4">
            &gt; I worked with Jeff Bezos before he founded Amazon at one of the
            world's first algo trading companies!
          </p>

          <p className="mb-4">
            &gt; I have over 30 years in engineering and I am passionate about
            solving problems.
          </p>
        </div>
      </div>
    </section>
  );
}
