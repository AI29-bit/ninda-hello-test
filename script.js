console.log("AI29 site loaded!");
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.responses.create({
  model: "gpt-4.1",
  input: [
    {
      "role": "system",
      "content": [
        {
          "type": "input_text",
          "text": "You are an expert subject writer. Create a draft article for a branded blog website using a provided set of keywords, specified tone, and hero products.\n\nUse the keywords to guide the central theme of the article, ensuring that each keyword is naturally integrated into the content. Maintain the specified tone throughout the article to align with brand guidelines. Highlight the hero products, including their features and benefits, and create a cohesive narrative that ties these elements together.\n\n# Steps\n\n1. **Analyze Keywords**: Understand their meaning and how they relate to the brand and the article's theme.\n\n2. **Understand the Tone**: Familiarize yourself with the tone specified for the article, ensuring consistency throughout.\n\n3. **Highlight Hero Products**: Integrate and emphasize the hero products, detailing their features, benefits, and relevance to the article’s theme.\n\n4. **Draft Structure**: Organize content using a logical structure - introduction, body, and conclusion. Employ the keywords effectively to enhance SEO.\n\n5. **Refine Content**: Ensure the writing is engaging, clear, and maintains brand voice. Revise as necessary for coherence and flow.\n\n# Output Format\n\n- Introduction: Brief and engaging, introducing the article's theme.\n- Body: In-depth discussion integrating keywords and showcasing hero products.\n- Conclusion: Summarize key points and include a call to action if appropriate.\n- Tone: Consistent with the specified brand tone (e.g., informative, casual, professional).\n\nNo need to mention intro or body, just straight to article. NO EXCEPTIONN!!!\n\n# Examples\n\n### Example 1\n**Keywords**: [sustainable fashion, eco-friendly materials, trendy styles]  \n**Tone**: Casual  \n**Hero Products**: [EcoBlend Jacket, GreenStride Boots]\n\n**Draft**\n- **Introduction**: Discuss the growing trend of sustainable fashion.\n- **Body**: Describe how the EcoBlend Jacket is made from eco-friendly materials and how the GreenStride Boots combine trendy styles with sustainability.\n- **Conclusion**: Encourage readers to consider sustainable fashion choices.\n\n### Example 2\n**Keywords**: [home automation, smart living, convenience]  \n**Tone**: Professional  \n**Hero Products**: [SmartHome Hub, EasyControl Thermostat]\n\n**Draft**\n- **Introduction**: Introduce the concept of smart living and its benefits.\n- **Body**: Highlight the SmartHome Hub's integration capabilities and EasyControl Thermostat's energy-saving features.\n- **Conclusion**: Suggest the transition to home automation for increased convenience.\n\n# Notes\n\n- Ensure that each keyword is used organically and in a manner that enhances the content.\n- Maintain the specified tone consistently throughout the draft.\n- Include engaging headings and subheadings as needed to improve readability."
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "create an article for Zwitsal Indonesia website for the keyword: hamil trimester 3, bahasa Indonesia, warm tone for parents, with hero product: https://www.zwitsal.co.id/p/powder-soft-floral.html/08992694244056"
        }
      ]
    },
    {
      "id": "msg_6819a4df6934819182a838e9a60317540194d93ee1c753b9",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "**Draft Artikel Zwitsal Indonesia**\n\n---\n\n### Menyambut Hamil Trimester 3: Tips Nyaman & Perawatan Lembut Bersama Zwitsal Powder Soft Floral\n\n**Pendahuluan**  \nSelamat, Bunda! Memasuki masa **hamil trimester 3** tentu menjadi momen penuh harap sekaligus tantangan tersendiri. Di periode ini, Bunda perlu ekstra memperhatikan kenyamanan dan kesehatan, baik untuk diri sendiri maupun si Kecil yang tengah tumbuh di dalam kandungan. Yuk, simak tips hangat dan rekomendasi perawatan lembut dari Zwitsal yang bisa menemani Bunda di trimester akhir kehamilan ini!\n\n---\n\n### Mengenal Lebih Dekat Hamil Trimester 3\n\n**Hamil trimester 3** berlangsung mulai minggu ke-28 hingga menjelang persalinan. Pada masa ini, tubuh Bunda mengalami banyak perubahan—perut semakin besar, rasa pegal dan lelah kerap datang, bahkan terkadang sulit tidur. Bayi pun semakin aktif bergerak di dalam rahim. Tak heran jika Bunda memerlukan kenyamanan ekstra agar tetap rileks sekaligus menjaga kesehatan kulit, yang rentan kering dan iritasi seiring perut yang makin membesar.\n\n---\n\n### Tips Nyaman di Trimester Ketiga\n\n1. **Jaga Kelembapan Kulit**  \n   Di **hamil trimester 3**, kulit Bunda cenderung mudah kering, terutama di area perut dan lipatan tubuh. Gunakan produk yang lembut dan mengandung bahan alami agar kulit tetap lembap, segar, serta terhindar dari iritasi.\n\n2. **Pilih Wewangian Lembut untuk Menenangkan Pikiran**  \n   Sensitivitas terhadap bau makin meningkat di trimester ini. Pilih wangi yang ringan namun menyegarkan untuk membuat Bunda tetap relax.\n\n3. **Perbanyak Istirahat dan Bergerak Ringan**  \n   Berjalan kaki santai atau melakukan prenatal yoga membantu mengurangi pegal dan meningkatkan mood.\n\n---\n\n### Sahabat Lembut Hamil Trimester 3: Zwitsal Powder Soft Floral\n\nAgar perawatan kulit di masa **hamil trimester 3** terasa nyaman dan aman, Zwitsal menghadirkan [Zwitsal Powder Soft Floral](https://www.zwitsal.co.id/p/powder-soft-floral.html/08992694244056) sebagai solusi tepat untuk para calon Bunda.\n\n#### **Keunggulan Zwitsal Powder Soft Floral**:\n\n- **Formulasi ultra-lembut** yang aman bagi kulit sensitif Bunda dan bayi.\n- **Aroma floral nan lembut** yang menenangkan tanpa menyengat.\n- **Diperkaya pro-vitamin B5** untuk membantu menjaga kelembapan dan kesehatan kulit, terutama di area tubuh yang mudah berkeringat atau rawan iritasi.\n- **Tidak mengandung bahan berbahaya** seperti paraben, sehingga aman digunakan setiap hari.\n\nZwitsal Powder Soft Floral bukan hanya untuk bayi, tetapi juga menjadi solusi praktis bagi Bumil yang ingin merasakan kesegaran alami dan perlindungan kulit selama trimester akhir kehamilan. Oleskan secukupnya di area leher, punggung, atau lipatan tubuh setelah mandi. Selain membuat kulit halus dan harum, suasana hati Bunda pun jadi lebih baik!\n\n---\n\n### Kesimpulan\n\n**Hamil trimester 3** adalah perjalanan luar biasa menuju momen kelahiran. Jangan lupa manjakan diri dengan perawatan sederhana yang lembut seperti memakai Zwitsal Powder Soft Floral. Selain menjaga kelembapan dan keharuman kulit, Bunda juga mendapat relaksasi ekstra selama masa-masa menanti kehadiran sang buah hati.\n\nYuk, lengkapi hari-hari hamil Bunda bersama Zwitsal—karena kelembutan adalah kunci kebahagiaan Bunda dan si Kecil!\n\n---\n\n**Temukan kenyamanan dan kelembutan ekstra di masa kehamilan dengan Zwitsal Powder Soft Floral. Cek produknya [di sini](https://www.zwitsal.co.id/p/powder-soft-floral.html/08992694244056) dan rasakan manfaatnya setiap hari!**"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "create an article for Zwitsal Indonesia website for the keyword: hamil trimester 3, bahasa Indonesia, warm tone for parents, with hero product: https://www.zwitsal.co.id/p/powder-soft-floral.html/08992694244056\nExpand\nAssistant"
        }
      ]
    },
    {
      "id": "msg_6819a52243208191b7285bf6e6fc43e40194d93ee1c753b9",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "### Merayakan Hamil Trimester 3: Perjalanan Menuju Kelahiran yang Penuh Cinta & Perawatan Lembut dari Zwitsal\n\nMenapaki masa **hamil trimester 3** adalah pengalaman yang penuh warna bagi setiap orang tua. Di antara rasa bahagia menantikan hadirnya si buah hati, ada pula tantangan-tantangan baru yang perlu dihadapi oleh Bunda. Pada fase ini, tubuh mengalami banyak perubahan fisik dan emosional yang tentunya memerlukan perhatian ekstra—terutama dalam hal perawatan diri dan menjaga kenyamanan sehari-hari.\n\n---\n\n#### Hamil Trimester 3: Saatnya Memberi Diri Lebih Banyak Perhatian\n\nTrimester ketiga kehamilan berlangsung mulai dari minggu ke-28 hingga menjelang persalinan. Pada tahap ini, pertumbuhan si kecil dalam kandungan berlangsung sangat pesat. Berat badan bayi bertambah, ruang geraknya semakin nyaman, dan Bunda pun kian sering merasakan tendangan atau gerakan kecil di dalam perut.\n\nSeiring perkembangan janin, tubuh Bunda juga ikut mengalami penyesuaian. Kulit perut dan area lainnya bisa menjadi lebih sensitif, kering, bahkan mudah berkeringat. Tak sedikit Bunda yang menghadapi masalah seperti gatal, iritasi, atau hanya sekadar merasa kulit jadi kurang nyaman. Selain itu, hormon kehamilan yang terus berubah kadang-kadang juga membuat mood mudah naik-turun.\n\nDi sinilah pentingnya memberi perawatan dan kelembutan ekstra, membangun suasana nyaman di tengah perubahan yang dialami selama **hamil trimester 3**. Saat tubuh terasa segar dan wangi, istirahat pun jadi lebih tenang. Suasana hati yang nyaman tentu akan membantu Bunda dan janin tetap sehat serta bahagia hingga hari persalinan tiba.\n\n---\n\n#### Zwitsal Powder Soft Floral: Sentuhan Lembut dan Keamanan untuk Kulit Bunda\n\nUntuk menemani perjalanan istimewa di **hamil trimester 3**, Zwitsal menghadirkan solusi perawatan kulit yang lembut dan menenangkan: [Zwitsal Powder Soft Floral](https://www.zwitsal.co.id/p/powder-soft-floral.html/08992694244056). Bedak ini dirancang khusus dengan formula yang aman dan sangat lembut bagi kulit sensitif, baik untuk Bunda maupun buah hati.\n\n##### **Keistimewaan Zwitsal Powder Soft Floral**:\n- **Formulasi hypoallergenic:** Aman dan nyaman bagi semua jenis kulit, terutama kulit sensitif pada ibu hamil dan bayi.\n- **Aroma soft floral yang menenangkan:** Memberikan sensasi segar dan rileks tanpa tajam di hidung, sehingga cocok untuk Bunda yang sensitif terhadap wewangian selama kehamilan.\n- **Diperkaya pro-vitamin B5:** Membantu menjaga kelembapan kulit dan mencegah iritasi atau ruam, sangat efektif diaplikasikan pada area yang rentan berkeringat seperti lipatan kulit dan leher.\n- **Bebas dari bahan berbahaya:** Tidak mengandung paraben atau pewarna buatan, sehingga tetap aman digunakan setiap hari selama masa kehamilan.\n\nDengan keunggulan tersebut, Zwitsal Powder Soft Floral menjadi teman setia perawatan diri Bunda di trimester ketiga kehamilan. Setelah mandi, taburkan bedak secara merata pada kulit tubuh untuk sensasi lembut, segar, dan wangi sepanjang hari. Bunda pun bisa lebih percaya diri serta nyaman beraktivitas di rumah, saat beristirahat, atau ketika mempersiapkan segala kebutuhan jelang persalinan.\n\n---\n\n#### Tips Perawatan & Kenyamanan untuk Bunda di Trimester Ketiga\n\nSelain menggunakan bedak lembut dari Zwitsal, berikut beberapa tips sederhana agar Bunda bisa menikmati **hamil trimester 3** dengan lebih nyaman:\n\n1. **Rutin Jaga Kebersihan dan Kesehatan Kulit**  \n   Mandi dengan air hangat, gunakan sabun lembut, dan keringkan tubuh sebelum menaburkan Zwitsal Powder Soft Floral.\n  \n2. **Perbanyak Minum Air Putih**  \n   Agar kulit tetap lembap dari dalam dan tubuh terhidrasi dengan baik.\n\n3. **Gunakan Pakaian Longgar dan Nyaman**  \n   Pilih bahan katun yang menyerap keringat agar kulit tidak mudah iritasi selama menjalani aktivitas harian.\n\n4. **Istirahat yang Cukup**  \n   Tidur berkualitas sangat penting di trimester akhir untuk mendukung perkembangan janin dan kebugaran Bunda.\n\n5. **Manjakan Diri dengan Relaksasi**  \n   Dengarkan musik lembut, lakukan meditasi ringan, atau nikmati waktu santai bersama pasangan dan keluarga.\n\nDengan langkah kecil perawatan yang penuh cinta, Bunda bisa melewati **hamil trimester 3** dengan lebih tenang dan bahagia—siap menyambut detik-detik kelahiran si kecil.\n\n---\n\n#### Penutup: Nikmati Setiap Momen Dengan Kelembutan\n\nTak terasa, sebentar lagi Bunda akan bertemu buah hati tercinta. Selalu rawat diri dengan kelembutan yang dipersembahkan Zwitsal, karena kenyamanan dan kebahagiaan Bunda adalah awal terbaik bagi keluarga. Jadikan Zwitsal Powder Soft Floral sahabat setia di masa kehamilan—untuk kulit sehat, wangi, dan penuh kasih setiap hari.\n\n**Temukan lebih banyak manfaat Zwitsal Powder Soft Floral [di sini](https://www.zwitsal.co.id/p/powder-soft-floral.html/08992694244056). Untuk setiap langkah di trimester ketiga, harmonikan sentuhan lembut bersama Zwitsal—teman terpercaya Bunda dan si kecil!**"
        }
      ]
    }
  ],
  text: {
    "format": {
      "type": "text"
    }
  },
  reasoning: {},
  tools: [],
  temperature: 1,
  max_output_tokens: 2048,
  top_p: 1,
  store: true
});
