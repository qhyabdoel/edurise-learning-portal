import { NextResponse } from "next/server";

const courses = [
  {
    id: 1,
    name: "Full Stack JavaScript / Node.js",
    category: "Programming",
    progress: 30,
    progressText: "3. Pengenalan algoritma"
  },
  {
    id: 2,
    name: "Android Mobile Programming",
    category: "Programming",
    progress: 0,
    progressText: "1. Pengenalan android studio"
  },
  {
    id: 3,
    name: "Digital Marketing",
    category: "Marketing",
    progress: 75,
    progressText: "5. Teknik Membuat Iklan"
  },
  {
    id: 4,
    name: "Teknik Animasi 2D & 3D",
    category: "Multimedia",
    progress: 100,
    progressText: "12. Texturing 3D"
  }
]

export async function GET() {
  const data = {
    stats: {
      "total": 340,
      "acrive": 3,
      "done": 337
    },
    "data": {
      "mine": [
        {
          "name": "Full Stack JavaScript / Node.js",
          "category": "Programming",
          "progress": 30,
          "progressText": "3. Pengenalan algoritma"
        },
        {
          "name": "Android Mobile Programming",
          "category": "Programming",
          "progress": 0,
          "progressText": "1. Pengenalan android studio"
        },
        {
          "name": "Digital Marketing",
          "category": "Marketing",
          "progress": 75,
          "progressText": "5. Teknik Membuat Iklan"
        }
      ],
      recommendation: [
        {
          "name": "Full Stack JavaScript / Node.js",
          "category": "Programming",
          "progress": 30,
          "progressText": "3. Pengenalan algoritma"
        },
        {
          "name": "Android Mobile Programming",
          "category": "Programming",
          "progress": 0,
          "progressText": "1. Pengenalan android studio"
        },
        {
          "name": "Digital Marketing",
          "category": "Marketing",
          "progress": 75,
          "progressText": "5. Teknik Membuat Iklan"
        },
        {
          "name": "Teknik Animasi 2D & 3D",
          "category": "Multimedia",
          "progress": 100,
          "progressText": "12. Texturing 3D"
        }
      ]
    }
  }

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json({ data: data }, { status: 200 });
}