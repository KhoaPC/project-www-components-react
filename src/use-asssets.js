const CONST_IMAGES_ORIGINAL = [
  { name: "img-1:", src: "assets/img/img-1.jpg" },
  { name: "img-2:", src: "assets/img/img-2.jpg" },
];

// workaround
export const CONST_IMAGES = CONST_IMAGES_ORIGINAL.map((item) => {
  return {
    ...item,
    src: `${process.env.PUBLIC_URL}/${item.src}`,
  };
});

/* Use:
import { CONST_IMAGES } from '.?/use-asssets';
    const img0 = CONST_IMAGES[0].src;
    const img1 = CONST_IMAGES[1].src;
 */
