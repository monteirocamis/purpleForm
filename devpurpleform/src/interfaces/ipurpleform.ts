
    export interface Theme {
        primary_color: string;
        text_color_on_bg_primary: string;
    }

    export interface option_set {
        id: number;
        text: string;
        option_type: string;
        order: number;
        question: number;
    }

    export interface Question {
        id: number;
        attribute: string;
        text: string;
        order: number;
        option_set: option_set[];
    }

    export interface IPurpleForm {
        theme: Theme;
        questions: Question[];
    }