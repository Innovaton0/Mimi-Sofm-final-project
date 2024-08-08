import {defineStore} from 'pinia'
import { faker } from "@faker-js/faker";
import axios from "axios";

export const useArtistStore = defineStore('ArtistStore', {
    state: () => ({
      key: "XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV",
      artists: [
        { name: faker.person.fullName(), desc: `${faker.person.bio()}. Dotwork artist` },
        { name: faker.person.fullName(), desc: `${faker.person.bio()}. Tribal artist` },
        { name: faker.person.fullName(), desc: `${faker.person.bio() }. Black work artist`},
      
        
      ],
      images: [],
      category: ""
    }),
    getters: {
        
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
              per_page: 20,
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