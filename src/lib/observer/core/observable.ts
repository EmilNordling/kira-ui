import { set } from './handlers';
import { origin, registerObserver } from './internals';

export type Observable<T> = {
	[key in keyof T]: any;
};

export function observable<T>(obj: T): Observable<T> {
	const observable = new Proxy(obj as Object, { set });

	origin.set(observable, obj);

	registerObserver(observable);

	return observable as Observable<T>;
}
