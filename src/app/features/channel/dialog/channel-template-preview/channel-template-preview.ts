import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Button, ButtonModel, Dialog } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons';
import { CANCEL_BUTTON } from '../../../../shared/constant/global';

@Component({
	selector: 'app-channel-template-preview',
	imports: [Dialog, Button, FontAwesomeModule],
	templateUrl: './channel-template-preview.html',
	styleUrl: './channel-template-preview.css',
})
export class ChannelTemplatePreview {
	protected dialogRef = inject(MatDialogRef<ChannelTemplatePreview>);
	protected readonly sanitizer = inject(DomSanitizer);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.dialogRef.close())),
	};

	faIcon = {
		faPlay,
		faFilePdf,
	};

	get safeVideoUrl(): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.data?.rows?.payload.header);
	}
}
