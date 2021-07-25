import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        
        brand: {
            "900": "#581b98",
            "500": "#9c1de7",
            "200": "#f3558e",
            "100": "#faee1c",
        } 
    },
    fonts: {
        body:'Roboto',
        heading: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: "brand.900",
                color: "white"
            }
        }
    }
});