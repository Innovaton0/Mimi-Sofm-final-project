import {defineStore} from 'pinia'
import axios from "axios";

export const useTattooStore = defineStore('TattooStore', {
    state: () => ({
      key: "XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV",
      images: []
    }),
    actions: {
      async getTattooImages(query) {
        try {
          const response = await axios.get("/api/search", {
            headers: {
              Authorization: `${this.key}`,
            },
            params: {
              query: query,
              per_page: 20,
            },
          });
          this.images = response.data.photos;
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      },
    }
})