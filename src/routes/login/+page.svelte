<script>
  let username = '';
  let password = '';
  let error = '';
  let loading = false;
  let success = false;

  async function login() {
    loading = true;
    error = '';
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    loading = false;

    if (res.ok) {
      success = true;
      setTimeout(() => window.location.href = '/', 1000);
    } else {
      error = '❌ Login fehlgeschlagen – bitte überprüfe deine Eingaben.';
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .login-container {
    width: 100%;
    max-width: 420px;
    padding: 2.5rem 2rem;
    background-color: rgba(30, 30, 30, 0.95);
    border-radius: 12px;
    color: #fff;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #2ecc71;
  }

  label {
    display: block;
    text-align: left;
    margin: 1rem 0 0.5rem;
    font-weight: bold;
    color: #ccc;
  }

  input {
    width: 100%;
    padding: 0.85rem;
    border: none;
    border-radius: 6px;
    background: #2d2d2d;
    color: #f0f0f0;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 0.85rem;
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    border: none;
    border-radius: 6px;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.3s ease;
  }

  button:hover {
    transform: scale(1.03);
    background: linear-gradient(135deg, #27ae60, #2ecc71);
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .error {
    margin-top: 1rem;
    color: #e74c3c;
    text-align: center;
    font-size: 1rem;
  }

  .success {
    margin-top: 1rem;
    color: #2ecc71;
    text-align: center;
    font-size: 1rem;
  }
</style>

<div class="overlay">
  <div class="login-container">
    <h2>🔐 Login</h2>

    <label for="username">Benutzername</label>
    <input id="username" placeholder="admin" bind:value={username} />

    <label for="password">Passwort</label>
    <input id="password" type="password" placeholder="secret" bind:value={password} />

    <button on:click={login} disabled={loading}>
      {#if loading}
        ⏳ Wird geprüft...
      {:else}
        Einloggen
      {/if}
    </button>

    {#if error}
      <p class="error">{error}</p>
    {/if}

    {#if success}
      <p class="success">✅ Login erfolgreich! Weiterleitung...</p>
    {/if}
  </div>
</div>