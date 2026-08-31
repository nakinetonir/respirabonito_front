import { DestroyRef, Injectable, afterNextRender, inject, signal } from '@angular/core';

/**
 * Punto de corte unico para movil vs tablet+desktop, alineado con el que ya
 * usaba el CSS del sitio (@media max-width: 760px).
 */
const MOBILE_BREAKPOINT_QUERY = '(max-width: 760px)';

/**
 * Expone en que "familia" de dispositivo esta el viewport actual, para poder
 * elegir entre las variantes *-mobile y *-desktop-tablet de cada componente.
 *
 * En servidor (SSR) arranca en `false` (desktop/tablet) para no adivinar; en
 * el navegador se corrige en el primer render y se mantiene sincronizado con
 * los cambios de tamano de ventana.
 */
@Injectable({ providedIn: 'root' })
export class DeviceService {
  private readonly destroyRef = inject(DestroyRef);

  readonly isMobile = signal(false);

  constructor() {
    afterNextRender(() => {
      const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
      this.isMobile.set(mediaQuery.matches);

      const onChange = (event: MediaQueryListEvent) => this.isMobile.set(event.matches);
      mediaQuery.addEventListener('change', onChange);

      this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', onChange));
    });
  }
}
