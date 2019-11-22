import { InputHTMLAttributes } from 'react';
export declare namespace BaseInputComponent {
    interface Props extends Style, InputHTMLAttributes<HTMLInputElement> {
        type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    }
    interface Style {
    }
}
