import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quartiary: string;

            letter: string;
            input: string;
    
            white: string;
            black: string;
            gray: string;
            green: string;

            success: string;
            info: string;
            warning: string;
            accepted: string;
        },
    };
};