import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Add more public routes as needed
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Exclude _next and all files with extensions (e.g. .png, .css, .js)
    "/",                      // Ensure root is matched
    "/(api|trpc)(.*)",        // Match API routes
  ],
};
