const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Interested in working together? Let’s talk!</p>
        <p className="mb-2">📧 yousraabid93@gmail.com</p>
        <p>📍 Marrakech, Morocco</p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/yousra-abid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
