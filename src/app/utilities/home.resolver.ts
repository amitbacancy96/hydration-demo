import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { timer, map, Observable } from 'rxjs';

export const homeResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
    return timer(3000).pipe(
        map(() => true)
    );
}