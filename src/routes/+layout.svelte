<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: linear-gradient(to right, rgba(18,18,18,0.85), rgba(30,30,30,0.85));
    backdrop-filter: blur(6px);
    color: white;
    font-family: system-ui, sans-serif;
    font-size: 1.05rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    flex-wrap: wrap;
    border-radius: 0 0 12px 12px;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
  }

  nav a {
    color: white;
    text-decoration: none;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  nav a:hover {
    background-color: #2ecc71;
    color: #121212;
  }

  nav a.logout-button {
    background-color: #2ecc71;
    color: #121212;
    font-weight: bold;
  }

  nav a.logout-button:hover {
    background-color: #27ae60;
  }

  main {
    padding: 2rem;
    max-width: 960px;
    margin: 0 auto;
    font-family: system-ui, sans-serif;
    color: #f0f0f0;
  }
</style>

<nav>
  <div class="nav-links">
    <a href="/">🏠 Home</a>
    <a href="/convert">💱 Converter</a>
    <a href="/login">🔐 Login</a>
  </div>
  <a href="/logout" class="logout-button">🚪 Logout</a>
</nav>

<main>
  <slot />
</main>