import { useRouter } from 'next/router';

export default function useCurrentRoute() {
    const router = useRouter();

    if (!router) return;

    return router.pathname;
}
