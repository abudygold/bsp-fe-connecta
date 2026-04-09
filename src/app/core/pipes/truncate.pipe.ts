import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate',
	standalone: true, // Use standalone: true for modern Angular versions
})
export class TruncatePipe implements PipeTransform {
	/**
	 * Pipe that truncates a string to a specified length and appends a trailing string.
	 *
	 * @example
	 * // Truncate to 15 characters with default trail
	 * {{ title | truncate:15 }}
	 * // Result: "This is a very lo..."
	 *
	 * @example
	 * // Truncate to 15 characters with custom trail
	 * {{ title | truncate:15:' [Read More]' }}
	 * // Result: "This is a very lo [Read More]"
	 */
	transform(value: string, limit: number = 20, trail: string = '...'): string {
		if (!value) return '';
		return value.length > limit ? value.substring(0, limit) + trail : value;
	}
}
