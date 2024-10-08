![screencapture-netflixgpt-ce9e8-web-app-2024-09-14-15_40_26](https://github.com/user-attachments/assets/b59e3413-fb41-4a0b-80d0-3769db83e307)
![screencapture-netflixgpt-ce9e8-web-app-browse-2024-09-14-15_41_07](https://github.com/user-attachments/assets/6159e4ff-d2a1-4fc9-a789-4dc1bb828d4a)
# Netflix GPT

Netflix GPT is a modern, AI-driven movie recommendation platform that integrates the power of OpenAI's GPT and TMDB (The Movie Database) API. Users can browse trending movies, get personalized recommendations, and interact with a clean, responsive UI built with React and Tailwind CSS.

## Features

- **Authentication**: 
  - Login / Sign Up forms with form validation
  - User authentication using Firebase
  - Redirects to the Browse page after successful authentication
  - Profile management (update display name and profile picture)

- **Movie Browsing Experience**:
  - Browse page featuring trending movies, with a main movie trailer playing in the background
  - Embedded YouTube trailers that autoplay and are muted
  - Dynamic movie lists fetched from TMDB's Now Playing Movies API
  - Responsive movie cards designed using Tailwind CSS

- **AI-Driven Search**:
  - GPT-powered search bar that provides AI-generated movie suggestions based on the user's input
  - Integrated OpenAI API to fetch GPT movie suggestions and TMDB API for data
  - Multi-language support for broader accessibility

- **State Management**:
  - Redux store for managing user authentication, movies, and GPT suggestions
  - Memoization for performance optimization

## Project Setup

### Prerequisites

Before starting, ensure you have the following keys ready:

- **TMDB API Key**: Sign up at [TMDB](https://www.themoviedb.org/) to get your API key.
- **OpenAI API Key**: Sign up at [OpenAI](https://openai.com/) to access the GPT API.

### Environment Variables

Create a `.env` file in the root of the project and add your API keys:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
