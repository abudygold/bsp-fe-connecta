import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-channel-template-preview',
	imports: [FontAwesomeModule],
	templateUrl: './channel-template-preview.html',
	styleUrl: './channel-template-preview.css',
})
export class ChannelTemplatePreview {
	protected readonly sanitizer = inject(DomSanitizer);

	template = input<{
		channel: string;
		headerType: string;
		header: string;
		body: string;
	}>({
		channel: '',
		headerType: '',
		header: '',
		body: '',
	});

	faIcon = {
		faFilePdf,
	};

	get safeVideoUrl(): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.template().header);
	}
}
