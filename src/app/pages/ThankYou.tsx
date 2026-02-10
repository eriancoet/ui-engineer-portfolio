import { Link } from "react-router";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl sm:text-5xl mb-4">Thank you! 🙌</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your message has been sent successfully. I’ll get back to you soon.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
