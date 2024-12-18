export const ButtonTypes = {
    Primary: 'primary',
    Danger: 'danger',
    Warning: 'warning',
    Secondary: 'secondary',
    Success: 'success',
} as const;

export type ButtonType = keyof typeof ButtonTypes;