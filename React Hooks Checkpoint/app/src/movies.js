var movies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal their secrets from their subconscious gets a chance at redemption when he is offered a seemingly impossible task: to plant an idea into the mind of a CEO.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
    rating: 8.8,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/30/68/18686447.jpg",
    rating: 9.3,
    trailerLink: "https://www.youtube.com/embed/NmzuHjWmXOc",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg",
    rating: 9.0,
    trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterURL:
      "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg",
    rating: 8.9,
    trailerLink: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: 5,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    posterURL:
      "https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg",
    rating: 8.8,
    trailerLink: "https://www.youtube.com/embed/bLvqoHBptjg",
  },
  {
    id: 6,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterURL:
      "https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg",
    rating: 8.7,
    trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: 7,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/08/14/11/0688770.jpg",
    rating: 8.8,
    trailerLink: "https://www.youtube.com/embed/qtRKdVHc-cE",
  },
  {
    id: 8,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg",
    rating: 9.2,
    trailerLink: "https://www.youtube.com/embed/sY1S34973zA",
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/14/33/18366630.jpg",
    rating: 8.9,
    trailerLink: "https://www.youtube.com/embed/r5X-hFf6Bwo",
  },
  {
    id: 10,
    title: "Goodfellas",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/56/92/aff.jpg",
    rating: 8.7,
    trailerLink: "https://www.youtube.com/embed/qo5jJpHtI1Y",
  },
  {
    id: 11,
    title: "The Last Airbender",
    description:
      "Follows the adventures of Aang, a young successor to a long line of Avatars, who must master all four elements and stop the Fire Nation from enslaving the Water Tribes and the Earth Kingdom.",
    posterURL:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8a31d29a22acf39601bcc6a10b78a1ff_e2bc2259-1f42-47ea-85c8-91a9aa9078cd_500x749.jpg?v=1573584382",
    rating: 4.0,
    trailerLink: "https://www.youtube.com/embed/d1EnW4kn1kg",
  },
  {
    id: 12,
    title: "Cats",
    description:
      "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
    posterURL:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/cats.2020.styleb.ar_500x749.jpg?v=1575581396",
    rating: 2.8,
    trailerLink: "https://www.youtube.com/embed/FtSd844cI7U",
  },
  {
    id: 13,
    title: "Jack and Jill",
    description:
      "Family guy Jack Sadelstein prepares for the annual event he dreads: the Thanksgiving visit of his fraternal twin sister, the needy and passive-aggressive Jill, who then refuses to leave.",
    posterURL:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/jack-and-jill_d46f42bf_500x749.jpg?v=1703188923",
    rating: 3.3,
    trailerLink: "https://www.youtube.com/embed/kxIB6NfP8FA",
  },
  {
    id: 14,
    title: "Batman & Robin",
    description:
      "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
    posterURL:
      "https://fr.web.img3.acsta.net/c_310_420/pictures/22/08/31/13/48/3577634.jpg",
    rating: 3.7,
    trailerLink: "https://www.youtube.com/embed/4RBXypX4qWI",
  },
  {
    id: 15,
    title: "Gigli",
    description:
      "The violent story about how a criminal lesbian, a tough-guy hit-man with a heart of gold, and a mentally challenged man came to be best friends through a hostage.",
    posterURL:
      "https://www.movieposters.com/cdn/shop/products/53b5a4dc9636f8fe62f39b60a29e11e3_90d4c9ae-ea97-4faa-af3d-39b4cd329191_480x.progressive.jpg?v=1573585386",
    rating: 2.5,
    trailerLink: "https://www.youtube.com/embed/5p6d_bhXxMw",
  },
];
movies = movies.sort((a, b) => {
  return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
});

export default movies;
