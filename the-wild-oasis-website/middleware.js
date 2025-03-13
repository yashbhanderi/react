import {auth} from '@/app/_lib/auth';

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }

export const middleware = auth;

// Only match below routes
export const config = {
  matcher: ["/account"],
};