import { Component, input, output, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Textbox } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-search',
	imports: [Textbox, FontAwesomeModule],
	templateUrl: './search.html',
	styleUrl: './search.css',
})
export class Search {
	searchValue = output<string>();

	model = signal<{ searchValue: string }>({
		searchValue: '',
	});

	form = form(this.model);

	placeholder = input<string>('');

	faIcon = {
		faSearch,
	};

	private debounceTimer: any;

	reset() {
		this.model.set({ searchValue: '' });
	}

	onSearch(event: Event) {
		clearTimeout(this.debounceTimer);

		this.debounceTimer = setTimeout(() => {
			this.searchValue.emit(this.model().searchValue);
		}, 600);
	}
}
