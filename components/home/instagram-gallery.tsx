import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    likes: 234,
    caption: "Fresh pink roses for a special someone 💕",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    likes: 189,
    caption: "Behind the scenes of a dreamy wedding bouquet ✨",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    likes: 156,
    caption: "Spring has arrived! 🌸 Fresh seasonal blooms",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    likes: 298,
    caption: "The art of flower arranging 🎨",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    likes: 167,
    caption: "Sunshine in a bouquet ☀️ #sunflowers",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    likes: 203,
    caption: "Elegant white lilies for pure sophistication 🤍",
  },
];

export function InstagramGallery() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-rose-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Follow Our Journey</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get daily inspiration and behind-the-scenes glimpses of our floral creations. Follow @aflower_seoul for the
            latest blooms and seasonal specials.
          </p>
          <Button variant="outline" className="btn-secondary bg-transparent">
            <Instagram className="w-4 h-4 mr-2" />
            Follow @aflower_seoul
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <Instagram className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{post.likes} likes</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Tag us in your photos with <span className="font-semibold text-rose-600">#AFLOWERmoments</span> for a chance
            to be featured!
          </p>
        </div>
      </div>
    </section>
  );
}
