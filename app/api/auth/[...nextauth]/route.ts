// Export handlers from auth configuration
// In NextAuth v5, handlers are exported directly from the auth config
import { handlers } from "@/lib/auth"

export const { GET, POST } = handlers
