import {defineStore} from 'pinia'
import { faker } from "@faker-js/faker";
import axios from "axios";

export const useArtistStore = defineStore('ArtistStore', {
    state: () => ({
      key: "XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV",
      
        artists: [
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador japonés, nacido en Tokio en 1984. Desde pequeño mostró una fascinación por el arte tradicional japonés, especialmente el ukiyo-e, que aprendió de su abuelo, un talentoso calígrafo. A los 20 años, comenzó su carrera como aprendiz en un estudio de tatuajes de Tokio, donde perfeccionó sus habilidades en el estilo irezumi. En 2012, decidió trasladarse a Barcelona para ampliar sus horizontes artísticos y fundó su propio estudio, Sakura Ink, donde se especializa en tatuajes que combinan el arte tradicional japonés con influencias contemporáneas."}`,
            id: "1",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora brasileña nacida en São Paulo en 1989. Desde joven mostró un talento excepcional para el arte, aprendiendo dibujo y pintura de su madre, que era artista plástica. A los 19 años, comenzó su carrera en el mundo del tatuaje, trabajando como aprendiz en un estudio de tatuajes en su ciudad natal. En 2015 se trasladó a Barcelona para perseguir nuevas oportunidades y abrir su propio estudio, Arte Vivo Tattoo, donde se especializa en tatuajes de estilo acuarela y realismo. Ha sido reconocida en numerosas convenciones internacionales por su habilidad para crear diseños vibrantes y personalizados que reflejan la personalidad de sus clientes."}`,
            id: "2",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador estadounidense nacido en Los Ángeles en 1986. Desde temprana edad mostró un interés profundo por el arte y el diseño, inspirado por los grafitis y el arte urbano de su ciudad natal. Comenzó su carrera como aprendiz en un estudio de tatuajes de renombre en Los Ángeles, donde desarrolló un estilo único que combina el realismo con el arte abstracto. En 2010 se trasladó a Barcelona, atraído por la vibrante escena artística de la ciudad, y fundó su propio estudio, Urban Ink, que rápidamente ganó reconocimiento por sus innovadores diseños. Ha ganado premios en importantes convenciones de tatuajes y es conocido por su habilidad para crear obras de arte únicas y significativas."}`,
            id: "3",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora alemana nacida en Berlín en 1990. Desde su niñez, cultivó un amor por la pintura surrealista, inspirándose en artistas como Dalí y Max Ernst. A los 21 años, decidió fusionar su pasión por el surrealismo con el arte del tatuaje, formándose en un prestigioso estudio en Hamburgo. En 2018, se trasladó a Ámsterdam y abrió su estudio llamado Dreamscape Tattoo, donde crea diseños de tatuajes que transportan a sus clientes a mundos oníricos llenos de color y fantasía."}`,
            id: "4",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador italiano nacido en Roma en 1987. Desde joven fue un apasionado del arte renacentista y barroco, lo que lo llevó a estudiar bellas artes. Tras descubrir su interés por el tatuaje, se convirtió en aprendiz en un conocido estudio en Milán. A los 28 años, abrió su propio estudio en Florencia llamado Renaissance Tattoo Studio, donde combina técnicas clásicas con estilos modernos, creando tatuajes que son verdaderas obras de arte."}`,
            id: "5",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora canadiense nacida en Toronto en 1992. Creció rodeada de arte callejero y cultura urbana, lo que influyó en su estilo único de tatuaje que mezcla graffiti con elementos de la naturaleza. A los 22 años, comenzó a trabajar en un estudio de tatuajes en Vancouver y pronto ganó reconocimiento por su creatividad y habilidad. En 2020, abrió su propio estudio, Nature's Graffiti, donde se especializa en diseños personalizados que reflejan la esencia de sus clientes."}`,
            id: "6",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador mexicano nacido en Ciudad de México en 1985. Desde pequeño, se interesó por el arte prehispánico y el simbolismo mexicano. Comenzó su carrera como aprendiz en un estudio de tatuajes local, donde perfeccionó sus habilidades en estilos como el chicano y el arte tribal. En 2014, se trasladó a Guadalajara y abrió su propio estudio, Aztec Ink, donde crea tatuajes que rinden homenaje a sus raíces culturales."}`,
            id: "7",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora francesa nacida en París en 1991. Desde temprana edad, mostró un interés por el impresionismo y la pintura al óleo. A los 23 años, decidió fusionar su amor por el color con el tatuaje, y comenzó a trabajar en un estudio en Marsella. En 2019, abrió su propio estudio, Impressionist Tattoo, donde crea tatuajes que capturan la esencia de las pinturas impresionistas."}`,
            id: "8",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador australiano nacido en Sídney en 1983. Desde joven, tuvo una fascinación por la fauna y flora nativa de Australia. Se formó en un estudio de tatuajes en Melbourne, donde desarrolló su estilo único que combina arte botánico con diseño contemporáneo. En 2011, abrió su propio estudio, Bushland Ink, donde sus tatuajes son una celebración de la biodiversidad australiana."}`,
            id: "9",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora inglesa nacida en Londres en 1988. Desde pequeña mostró interés por la moda y el diseño textil, lo que la llevó a estudiar diseño de moda. Sin embargo, descubrió su verdadera pasión en el tatuaje, donde combina patrones de tela con ilustraciones modernas. En 2017, abrió su estudio, Textile Tattoos, en el corazón de Londres, y rápidamente ganó reconocimiento por su creatividad."}`,
            id: "10",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador español nacido en Sevilla en 1990. Desde niño, se sintió atraído por el flamenco y la cultura andaluza, lo que influyó profundamente en su estilo artístico. Comenzó su carrera como aprendiz en un estudio de tatuajes en Granada, donde perfeccionó sus habilidades en estilos tradicionales y arte abstracto. En 2018, abrió su propio estudio, Flamenco Tattoo, donde sus tatuajes son un homenaje a la cultura española."}`,
            id: "11",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora sudafricana nacida en Ciudad del Cabo en 1987. Desde joven, mostró un talento natural para el arte, inspirado por la rica diversidad cultural de Sudáfrica. A los 20 años, comenzó su carrera en un estudio de tatuajes en Johannesburgo, donde desarrolló su estilo distintivo que fusiona arte africano y realismo. En 2015, abrió su propio estudio, Ubuntu Ink, donde crea tatuajes que cuentan historias profundas y personales."}`,
            id: "12",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador sueco nacido en Estocolmo en 1993. Desde niño, se interesó por los mitos y leyendas nórdicas, lo que influyó en su estilo artístico. A los 18 años, comenzó a trabajar como aprendiz en un estudio de tatuajes en Gotemburgo, donde perfeccionó su técnica en estilos de tatuaje nórdico y mitológico. En 2020, abrió su propio estudio, Valkyrie Tattoo, donde crea tatuajes inspirados en la mitología vikinga."}`,
            id: "13",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora india nacida en Mumbai en 1984. Desde temprana edad, mostró interés por el arte tradicional indio, especialmente el mehndi y el mandala. A los 22 años, comenzó su carrera en un estudio de tatuajes en Delhi, donde desarrolló su estilo único que combina arte tradicional y contemporáneo. En 2013, abrió su propio estudio, Mandala Ink, donde crea tatuajes que son una celebración de la cultura india."}`,
            id: "14",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador argentino nacido en Buenos Aires en 1985. Desde niño, se sintió atraído por el tango y la cultura porteña, lo que influyó en su estilo artístico. Comenzó su carrera como aprendiz en un estudio de tatuajes en Córdoba, donde perfeccionó sus habilidades en estilos realistas y arte abstracto. En 2015, abrió su propio estudio, Tango Tattoo, donde sus tatuajes son un homenaje a la cultura argentina."}`,
            id: "15",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora rusa nacida en Moscú en 1991. Desde joven, mostró un interés por el arte contemporáneo y la ilustración. A los 21 años, comenzó a trabajar como aprendiz en un estudio de tatuajes en San Petersburgo, donde desarrolló su estilo distintivo que combina ilustraciones modernas con técnicas clásicas. En 2018, abrió su propio estudio, Contemporary Ink, donde sus tatuajes son una fusión de lo moderno y lo tradicional."}`,
            id: "16",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador colombiano nacido en Medellín en 1988. Desde pequeño, mostró una fascinación por el arte urbano y el graffiti. A los 20 años, comenzó su carrera en un estudio de tatuajes en Bogotá, donde perfeccionó su estilo único que combina arte urbano con realismo. En 2016, abrió su propio estudio, Street Ink, donde sus tatuajes son una expresión de la vida urbana."}`,
            id: "17",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora coreana nacida en Seúl en 1987. Desde temprana edad, mostró un talento para el arte, inspirado por la caligrafía y la cultura coreana. A los 23 años, comenzó a trabajar en un estudio de tatuajes en Busan, donde desarrolló su estilo distintivo que fusiona arte tradicional y moderno. En 2015, abrió su propio estudio, Hanbok Ink, donde crea tatuajes que reflejan la esencia de la cultura coreana."}`,
            id: "18",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador griego nacido en Atenas en 1990. Desde joven, se interesó por la mitología griega y la escultura clásica. Comenzó su carrera como aprendiz en un estudio de tatuajes en Tesalónica, donde perfeccionó sus habilidades en estilos mitológicos y realistas. En 2018, abrió su propio estudio, Olympus Tattoo, donde sus tatuajes son un homenaje a los dioses y héroes de la antigüedad."}`,
            id: "19",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora tailandesa nacida en Bangkok en 1985. Desde joven, mostró un talento natural para el arte, inspirado por la rica tradición budista de Tailandia. A los 21 años, comenzó su carrera en un estudio de tatuajes en Chiang Mai, donde desarrolló su estilo distintivo que fusiona arte budista y contemporáneo. En 2014, abrió su propio estudio, Lotus Ink, donde crea tatuajes que son una expresión de paz y espiritualidad."}`,
            id: "20",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador egipcio nacido en El Cairo en 1989. Desde pequeño, se interesó por el arte faraónico y los jeroglíficos. Comenzó su carrera como aprendiz en un estudio de tatuajes en Alejandría, donde perfeccionó sus habilidades en estilos históricos y simbólicos. En 2017, abrió su propio estudio, Pharaoh Tattoo, donde sus tatuajes son un homenaje a la rica historia del antiguo Egipto."}`,
            id: "21",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora turca nacida en Estambul en 1992. Desde temprana edad, mostró un interés por el arte otomano y la caligrafía. A los 20 años, comenzó a trabajar como aprendiz en un estudio de tatuajes en Ankara, donde desarrolló su estilo distintivo que combina arte otomano y moderno. En 2020, abrió su propio estudio, Ottoman Ink, donde crea tatuajes que son una celebración de la cultura turca."}`,
            id: "22",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador canadiense nacido en Montreal en 1984. Desde joven, mostró una fascinación por el arte inuit y la cultura indígena. A los 22 años, comenzó su carrera en un estudio de tatuajes en Toronto, donde perfeccionó su estilo único que combina arte indígena con realismo. En 2013, abrió su propio estudio, Northern Lights Tattoo, donde sus tatuajes son una expresión de la herencia cultural de Canadá."}`,
            id: "23",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora polaca nacida en Varsovia en 1990. Desde temprana edad, mostró un interés por el arte moderno y la ilustración. A los 21 años, comenzó a trabajar como aprendiz en un estudio de tatuajes en Cracovia, donde desarrolló su estilo distintivo que combina ilustraciones contemporáneas con técnicas tradicionales. En 2018, abrió su propio estudio, Modern Ink, donde sus tatuajes son una fusión de lo clásico y lo moderno."}`,
            id: "24",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador filipino nacido en Manila en 1987. Desde pequeño, se sintió atraído por el arte tribal y la cultura filipina. Comenzó su carrera como aprendiz en un estudio de tatuajes en Cebu, donde perfeccionó sus habilidades en estilos tribales y simbólicos. En 2015, abrió su propio estudio, Tribal Ink, donde sus tatuajes son una celebración de la rica herencia cultural de Filipinas."}`,
            id: "25",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora neozelandesa nacida en Auckland en 1993. Desde joven, mostró una fascinación por el arte maorí y la cultura indígena. A los 19 años, comenzó su carrera en un estudio de tatuajes en Wellington, donde perfeccionó su estilo único que combina arte maorí con realismo. En 2021, abrió su propio estudio, Maori Tattoo, donde sus tatuajes son una expresión de la herencia cultural de Nueva Zelanda."}`,
            id: "26",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador portugués nacido en Lisboa en 1986. Desde pequeño, mostró un interés por el arte marítimo y la navegación. Comenzó su carrera como aprendiz en un estudio de tatuajes en Oporto, donde perfeccionó sus habilidades en estilos náuticos y realistas. En 2014, abrió su propio estudio, Maritime Ink, donde sus tatuajes son un homenaje a la rica historia marítima de Portugal."}`,
            id: "27",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora nigeriana nacida en Lagos en 1991. Desde temprana edad, mostró un talento natural para el arte, inspirado por la rica tradición cultural de Nigeria. A los 20 años, comenzó su carrera en un estudio de tatuajes en Abuja, donde desarrolló su estilo distintivo que fusiona arte africano y contemporáneo. En 2019, abrió su propio estudio, Afro Ink, donde crea tatuajes que son una celebración de la diversidad cultural de África."}`,
            id: "28",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuador escocés nacido en Edimburgo en 1989. Desde joven, se interesó por la mitología celta y el arte medieval. Comenzó su carrera como aprendiz en un estudio de tatuajes en Glasgow, donde perfeccionó sus habilidades en estilos mitológicos y realistas. En 2017, abrió su propio estudio, Celtic Tattoo, donde sus tatuajes son un homenaje a la rica historia y cultura de Escocia."}`,
            id: "29",
          },
          {
            name: faker.person.fullName(),
            desc: `${"Tatuadora chilena nacida en Santiago en 1985. Desde joven, mostró un talento natural para el arte, inspirado por la rica tradición cultural de Chile. A los 22 años, comenzó su carrera en un estudio de tatuajes en Valparaíso, donde desarrolló su estilo distintivo que fusiona arte tradicional y contemporáneo. En 2013, abrió su propio estudio, Andean Ink, donde crea tatuajes que son una expresión de la herencia cultural de Chile."}`,
            id: "30",
          },
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