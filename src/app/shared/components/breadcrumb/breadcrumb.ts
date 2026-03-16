import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { IBreadcrumb } from '../../interface/base';

@Component({
	selector: 'app-breadcrumb',
	imports: [RouterLink, MatIconModule, MatDividerModule],
	templateUrl: './breadcrumb.html',
	styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
	breadcrumbs = input.required<IBreadcrumb[]>();
}
