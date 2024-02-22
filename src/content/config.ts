// 1. Importar las utilidades de `astro:content`
import { z, defineCollection, reference } from "astro:content";

// 2. Definir un `type` y `schema` para cada colección
const pisosCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      bannerImgs: z.array(image()),
      image: image(),
      type: z.string(),
      similarProductIDs: z.array(reference("pisos")),
    }),
});

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
  pisos: pisosCollection,
};
