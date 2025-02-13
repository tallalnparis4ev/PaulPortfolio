export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f0ead6]">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="bg-[#fff] p-6 rounded-lg shadow-md border-2 border-[#333]">
          <div className="bg-[#333] text-[#f0ead6] p-2 mb-4">New Message</div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-[#333]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-[#333]" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message:
              </label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border border-[#333]"></textarea>
            </div>
            <button type="submit" className="bg-[#333] text-[#f0ead6] px-4 py-2 rounded hover:bg-[#555]">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

