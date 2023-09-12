export interface Filters {
  belowGlass: string;
};

export const filters: Filters = {
  belowGlass: `
    url("/images/filters.svg#gold-sunset") 
    brightness(1.25)
    blur(0.5px) 
    grayscale(0.25) 
    contrast(0.75)
  `,
};