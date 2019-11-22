export declare namespace TextFieldComponent {
    type Variant = 'standard';
    interface Props {
        helperText?: string;
        icon?: any;
        variant?: Variant;
        example?: string;
        multiline?: boolean;
        fixedWidth?: number;
        required?: boolean;
        placeholder?: string;
        type?: 'text';
        readOnly?: boolean;
        disabled?: boolean;
    }
    interface State {
        error: string | null;
    }
}
