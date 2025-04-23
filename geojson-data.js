const placesData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        name: "Four Seasons Resort Chiang Mai",
        description:
          "รีสอร์ทหรูท่ามกลางธรรมชาติและทุ่งนาเขียวขจี มีวิลล่าส่วนตัวและสิ่งอำนวยความสะดวกระดับ 5 ดาว",
        address: "อำเภอแม่ริม จังหวัดเชียงใหม่",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipOLlrWFH7pyB9nkEaxkDPnyw8pVMyzrnWFIIjY=s1360-w1360-h1020",
        region: "ภาคเหนือ",
        rating: 4.9,
      },
      geometry: {
        type: "Point",
        coordinates: [98.9673, 18.8647],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        name: "Mandarin Oriental",
        description:
          "โรงแรมหรูติดริมแม่น้ำเจ้าพระยาที่มีชื่อเสียงระดับโลก มีประวัติยาวนานกว่า 140 ปี",
        address: "เขตบางรัก กรุงเทพมหานคร",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipM198-o6MdWJ6U7rw7ekgz8vCqqecgVOPl4bAO_=s680-w680-h510",
        region: "ภาคกลาง",
        rating: 4.9,
      },
      geometry: {
        type: "Point",
        coordinates: [100.5333, 13.7226],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        name: "Soneva Kiri",
        description:
          "รีสอร์ทหรูบนเกาะกูด มีวิลล่าพร้อมสระว่ายน้ำส่วนตัว และกิจกรรมท่องเที่ยวเชิงอนุรักษ์",
        address: "เกาะกูด จังหวัดตราด",
        image:
          "https://lh3.googleusercontent.com/proxy/elaa7UBkASDix1sU8yKdgQzuoWoE5OmjqWEjW6LlgpMUymvbvjaHUoCsBbuj6BHRWZ27tCuvkJqrcVy0D8qw1gixkDO2dsYFrQXJbaY-zmSJlv3gHgzU2YMfonqd2BSQLCz3DyEsztnY9Rs5PizasrrPAqv-Gw=s680-w680-h510",
        region: "ภาคตะวันออก",
        rating: 4.8,
      },
      geometry: {
        type: "Point",
        coordinates: [102.5669, 11.7214],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 4,
        name: "Amanpuri",
        description:
          "รีสอร์ทหรูริมชายหาดที่สวยงามของภูเก็ต เป็นรีสอร์ทแรกของเครือ Aman ที่มีชื่อเสียงระดับโลก",
        address: "หาดสุรินทร์ จังหวัดภูเก็ต",
        image:
          "https://lh3.googleusercontent.com/proxy/y5Buj7tClS_Dc7Vc9ivdGWxY2Vxu9ebBClwCcs9KjZXroRTRPYBhIl_8yjYLz3INf1ZML6ZL7qxn0AAM0CzPfxr44gFob3I8A9rvOM4DHB5qYRfV2R7j45MDmRq_0qxoosTWoUu9jtuMD5qMUHLQdR1nReywag=s680-w680-h510",
        region: "ภาคใต้",
        rating: 4.9,
      },
      geometry: {
        type: "Point",
        coordinates: [98.2778, 7.9757],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 5,
        name: "Anantara Golden Triangle Elephant Camp & Resort",
        description:
          "รีสอร์ทหรูที่มีศูนย์อนุรักษ์ช้างขึ้นชื่อ ตั้งอยู่บริเวณสามเหลี่ยมทองคำ",
        address: "อำเภอเชียงแสน จังหวัดเชียงราย",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipO0cPJNsP0bE4HWjbgCLf-v2Wr42cfqeJVmBxHj=s680-w680-h510",
        region: "ภาคเหนือ",
        rating: 4.8,
      },
      geometry: {
        type: "Point",
        coordinates: [100.0841, 20.358],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 6,
        name: "Banyan Tree Samui",
        description:
          "รีสอร์ทหรูบนเกาะสมุย มีวิลล่าส่วนตัวพร้อมสระว่ายน้ำทุกหลัง และทิวทัศน์อ่าวลมเลย",
        address: "อำเภอเกาะสมุย จังหวัดสุราษฎร์ธานี",
        image:
          "https://lh3.googleusercontent.com/proxy/Oky_MyD9pBy8_H-LQ1DKiLrysszFQ4M7RSRzFM3PHS-sCux3mLfqhWJng0r3aJYbrq9_Jfr6CV-WNM4cKfcet6Ckh3Y6iDghe-nVQE5PdyRlDAmCIZIP0dqS0RhBONoLfPuPUXZ9fOTjW4ZCmBw9o9YO4NmNV5A=s680-w680-h510",
        region: "ภาคใต้",
        rating: 4.7,
      },
      geometry: {
        type: "Point",
        coordinates: [100.0689, 9.5678],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 7,
        name: "Dhara Dhevi Chiang Mai",
        description:
          "รีสอร์ทหรูในสไตล์ล้านนาที่สวยงามและหรูหราที่สุดแห่งหนึ่งในเชียงใหม่ ออกแบบเหมือนพระราชวังโบราณ",
        address: "อำเภอเมือง จังหวัดเชียงใหม่",
        image:
          "https://pix8.agoda.net/hotelImages/483/48357/48357_14021315090018331909.jpg?ca=2&ce=1&s=1024x",
        region: "ภาคเหนือ",
        rating: 4.7,
      },
      geometry: {
        type: "Point",
        coordinates: [99.0142, 18.7904],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 8,
        name: "The Siam Hotel",
        description:
          "โรงแรมบูติคหรูริมแม่น้ำเจ้าพระยาในกรุงเทพฯ ตกแต่งในสไตล์อาร์ตเดโค นำเสนอวัฒนธรรมไทยผสมผสานกับความหรูหรา",
        address: "เขตดุสิต กรุงเทพมหานคร",
        image:
          "https://lh3.googleusercontent.com/proxy/r9dWGhxKrXPl6_KWf2PhFqAivBlBDyYc-b1Cv3tMoILEd1q9Nuj9HYhB9SeMTvzpFouCkIFw-6gHYxX-lyaJK2eUKx5L0M57143CrtNKEsTdcEmd3uE0981BP08_YQ439Md5VyiLkc-ynMfm19LxsJguUsSGkQ=s680-w680-h510",
        region: "ภาคกลาง",
        rating: 4.8,
      },
      geometry: {
        type: "Point",
        coordinates: [100.4929, 13.7836],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 9,
        name: "Rosewood Bangkok",
        description:
          "โรงแรมหรูระดับโลกใจกลางกรุงเทพฯ ในรูปทรงอาคารแปลกตาที่ได้แรงบันดาลใจจากการไหว้แบบไทย",
        address: "เขตปทุมวัน กรุงเทพมหานคร",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipPo42bapZKRDtKlVzzMwA40DNHRwL8YR9uB6mvp=s680-w680-h510",
        region: "ภาคกลาง",
        rating: 4.8,
      },
      geometry: {
        type: "Point",
        coordinates: [100.5391, 13.7437],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 10,
        name: "InterContinental Pattaya Resort",
        description:
          "รีสอร์ทหรูบนเนินเขาของพัทยา มีวิวทะเลที่สวยงาม และสิ่งอำนวยความสะดวกครบครัน",
        address: "พัทยาใต้ จังหวัดชลบุรี",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNUtMt0oDucrVt_cMYYXdgE4WKi0FJpM339h0bY=s680-w680-h510",
        region: "ภาคตะวันออก",
        rating: 4.6,
      },
      geometry: {
        type: "Point",
        coordinates: [100.8679, 12.9123],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 11,
        name: "Cape Dara Resort",
        description:
          "รีสอร์ทหรูติดชายหาดในพัทยา มีห้องพักวิวทะเลทุกห้อง และดีไซน์สุดทันสมัย",
        address: "พัทยาเหนือ จังหวัดชลบุรี",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNHiItXvtXcPkgqjNohUi1hKH32NTKGMdLoXkeZ=s680-w680-h510",
        region: "ภาคตะวันออก",
        rating: 4.5,
      },
      geometry: {
        type: "Point",
        coordinates: [100.8784, 12.9798],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 12,
        name: "Sri Panwa Phuket",
        description:
          "พูลวิลล่าหรูบนเนินเขาปลายแหลมของภูเก็ต มีวิวทะเล 360 องศา เป็นที่นิยมของคนดังทั่วโลก",
        address: "ตำบลวิชิต จังหวัดภูเก็ต",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipPIYSO8FNPE9KjXy5d7vK5JYbTFJCJM7KHjFcSB=s680-w680-h510",
        region: "ภาคใต้",
        rating: 4.8,
      },
      geometry: {
        type: "Point",
        coordinates: [98.3936, 7.7905],
      },
    },
  ],
};

const luxuryHotels = placesData.features.map((feature) => {
  return {
    id: feature.properties.id,
    name: feature.properties.name,
    description: feature.properties.description,
    address: feature.properties.address,
    image: feature.properties.image,
    region: feature.properties.region,
    rating: feature.properties.rating,
    coordinates: feature.geometry.coordinates,
  };
});
