import { MediaMatcher } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import {
	ActivationEnd,
	NavigationEnd,
	NavigationStart,
	Router,
	RouterOutlet,
} from '@angular/router';
import { BreadcrumbModel } from '@devkitify/angular-ui-kit';
import { map } from 'rxjs';
import { Breadcrumb } from '../../../../shared/components/breadcrumb';
import { BREADCRUMBS } from '../../../../shared/constant/global';
import { AdminHeader } from '../../component/admin-header';
import { AdminSidebar } from '../../component/admin-sidebar';

@Component({
	selector: 'app-admin-layout',
	imports: [RouterOutlet, NgClass, MatSidenavModule, AdminHeader, AdminSidebar, Breadcrumb],
	templateUrl: './admin-layout.html',
	styleUrl: './admin-layout.css',
})
export class AdminLayout {
	#title = inject(Title);
	#router = inject(Router);
	#media = inject(MediaMatcher);

	private readonly _mobileQuery: MediaQueryList;
	private readonly _mobileQueryListener: () => void;

	protected readonly isMobile = signal(true);

	breadcrumbs: BreadcrumbModel[] = [];
	isNavigating: boolean = false;

	navigate = toSignal(
		this.#router.events.pipe(
			map((event) => {
				if (event instanceof NavigationStart) this.isNavigating = true;
				if (event instanceof NavigationEnd)
					setTimeout(() => (this.isNavigating = false), 300);
			}),
		),
		{
			initialValue: null,
		},
	);

	constructor() {
		let paramId = '';
		this.#router.events.subscribe((event) => {
			if (event instanceof ActivationEnd) {
				if (event.snapshot.params['id']) paramId = event.snapshot.params['id'] || '';
			}
			if (event instanceof NavigationEnd) {
				this.breadcrumbs = BREADCRUMBS(event.url, paramId) || null;
				this.#title.setTitle('Connecta | ' + this.breadcrumbs?.at(-1)?.label || 'Connecta');
			}
		});

		this._mobileQuery = this.#media.matchMedia('(max-width: 600px)');
		this.isMobile.set(this._mobileQuery.matches);
		this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
		this._mobileQuery.addEventListener('change', this._mobileQueryListener);
	}

	onAnimationEnd() {
		this.isNavigating = false;
	}

	ngOnDestroy(): void {
		this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
	}
}
