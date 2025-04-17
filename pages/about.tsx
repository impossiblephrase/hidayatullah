import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-100">
     <section className="py-32 -mt-16 bg-gradient-to-b from-[#030014] to-blue-800">
        <div className="container mx-auto bg- px-6 text-center">
          <p className="text-2xl font-serif font-bold text-gray-300">
            “We are on a mission to help businesses harness the power of AI to streamline processes, boost productivity, and create smarter, more scalable solutions.”
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Who We Are Section */}
        <section className="mb-32">
          <h1 className="text-4xl font-bold text-center text-blue-600">Who We Are</h1>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Nexus AI is a forward-thinking tech startup based in Indonesia, specializing in artificial intelligence (AI) solutions tailored to solve real-world business challenges. Since our inception, we’ve been on a mission to empower businesses to leverage AI and transform how they operate, unlocking new levels of efficiency, innovation, and growth.
          </p>
          <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Our expertise spans various domains of AI, including machine learning, natural language processing (NLP), computer vision, and data analytics. We work with clients across industries, helping them integrate AI into their operations to enhance decision-making, automate tasks, and deliver more personalized customer experiences.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-blue-600">Our Story</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto">
            Nexus AI was founded in 2020 by Adi Nugroho, a passionate computer scientist who saw the transformative potential of AI in Indonesia and beyond. Adi’s vision was to create a company that could bridge the gap between cutting-edge AI technology and practical business applications.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            What began as a small team of AI enthusiasts in a shared co-working space in Jakarta has grown into a dynamic startup with a diverse team of data scientists, engineers, and strategists. Nexus AI has rapidly expanded its offerings, working with businesses ranging from startups to large enterprises, both locally and internationally.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Our journey has been marked by constant innovation, learning, and adaptation. In just a few years, we’ve developed AI-powered products that streamline business processes, improve customer insights, and enable smarter decision-making. As we grow, our commitment remains the same: to provide intelligent solutions that drive tangible results for our clients.
          </p>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center text-blue-600">Our Vision</h2>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-4xl mx-auto">
            Our vision is to become a leader in AI-driven solutions across Southeast Asia, enabling businesses to fully embrace the potential of AI for sustainable and scalable growth.
          </p>
          <h2 className="text-3xl font-bold text-center text-blue-600 mt-12">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At Nexus AI, our mission is simple: to deliver accessible and impactful AI solutions that help businesses thrive in an increasingly digital world. We strive to demystify AI, making it approachable and usable for businesses of all sizes, from startups to large enterprises. By building smart, scalable systems, we aim to create solutions that not only solve current challenges but also future-proof businesses for the evolving technological landscape.
          </p>
        </section>

        {/* Meet Our Team Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center text-blue-600">Meet Our Team</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Adi Nugroho – Founder & CEO</h3>
              <p className="mt-4 text-gray-700">
                Adi founded Nexus AI with the goal of helping Indonesian businesses harness the power of AI. With a background in computer science and years of experience in AI development, Adi is a recognized leader in the field of AI and digital transformation.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Kartika Sari – Chief Technology Officer (CTO)</h3>
              <p className="mt-4 text-gray-700">
                Kartika leads the development and innovation efforts at Nexus AI. She holds a Master’s in Artificial Intelligence from ITB and has extensive experience in machine learning and deep learning technologies. Under her guidance, Nexus AI has developed AI systems that solve complex business challenges.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Budi Santoso – Chief Data Scientist</h3>
              <p className="mt-4 text-gray-700">
                Budi oversees all data-related operations, ensuring that Nexus AI’s solutions are built on robust, insightful data analysis. His expertise in predictive analytics helps businesses turn raw data into actionable insights.
              </p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Rina Wijaya – Head of AI Consulting</h3>
              <p className="mt-4 text-gray-700">
                Rina is responsible for guiding clients through the digital transformation process, helping them integrate AI technologies seamlessly into their operations. Her experience in technology consulting makes her an invaluable asset to our team.
              </p>
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center text-blue-600">Our Culture</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto">
            At Nexus AI, we believe in fostering a work culture that is collaborative, innovative, and inclusive. We encourage every member of our team to challenge conventional thinking and approach problems with a fresh perspective. Our culture thrives on curiosity and continuous learning, ensuring that we stay at the cutting edge of AI technology.
          </p>
          <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-gray-700 mt-2">
                We are committed to pushing the boundaries of what’s possible with AI. Every member of our team is encouraged to explore new ideas, test new technologies, and bring creative solutions to the table.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-gray-700 mt-2">
                We believe that great ideas come from working together. We foster an environment where everyone’s voice is heard, and diverse perspectives are valued. This collaborative spirit allows us to solve problems more effectively and deliver better solutions for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Growth and Learning</h3>
              <p className="text-gray-700 mt-2">
                The field of AI is constantly evolving, and so are we. We invest heavily in the continuous development of our team through workshops, training, and knowledge-sharing sessions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Diversity and Inclusion</h3>
              <p className="text-gray-700 mt-2">
                Nexus AI is proud to be a diverse team. We believe that different backgrounds and perspectives are essential to creativity and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center text-blue-600">Why Choose Nexus AI?</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto">
            Expertise and Experience: Our team has deep expertise in AI technologies, backed by years of experience in implementing successful AI solutions across multiple industries.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Client-Centric Approach: We believe in building solutions around our clients’ specific needs, ensuring that each AI system we develop is tailored to their business goals and challenges.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Innovative Solutions: At Nexus AI, we don’t just follow trends; we set them. Our team constantly innovates to create AI solutions that are ahead of the curve, ensuring that our clients stay competitive in a rapidly changing market.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Proven Results: From automating workflows to improving customer experience through predictive analytics, our solutions deliver measurable results. We help businesses optimize their operations, reduce costs, and achieve scalable growth.
          </p>
        </section>

        {/* Our Commitment Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center text-blue-600">Our Commitment to the Future</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto">
            As we move forward, Nexus AI is committed to staying at the forefront of AI innovation. We believe that AI will continue to transform industries and change the way we live and work, and we are excited to be a part of that journey. Our focus will remain on creating solutions that are both cutting-edge and practical, designed to make a real impact on businesses and society.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            We invite you to join us as we continue to push the boundaries of AI and build a smarter, more connected future for businesses everywhere.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
