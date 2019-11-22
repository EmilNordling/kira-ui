import { useEffect } from 'react';

export function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: any) {
	const handleClick = (event: TouchEvent | MouseEvent) => {
		if (ref && (!ref.current || ref.current.contains(event.target as Node))) return;

		handler(event);
	};

	useEffect(() => {
		addEventListener('mousedown', handleClick);
		addEventListener('touchstart', handleClick);

		// disposer
		return () => {
			removeEventListener('mousedown', handleClick);
			removeEventListener('touchstart', handleClick);
		};
	}, []);
}