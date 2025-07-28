import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Kim",
    role: "Bride",
    content:
      "AFLOWER made our wedding day absolutely magical. The arrangements were beyond our dreams, and the team was so professional and caring. Every detail was perfect!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Park",
    role: "Regular Customer",
    content:
      "I order from AFLOWER every month for my wife, and they never disappoint. The flowers are always fresh, beautifully arranged, and delivered on time.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Event Planner",
    content:
      "As an event planner, I work with many florists, but AFLOWER stands out. Their creativity, reliability, and attention to detail make them my go-to choice.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dont just take our word for it. Her what our valued customers have to say about their AFLOWER experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-rose-300 mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
