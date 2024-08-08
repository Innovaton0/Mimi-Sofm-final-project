import {defineStore} from 'pinia'
import { faker } from "@faker-js/faker";
import axios from "axios";

export const useArtistStore = defineStore('ArtistStore', {
    state: () => ({
      key: "XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV",
      artists: [
        { name: faker.person.fullName(), desc: `${"Tatuador japonés, nacido en Tokio en 1984. Desde pequeño mostró una fascinación por el arte tradicional japonés, especialmente el ukiyo-e, que aprendió de su abuelo, un talentoso calígrafo. A los 20 años, comenzó su carrera como aprendiz en un estudio de tatuajes de Tokio, donde perfeccionó sus habilidades en el estilo irezumi. En 2012, decidió trasladarse a Barcelona para ampliar sus horizontes artísticos y fundó su propio estudio, Sakura Ink, donde se especializa en tatuajes que combinan el arte tradicional japonés con influencias contemporáneas."}. `,id: "1" },

        { name: faker.person.fullName(), desc: `${"Tatuadora brasileña nacida en São Paulo en 1989. Desde joven mostró un talento excepcional para el arte, aprendiendo dibujo y pintura de su madre, que era artista plástica. A los 19 años, comenzó su carrera en el mundo del tatuaje, trabajando como aprendiz en un estudio de tatuajes en su ciudad natal. En 2015 se trasladó a Barcelona para perseguir nuevas oportunidades y abrir su propio estudio, Arte Vivo Tattoo, donde se especializa en tatuajes de estilo acuarela y realismo. Ana ha sido reconocida en numerosas convenciones internacionales por su habilidad para crear diseños vibrantes y personalizados que reflejan la personalidad de sus clientes. "}.`,id: "2" },

        { name: faker.person.fullName(), desc: `${"Tatuador estadounidense nacido Los Ángeles en 1986. Desde temprana edad mostró un interés profundo por el arte y el diseño, inspirado por los grafitis y el arte urbano de su ciudad natal. Comenzó su carrera como aprendiz en un estudio de tatuajes de renombre en Los Ángeles, donde desarrolló un estilo único que combina el realismo con el arte abstracto. En 2010 se trasladó a Barcelona, atraído por la vibrante escena artística de la ciudad, y fundó su propio estudio, Urban Ink, que rápidamente ganó reconocimiento por sus innovadores diseños. Ha ganado premios en importantes convenciones de tatuajes y es conocido por su habilidad para crear obras de arte únicas y significativas."}.`,id: "3"},
      
        
      ],
      images: [],
      category: ""
    }),
    getters: {
      getArtistById: (state) => {
        console.log("Hola");
        
        return (artistId) => state.artists.find((artist) => artist.id === artistId)
      },
    },
    actions: {
      changeCategory(category) {
        this.category = category
      },
      async getImages() {
        try {
          const response = await axios.get("/api/search", {
            headers: {
              Authorization: `${this.key}`,
            },
            params: {
              query: "tattoo artist",
              per_page: 40,
            },
          });
          this.images = response.data.photos;
          this.assignImagesToArtists();
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      },

      assignImagesToArtists() {
        this.artists = this.artists.map((artist, index) => {
          const image = this.images[index % this.images.length];
          return {
            ...artist,
            imageUrl: image.src.medium,
            imageLarge: image.src.large
          };
        });
      },

    }
})