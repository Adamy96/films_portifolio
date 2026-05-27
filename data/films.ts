
export interface Film {
  slug: string;
  title: string;
  year: string;
  category: string;
  previewVideoId?: string;
  /** Optional full URL preview (used when preview is not a YouTube id, e.g. Cloudinary). */
  previewVideoUrl?: string;
  fullVideoUrl?: string;
  fullVideoType?: 'youtube' | 'vimeo' | 'cloudinary';
  posterUrl: string;
  logline: string;
  synopsis: string;
  /** Main credits shown right under the title (Director, DOP, etc). */
  credits: { role: string; name: string }[];
  /** Optional full technical sheet shown below the gallery. Hidden if absent. */
  fullCredits?: { role: string; name: string }[];
  /** Optional gallery of stills. Hidden if absent or empty. */
  stills?: string[];
  awards?: string[];
}

export const films: Film[] = [
  {
    slug: "amstel",
    title: "AMSTEL",
    year: "2024",
    category: "narrative",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777518361/PREVIEW_RETALHOS_V2_oc59pr.mov",
    fullVideoUrl: "https://www.youtube.com/embed/-kxcAdKU6Rk",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/-kxcAdKU6Rk/maxresdefault.jpg",
    logline: "A sensory journey through the pleasure of being together.",
    synopsis: "",
    credits: [
      { role: "Director", name: "Igor Beijatto, Giovani Silvestrini" },
      { role: "DOP", name: "Lucas Zanette Foltran" },
      { role: "AC", name: "Guilherme Kenzo, Nicko Moncada" },
      { role: "AD", name: "Jun Castilho" },
    ],
  },
  {
    slug: "prazer-e-devocao",
    title: "PRAZER E DEVOÇÃO",
    year: "2024",
    category: "narrative",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777518025/P_D_PREVIEW_II_CROP_rc6oyn.mov",
    fullVideoUrl: "https://www.youtube.com/embed/gje8BnORNOk",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/gje8BnORNOk/maxresdefault.jpg",
    logline: "Teaser — Coming Soon.",
    synopsis: "",
    credits: [
      { role: "Director & Production", name: "Lucas Zanette Foltran" },
      { role: "DOP", name: "Lucas Marcarini" },
      { role: "AC", name: "Nicko Moncada" },
      { role: "AD", name: "Juan Castilho" },
    ],
    stills: [
      "https://res.cloudinary.com/dezrlm0ns/image/upload/q_auto/f_auto/v1779839986/LOUROS_ABC_p3jn9r.png",
      "https://res.cloudinary.com/dezrlm0ns/image/upload/q_auto/f_auto/v1779839820/Still_2025-09-14_224559_1.59.1_uvzhnt.png",
      "https://res.cloudinary.com/dezrlm0ns/image/upload/q_auto/f_auto/v1779839819/Still_2025-09-14_213326_1.38.1_azrczi.png",
      "https://res.cloudinary.com/dezrlm0ns/image/upload/q_auto/f_auto/v1779839819/_CAM9542_1.18.1.drx_1.127.2_nkvgbq.png",
      "https://res.cloudinary.com/dezrlm0ns/image/upload/q_auto/f_auto/v1779839818/_CAM9542_1.18.1.drx_1.82.1_y5bo37.png",
      "https://res.cloudinary.com/dezrlm0ns/image/upload/q_auto/f_auto/v1779839812/_CAM9542_1.11.1_dd8fb9.png",
    ],
  },
  {
    slug: "joao-pimenta",
    title: "JOÃO PIMENTA",
    year: "2023",
    category: "commercial",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777518356/PREVIEW_JOAO_PIMENTA_V2_tdkbxx.mov",
    fullVideoUrl: "https://www.youtube.com/embed/GZPgP225cZ8",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/GZPgP225cZ8/maxresdefault.jpg",
    logline: "Fashion as an expression of Brazilian identity.",
    synopsis: "",
    credits: [
      { role: "Director & Production", name: "Lucas Zanette Foltran" },
      { role: "DOP", name: "Lucas Marcarini" },
      { role: "AC", name: "Duda Mendes" },
      { role: "Styling", name: "Jo Souza, Emiliano Augusto" },
    ],
  },
  {
    slug: "gallerist",
    title: "GALLERIST",
    year: "2023",
    category: "commercial",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777518029/PREVIEW_GALLERIST_khmkll.mov",
    fullVideoUrl: "https://player.vimeo.com/video/856974530",
    fullVideoType: "vimeo",
    posterUrl: "https://img.youtube.com/vi/T4WyU3mOlR4/maxresdefault.jpg",
    logline: "Where art meets fashion.",
    synopsis: "",
    credits: [
      { role: "DOP & Editing", name: "Lucas Zanette Foltran" },
      { role: "Styling", name: "Nara Pavon" },
    ],
  },
  {
    slug: "tv-cultura",
    title: "TV CULTURA — ASAS",
    year: "2023",
    category: "commercial",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777517956/ASAS_PREVIEW_zm6r6g.mov",
    fullVideoUrl: "https://www.youtube.com/embed/LctcZ3LrWBw",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/LctcZ3LrWBw/maxresdefault.jpg",
    logline: "Culture is movement.",
    synopsis: "",
    credits: [
      { role: "Director", name: "Paula Trabulsi" },
      { role: "DOP", name: "Arnaldo Mesquita" },
      { role: "AC", name: "Lucas Zanette Foltran, Lucas Marcarini, Pedro Mollo" },
      { role: "AD", name: "Priscila Trabulsi" },
    ],
  },
  {
    slug: "mega-da-virada",
    title: "MEGA DA VIRADA — ASSIST",
    year: "2023",
    category: "commercial",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777518679/MEGA_PREVIEW_tlc9sg.mov",
    fullVideoUrl: "https://www.youtube.com/embed/52OQYSVL5rU",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/52OQYSVL5rU/maxresdefault.jpg",
    logline: "The dream that becomes reality.",
    synopsis: "",
    credits: [
      { role: "Art Direction", name: "Natalia Neves" },
      { role: "Props Master", name: "Pedro Azevedo" },
      { role: "Art Assistant", name: "Lucas Zanette Foltran" },
    ],
  },
  {
    slug: "new-balls",
    title: "NEW BALLS",
    year: "2022",
    category: "commercial",
    previewVideoUrl: "https://res.cloudinary.com/dezrlm0ns/video/upload/q_auto/f_auto/v1777517992/NEW_BALLS_PREVIEW_wtbndm.mov",
    fullVideoUrl: "https://www.youtube.com/embed/Ec25J9qmhuQ",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/Ec25J9qmhuQ/maxresdefault.jpg",
    logline: "Sport in its purest form.",
    synopsis: "",
    credits: [
      { role: "Camera", name: "Lucas Zanette Foltran, Kauan Okuma" },
      { role: "Audio", name: "Tiago Levi" },
    ],
  },
  {
    slug: "cicatrizes",
    title: "CICATRIZES",
    year: "2024",
    category: "narrative",
    previewVideoUrl: "https://player.cloudinary.com/embed/?cloud_name=dezrlm0ns&public_id=Cicatrizes_PREVIEW_isfhme&player[autoplay]=true&player[muted]=true&player[loop]=true&player[controls]=false",
    fullVideoUrl: "https://www.youtube.com/embed/y8-KapTf-Sw",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/y8-KapTf-Sw/maxresdefault.jpg",
    logline: "The marks that remain.",
    synopsis: "",
    credits: [
      { role: "Director", name: "Lucas Zanette Foltran" },
      { role: "DOP", name: "Dani Lourenço" },
      { role: "Art Direction", name: "Igor Beijatto" },
      { role: "Production", name: "Camila Sfeir" },
    ],
  },
  {
    slug: "omint",
    title: "OMINT",
    year: "2024",
    category: "commercial",
    previewVideoUrl: "https://player.cloudinary.com/embed/?cloud_name=dezrlm0ns&public_id=OMINT_PREVIEW_g0nosu&player[autoplay]=true&player[muted]=true&player[loop]=true&player[controls]=false",
    fullVideoUrl: "https://www.youtube.com/embed/U9q4dRuNUG8",
    fullVideoType: "youtube",
    posterUrl: "https://img.youtube.com/vi/U9q4dRuNUG8/maxresdefault.jpg",
    logline: "Care in every detail.",
    synopsis: "",
    credits: [
      { role: "Art Direction", name: "Natalia Neves" },
      { role: "Props Master", name: "Pedro Azevedo" },
      { role: "Art Assistant", name: "Lucas Zanette Foltran" },
    ],
  },
];
