import imgJuliusomoPng from "./src/assets/images/avatars/image-juliusomo.png"
import imgJuliusomoWebp from "./src/assets/images/avatars/image-juliusomo.webp"
import imgAmyrobsonPng from "./src/assets/images/avatars/image-amyrobson.png"
import imgAmyrobsonWebp from "./src/assets/images/avatars/image-amyrobson.webp"
import imgMaxblagunPng from "./src/assets/images/avatars/image-maxblagun.png"
import imgMaxblagunWebp from "./src/assets/images/avatars/image-maxblagun.webp"
import imgRamsesmironPng from "./src/assets/images/avatars/image-ramsesmiron.png"
import imgRamsesmironWebp from "./src/assets/images/avatars/image-ramsesmiron.webp"

export const COMMENTS_DATA = {
  "currentUser": {
    "image": {
      "png": imgJuliusomoPng,
      "webp": imgJuliusomoWebp
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1680121435774,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": {
          "png": imgAmyrobsonPng,
          "webp": imgAmyrobsonWebp
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 1680121441139,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": {
          "png": imgMaxblagunPng,
          "webp": imgMaxblagunWebp
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 1680121442557,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": {
              "png": imgRamsesmironPng,
              "webp": imgRamsesmironWebp
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 1680121443738,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": {
              "png": imgJuliusomoPng,
              "webp": imgJuliusomoWebp
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}