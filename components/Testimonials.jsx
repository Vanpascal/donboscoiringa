import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Former Student",
      message:
        "Don Bosco Iringa changed my life. The skills I learned helped me build a successful career in solar energy.",
      image: "/images/testimonials/rector.jpg",
    },
    {
      name: "Jane Smith",
      role: "Parent",
      message:
        "My son gained invaluable life skills and a brighter future through the training programs at Don Bosco.",
      image: "/images/testimonials/rector.jpg",
    },
    {
      name: "Michael Brown",
      role: "Community Leader",
      message:
        "The impact of Don Bosco Iringa on the community is unparalleled. Their commitment to youth empowerment is inspiring.",
      image: "/images/testimonials/rector.jpg",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-2xl font-bold text-purple-900 mb-10">
          What people say about us
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-md">
                {/* Testimonial Image */}
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                />

                {/* Testimonial Text */}
                <div className="text-left">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "{testimonial.message}"
                  </p>
                  <h4 className="text-xl font-semibold text-purple-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-black">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
