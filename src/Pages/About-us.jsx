import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 m-0 p-0 text-gray-800">
     
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          We are passionate about delivering fresh fruits and healthy food
          choices straight to your doorstep. Quality and customer satisfaction
          are at the heart of everything we do.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Our Mission</h2>
          <p>
            To make healthy and fresh fruits accessible to everyone while
            supporting local farmers and promoting sustainability.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Our Vision</h2>
          <p>
            To become the most trusted online fruit marketplace, creating a
            healthier lifestyle for our community and a better future for our
            planet.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team Member"
              className="w-28 h-28 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team Member"
              className="w-28 h-28 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Marketing Head</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Team Member"
              className="w-28 h-28 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Mike Johnson</h3>
            <p className="text-gray-500">Operations Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
