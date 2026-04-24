import { signal } from '@angular/core';
import { ButtonModel } from '@devkitify/angular-ui-kit';

export const ADD_NEW_BUTTON = (
	text: string = 'Basic Button',
	onClick?: VoidFunction,
	icon: string = 'add',
): ButtonModel => ({
	text,
	appearance: 'flat',
	icon,
	onClick,
});

export const SAVE_BUTTON = (
	text: string = 'Basic Button',
	onClick?: VoidFunction,
	icon: string = 'send',
): ButtonModel => ({
	text,
	appearance: 'flat',
	icon,
	buttonClass: 'tw:min-w-32!',
	disabled: signal<boolean>(false),
	onClick,
});

export const CANCEL_BUTTON = (
	text: string = 'Basic Button',
	onClick?: VoidFunction,
): ButtonModel => ({
	text,
	appearance: 'stroked',
	buttonClass: 'tw:min-w-32!',
	disabled: signal<boolean>(false),
	onClick,
});
