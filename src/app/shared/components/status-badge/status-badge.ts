import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

/**
 * Status Badge Component
 *
 * A reusable component for displaying status indicators with customizable styling.
 *
 * @component
 *
 * @example
 * ```html
 * <app-status-badge
 *   [label]="status"
 *   [badgeClass]="{
 *     'tw:bg-green-100 tw:text-green-700': status === 'connected',
 *     'tw:bg-red-100 tw:text-red-700': status === 'disconnected',
 *   }" />
 * ```
 *
 * @example Color Palette
 * - Success: `tw:bg-green-100 tw:text-green-700`
 * - Warning: `tw:bg-yellow-100 tw:text-yellow-700`
 * - Info: `tw:bg-blue-100 tw:text-blue-700`
 * - Danger: `tw:bg-red-100 tw:text-red-700`
 * - Default: `tw:bg-gray-100 tw:text-gray-700`
 */
@Component({
	selector: 'app-status-badge',
	imports: [NgClass],
	template: `
		<span
			class="tw:inline-block tw:whitespace-nowrap tw:rounded-full tw:px-[0.65em] tw:pb-[0.25em] tw:pt-[0.35em] tw:text-center tw:align-baseline tw:text-sm tw:font-bold tw:leading-none"
			[ngClass]="badgeClass()">
			{{ label() }}
		</span>
	`,
})
export class StatusBadge {
	label = input<string>();
	badgeClass = input.required<
		| string
		| string[]
		| Set<string>
		| {
				[klass: string]: any;
		  }
		| null
		| undefined
	>();
}
