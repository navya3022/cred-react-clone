import { motion } from "framer-motion"

const features = [
  {
    title: "UPI Payments",
    description: "Instant secure UPI transfers with premium rewards.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },

  {
    title: "CRED Coins",
    description: "Earn coins on every payment and unlock experiences.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
  },

  {
    title: "Cashback Rewards",
    description: "Get exclusive cashback directly into your account.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
  },

  {
    title: "Credit Score",
    description: "Track and improve your financial health smartly.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },

  {
    title: "Smart Payments",
    description: "Manage all your cards and payments seamlessly.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },

  {
    title: "Premium Security",
    description: "Industry-grade encryption with advanced protection.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
]

function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-black text-center mb-20"
        >
          premium fintech features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15, scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {feature.description}
                </p>

                <button className="mt-6 bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-110 transition duration-300">
                  Explore
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.section>
  )
}

export default Features