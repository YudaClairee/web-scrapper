# UlikTerus - AI-Powered Knowledge Extraction

UlikTerus is a modern, full-stack web application designed to transform any website into actionable knowledge. Using advanced AI-powered extraction, it helps users scrape, analyze, and organize web content into a personal knowledge base.

## 🚀 Key Features

- **Smart Web Scraping**: Intelligent parsing that understands page structure and context.
- **AI-Powered Analysis**: Automatically processes and categorizes scraped content.
- **Knowledge Organization**: Organize content into collections, tags, and categories.
- **Semantic Search**: Natural language search that understands meaning, not just keywords.
- **Real-time Processing**: Live updates and progress tracking during content extraction.
- **Privacy First**: Secure data management with a focus on user ownership.

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database/ORM**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Authentication**: [Better Auth](https://better-auth.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **State Management**: [TanStack Form](https://tanstack.com/form), [TanStack Router](https://tanstack.com/router)
- **Runtime**: Node.js / Vite

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS)
- [pnpm](https://pnpm.io/) (Recommended package manager)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd web-scrapper
    ```

2.  **Install dependencies**:

    ```bash
    pnpm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add the following:

    ```env
    DATABASE_URL="your-postgresql-url"
    BETTER_AUTH_SECRET="your-auth-secret"
    BETTER_AUTH_URL="http://localhost:3000"
    ```

4.  **Database Setup**:
    Push the schema to your database:

    ```bash
    pnpm db:push
    ```

5.  **Run Development Server**:
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`.

## 📜 Available Scripts

- `pnpm dev`: Start the development server.
- `pnpm build`: Build the application for production.
- `pnpm preview`: Preview the production build.
- `pnpm test`: Run tests using Vitest.
- `pnpm lint`: Run ESLint.
- `pnpm format`: Run Prettier.
- `pnpm check`: Format and lint fix (Prettier + ESLint).
- `pnpm db:generate`: Generate Prisma client.
- `pnpm db:push`: Push Prisma schema to the database.
- `pnpm db:studio`: Open Prisma Studio to view/edit data.

## 📂 Project Structure

- `src/routes`: File-based routing using TanStack Router.
- `src/components`: UI components (including Shadcn and custom web components).
- `src/lib`: Utilities, auth configuration, and shared types.
- `prisma/`: Database schema and migration files.
- `public/`: Static assets.

---

Built with ❤️ by [YudaClairee](https://github.com/YudaClairee)
